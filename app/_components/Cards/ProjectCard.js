import { useState } from "react";
import Link from "next/link";
import { Box, Fade } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({ href, url, img, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link
            href={href}
            style={{ display: "inline-block", width: "100%", height: "100%" }}>
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    position: "relative",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid #000",
                    height: "100%",
                    color: "#000",
                    py: { xs: "15vh", sm: "10vh", md: "8vh" },
                    background: `url(${img}) center / cover`,
                }}>
                <Box
                    className="position-bottom-right white"
                    sx={{ display: { xs: "flex", sm: "none" } }}>
                    <LanguageIcon sx={{ color: color }} />
                </Box>
                <Fade in={isHovered}>
                    <Box
                        className="radius-8 flex center"
                        sx={{
                            flexDirection: "column",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                        }}>
                        <LanguageIcon className="fs-60" sx={{ color: color }} />
                        <Box component="code" sx={{ color: color }}>
                            {url}
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Link>
    );
};

export default ProjectCard;
