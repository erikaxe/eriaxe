import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/_context/appContext";
import { Typography } from "@mui/material";

const NavLink = ({ href, text, external }) => {
    const { setOpenDrawerNav } = useContext(AppContext);

    return (
        <Link
            target={external ? "_blank" : ""}
            onClick={() => setOpenDrawerNav(false)}
            className="hover-underline-animation width-fit-content"
            href={href || "/"}>
            <Typography variant="h2" className="fs18-21">
                {text}
            </Typography>
        </Link>
    );
};

export default NavLink;
