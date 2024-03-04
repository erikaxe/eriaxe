"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const commonClasses = {
    // Font sizes
    "&.fs-15": {
        fontSize: "15px",
    },
    "&.fs-16": {
        fontSize: "16px",
    },
    "&.fs-18": {
        fontSize: "18px",
    },
    "&.fs-20": {
        fontSize: "20px",
    },
    "&.fs-24": {
        fontSize: "24px",
    },
    // Responsive font sizes
    "&.fs21-15": {
        fontSize: "21px",
        "@media(max-width: 768px)": {
            fontSize: "15px",
        },
    },
    "&.fs18-21": {
        fontSize: "18px",
        "@media (max-width: 599px)": {
            fontSize: "21px",
        },
    },
    "&.fs45-30": {
        fontSize: "45px",
        "@media(max-width: 768px)": {
            fontSize: "30px",
        },
    },
    // Line heights
    "&.lh-30": {
        lineHeight: "30px",
    },
    "&.lh-34": {
        lineHeight: "34px",
    },
    // Letter spacing
    "&.ls-normal": {
        letterSpacing: "normal",
    },
    "&.ls-2": {
        letterSpacing: "2px",
    },
    // Alignments
    "&.text-center": {
        textAlign: "center",
    },
    "&.text-right": {
        textAlign: "right",
    },
    // Font weights
    "&.fw-600": {
        fontWeight: "600",
    },
    "&.fw-700": {
        fontWeight: "700",
    },
};

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
        body1: {
            lineHeight: "19px",
            fontSize: "12px",
            fontStretch: "normal",
            ...commonClasses,
        },
        h1: {
            lineHeight: "1.2em",
            ...commonClasses,
        },
        h2: {
            ...commonClasses,
        },
        h3: {
            ...commonClasses,
        },
        h4: {
            ...commonClasses,
        },
        h5: {
            ...commonClasses,
        },
        h6: {
            ...commonClasses,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000",
                    "&:hover": {
                        backgroundColor: "#575757",
                    },
                },
            },
        },
    },
});

export default theme;
