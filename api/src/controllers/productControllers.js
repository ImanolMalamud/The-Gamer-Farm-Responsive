const { Product, Console, Category } = require("../db")

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Console,
        },
      ],
    })

    if (!products.length)
      return res.status(201).send("No hay productos en la base de datos")

    res.status(200).json(products)
    return products
  } catch (error) {
    return res.status(404).send(error)
  }
}

// const getProductById = async (req, res) => {
//   try {
//     // Observar que el id del params viene como string.
//     const { id } = req.params
//     const allProducts = await getAllProducts()
//     const product = allProducts?.find(product => product.id == id)
//     res.json(product)
//   } catch (error) {
//     console.log(error)
//     res.status(400).send(error.message)
//   }
// }

const createProduct = async (req, res) => {
  try {
    const { name, price, detail, img, stock, console, category } = req.body

    const defaultImg =
      "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"

    let newProduct = await Product.create({
      name,
      price: parseInt(price),
      detail,
      img: img ? img : defaultImg,
      stock: parseInt(stock),
    })

    if (category.length) {
      category.map(async category => {
        let c = await Category.findOrCreate({
          where: { name: category },
        })

        newProduct.addCategory(c[0])
      })
    }

    if (console.length) {
      console.map(async console => {
        let c = await Console.findOrCreate({
          where: { name: console },
        })

        newProduct.addConsole(c[0])
      })
    }

    let newConsole = await Console.findOrCreate({
      where: { name: console[0] },
    })

    await newProduct.addConsole(newConsole)

    return res.status(200).send("Product created succesfully.", newProduct)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}

module.exports = {
  getAllProducts,
  // getProductById,
  createProduct,
}
