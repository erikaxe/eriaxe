"use client";
import React, { useState } from "react";
import { Box, Typography, Divider, Button, Collapse } from "@mui/material";
import ProjectGrid from "@/app/_components/Grids/ProjectGrid";

const WorkCard = ({ title, years, subHeader, desc }) => {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                position: "relative",
                color: "#000",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "15px",
                p: 3,
            }}>
            <Typography variant="h2" className="fs-24 fw-600">
                {title}
            </Typography>
            <Typography variant="body1" className="fs-16" mb={1} mt={0.3}>
                {years}
            </Typography>
            <Divider />
            <Typography variant="h3" className="fs-16 fw-600" my={1}>
                {subHeader}
            </Typography>
            <Typography variant="body1" className="fs-16" mb={3}>
                {desc}
            </Typography>
            <Collapse in={open} timeout="auto">
                <Typography variant="body1" className="fs-16" mb={1}>
                    Några av de projekten jag har jobbat med:
                </Typography>
                <ProjectGrid />
            </Collapse>
            <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="project-view"
                aria-label="Project view">
                {open ? "Stäng" : "Visa"} projekt
            </Button>

            <div id="project-view" aria-live="polite" className="sr-only">
                {open
                    ? "New project cards displayed above."
                    : "Project view closed."}
            </div>
        </Box>
    );
};

export default WorkCard;
