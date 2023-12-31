/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../enums/product";
import { useHandleMenu } from "../hooks/useHandleMenu";
import { useHandleCart } from "../hooks/useHandleCart";
import { findObjectById } from "../utils/array";
import { useParams } from "react-router-dom";
import { initializeUserSession } from "../components/pages/order/Main/helpers/initializeUserSession";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  // States
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { username } = useParams();
  const {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useHandleMenu();
  const {
    cart,
    setCart,
    handleAddToCart,
    handleDeleteProductFromCart,
    resetCart,
    incrementProductAlreadyInCart,
    decrementProductAlreadyInCart,
  } = useHandleCart();

  useEffect(() => {
    initializeUserSession(username, setMenu, setCart);
  }, []);

  const handleSelectedProduct = async (idCardClicked) => {
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productClickedOn = findObjectById(menu, idCardClicked);

    await setSelectedProduct(productClickedOn);
    titleEditRef.current.focus();
  };

  return (
    <AdminContext.Provider
      value={{
        username,
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        selectedProduct,
        setSelectedProduct,
        handleSelectedProduct,
        titleEditRef,
        newProduct,
        setNewProduct,
        menu,
        setMenu,
        handleAddProduct,
        handleDeleteProduct,
        handleEditProduct,
        resetMenu,
        cart,
        handleAddToCart,
        handleDeleteProductFromCart,
        resetCart,
        incrementProductAlreadyInCart,
        decrementProductAlreadyInCart,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
