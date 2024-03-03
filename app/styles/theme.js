"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const commonClasses = {
    // Font sizes
    "&.fs-12": {
        fontSize: "12px",
    },
    "&.fs-13": {
        fontSize: "13px",
    },
    "&.fs-14": {
        fontSize: "14px",
    },
    "&.fs-15": {
        fontSize: "15px",
    },
    "&.fs-16": {
        fontSize: "16px",
    },
    "&.fs-17": {
        fontSize: "17px",
    },
    "&.fs-18": {
        fontSize: "18px",
    },
    "&.fs-19": {
        fontSize: "19px",
    },
    "&.fs-20": {
        fontSize: "20px",
    },
    "&.fs-21": {
        fontSize: "21px",
    },
    "&.fs-22": {
        fontSize: "22px",
    },
    "&.fs-23": {
        fontSize: "23px",
    },
    "&.fs-24": {
        fontSize: "24px",
    },
    "&.fs-50": {
        fontSize: "50px",
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
    "&.fs34-25": {
        fontSize: "34px",
        "@media(max-width: 768px)": {
            fontSize: "25px",
        },
    },
    "&.fs45-30": {
        fontSize: "45px",
        "@media(max-width: 768px)": {
            fontSize: "30px",
        },
    },
    // Font stretches
    "&.narrow": {
        fontStretch: "80%",
    },
    "&.wide": {
        fontStretch: "140%",
    },
    // Font colors
    "&.white": {
        color: "var(--white)",
    },
    "&.black": {
        color: "var(--black)",
    },
    "&.gray": {
        color: "var(--gray)",
    },
    // Text transforms
    "&.uppercase": {
        textTransform: "uppercase",
    },
    "&.lowercase": {
        textTransform: "lowercase",
    },
    "&.capitalize": {
        textTransform: "capitalize",
    },
    // Line heights
    "&.lh-13": {
        lineHeight: "13px",
    },
    "&.lh-15": {
        lineHeight: "15px",
    },
    "&.lh-17": {
        lineHeight: "17px",
    },
    "&.lh-18": {
        lineHeight: "18px",
    },
    "&.lh-19": {
        lineHeight: "19px",
    },
    "&.lh-20": {
        lineHeight: "20px",
    },
    "&.lh-21": {
        lineHeight: "21px",
    },
    "&.lh-22": {
        lineHeight: "22px",
    },
    "&.lh-23": {
        lineHeight: "23px",
    },
    "&.lh-24": {
        lineHeight: "24px",
    },
    "&.lh-26": {
        lineHeight: "26px",
    },
    "&.lh-29": {
        lineHeight: "29px",
    },
    "&.lh-30": {
        lineHeight: "30px",
    },
    "&.lh-31": {
        lineHeight: "31px",
    },
    "&.lh-32": {
        lineHeight: "32px",
    },
    "&.lh-33": {
        lineHeight: "33px",
    },
    "&.lh-34": {
        lineHeight: "34px",
    },
    "&.lh-38": {
        lineHeight: "38px",
    },
    "&.lh-42": {
        lineHeight: "42px",
    },
    "&.lh-47": {
        lineHeight: "47px",
    },
    // Responsive line heights
    "&.lh29-19": {
        lineHeight: "29px",
        "@media(max-width: 768px)": {
            lineHeight: "19px",
        },
    },
    // font-weight
    "&.fw-300": {
        fontWeight: "300",
    },
    "&.fw-400": {
        fontWeight: "400",
    },
    "&.fw-500": {
        fontWeight: "500",
    },
    "&.fw-600": {
        fontWeight: "600",
    },
    "&.fw-700": {
        fontWeight: "700",
    },
    "&.fw-800": {
        fontWeight: "800",
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
    "&.fw-400": {
        fontWeight: "400",
    },
    "&.fw-500": {
        fontWeight: "500",
    },
    "&.fw-600": {
        fontWeight: "600",
    },
    "&.fw-700": {
        fontWeight: "700",
    },
    "&.fw-800": {
        fontWeight: "800",
    },
};

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    typography: {
        fontFamily: roboto,
        body1: {
            lineHeight: "19px",
            fontSize: "12px",
            fontStretch: "normal",
            ...commonClasses,
        },
        h1: {
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
                    // Add a hover effect
                    "&:hover": {
                        backgroundColor: "#575757",
                    },
                },
            },
        },
    },
});

export default theme;
