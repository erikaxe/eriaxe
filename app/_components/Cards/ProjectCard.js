import React, { useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({ title, url }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Box
                className="flex"
                position="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Image
                    className="radius-8"
                    src="/avie_og_img.jpg"
                    alt="essential-long-sleeve-light-grey-med-silver-logo-ridtopp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
                <Box
                    className="position-bottom-right white"
                    sx={{ display: { xs: "flex", sm: "none" } }}>
                    <LanguageIcon />
                </Box>
                <Fade in={isHovered}>
                    <Link href={url} target="_blank">
                        <Box
                            className="radius-8 flex center"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                            }}>
                            <LanguageIcon className="fs-60" />
                        </Box>
                    </Link>
                </Fade>
            </Box>
            <Typography variant="h3" className="fs-16" mt={1}>
                {title}
            </Typography>
        </>
    );
};

export default ProjectCard;
