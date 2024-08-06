import { useState } from "react";
import Link from "next/link";
import { Box, Fade } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({ href, url, img, color, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link
            href={href}
            target="_blank"
            className="inline-block-link"
            aria-label={`Project ${title} page.`}>
            <Box
                className="project-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    py: { xs: "15vh", sm: "10vh", md: "8vh" },
                    background: `url(${img}) center / cover`,
                }}>
                <Box
                    className="position-bottom-right white"
                    sx={{ display: { xs: "flex", sm: "none" } }}>
                    <LanguageIcon sx={{ color: color }} />
                </Box>
                <Fade in={isHovered}>
                    <Box className="radius-8 flex center column fade-in-overlay">
                        <LanguageIcon
                            className="fs-60"
                            sx={{ color: "#000" }}
                        />
                        <Box component="code" color="#000">
                            {url}
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Link>
    );
};

export default ProjectCard;
