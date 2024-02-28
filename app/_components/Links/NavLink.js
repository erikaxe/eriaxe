import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/_context/appContext";
import { Typography } from "@mui/material";

const NavLink = ({ href, text }) => {
    const { setOpenDrawerNav } = useContext(AppContext);

    return (
        <Link
            onClick={() => setOpenDrawerNav(false)}
            className="hover-underline-animation width-fit-content"
            href={href || "/"}>
            <Typography variant="h2" className="fs18-21">
                {text || "*Insert Text*"}
            </Typography>
        </Link>
    );
};

export default NavLink;
