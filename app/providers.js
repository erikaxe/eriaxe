"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/styles/theme";
import { AppProvider } from "@/app/_context/appContext";

const Providers = ({ children }) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <AppProvider>{children}</AppProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default Providers;
