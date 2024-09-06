import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const iconComponents = {
    linkedin: {
        Icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/eriaxe",
        ariaLabel: "Visit Erik's LinkedIn profile",
    },
    mailto: {
        Icon: EmailOutlinedIcon,
        link: "mailto:erikio93@hotmail.com",
        ariaLabel: "Send an email to Erik",
    },
};

const ContactButton = ({ type }) => {
    // Destructure the Icon and link from the iconComponents object based on the given type prop
    const { Icon, link, ariaLabel } = iconComponents[type] || {};

    return (
        Icon &&
        link && (
            <Link href={link} target="_blank" aria-label={ariaLabel}>
                <Box p={8} className="flex center border-white box-hover-white">
                    <Icon style={{ fontSize: "100px" }} />
                </Box>
            </Link>
        )
    );
};

export default ContactButton;
