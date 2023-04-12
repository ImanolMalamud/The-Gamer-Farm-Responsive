import Categories from "components/categories";
import Products from "components/products";
import SortByPrice from "components/sortbyprice";
import StoreHeader from "components/storeheader";
import React from "react";
import { useSelector } from "react-redux";

const Store = () => {
  const filter = useSelector((state) => state.global.filter);
  return (
    <>
      {filter ? <StoreHeader /> : <Categories />}

      {filter && (
        <>
          <Products />
        </>
      )}
    </>
  );
};

export default Store;
