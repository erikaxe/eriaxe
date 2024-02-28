"use client";
import { useState, createContext, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const theme = useTheme();

    const [openDrawerNav, setOpenDrawerNav] = useState(false);

    const value = {
        openDrawerNav,
        setOpenDrawerNav,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
