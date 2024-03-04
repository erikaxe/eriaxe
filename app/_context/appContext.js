"use client";
import { useState, createContext } from "react";
import { useTheme } from "@mui/material/styles";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [openDrawerNav, setOpenDrawerNav] = useState(false);

    const value = {
        openDrawerNav,
        setOpenDrawerNav,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
