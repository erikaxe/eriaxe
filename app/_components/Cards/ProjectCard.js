import React, { useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({ title, url, img, alt, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Link href={url} target="_blank">
                <Box
                    className="flex max-height-171"
                    position="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Image
                        className="radius-8 full-width"
                        src={img}
                        alt={alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                    <Box
                        className="position-bottom-right white"
                        sx={{ display: { xs: "flex", sm: "none" } }}>
                        <LanguageIcon sx={{ color: color }} />
                    </Box>
                    <Fade in={isHovered}>
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
                            <LanguageIcon
                                className="fs-60"
                                sx={{ color: color }}
                            />
                        </Box>
                    </Fade>
                </Box>
            </Link>
            <Typography variant="h3" className="fs-16" mt={1}>
                {title}
            </Typography>
        </>
    );
};

export default ProjectCard;
