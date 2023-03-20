const createProducts = async (req, res) => {
  const { name, price, detail, img, stock, console } = req.body

  try {
    const defaultImg =
      "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"

    let productCreated = await Product.create({
      name,
      price,
      detail,
      img: img ? img : defaultImg,
      stock,
    })

    if (category.length) {
      category.map(async cat => {
        let c = await Category.findOrCreate({
          where: { name: cat },
        })

        productCreated.addCategory(c[0])
      })
    }
    console.log("ESTO llega marca", mark)
    if (mark.length) {
      mark.map(async mak => {
        let m = await Mark.findOrCreate({
          where: { title: mak },
        })

        productCreated.addMark(m[0])
        // console.log("ESTO GUARDA", m[0])
      })
    }

    res.status(200).send("Product created succesfully")
    console.log("producto creado")
  } catch (error) {
    console.log("este es el error", error)
    res.status(404).send(error)
  }
}
