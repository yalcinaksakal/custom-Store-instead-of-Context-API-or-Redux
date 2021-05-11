import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toogleFav: id => {},
});

export default props => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = productId => {
    setProducts(currentProdList => {
      const pIndex = currentProdList.findIndex(p => p.id === productId);
      const newFavStatus = !currentProdList[pIndex].isFavorite;
      const updatedList = [...currentProdList];
      updatedList[pIndex] = {
        ...currentProdList[pIndex],
        isFavorite: newFavStatus,
      };

      return updatedList;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, toggleFav }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
