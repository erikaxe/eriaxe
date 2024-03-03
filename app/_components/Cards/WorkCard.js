"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    Divider,
    Button,
    Fade,
    IconButton,
    Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
            <Typography variant="h3" className="fs-24 fw-600">
                {title}
            </Typography>
            <Typography variant="body1" className="fs-16" mb={1} mt={0.3}>
                {years}
            </Typography>
            <Divider />
            <Typography variant="h4" className="fs-16 fw-600" my={1}>
                {subHeader}
            </Typography>
            <Typography variant="body1" className="fs-16" mb={3}>
                {desc}
            </Typography>
            <Collapse in={open} timeout="auto">
                <ProjectGrid />
            </Collapse>
            <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => setOpen(!open)}>
                {open ? "Stäng" : "Visa"} projekt
            </Button>
        </Box>
    );
};

export default WorkCard;
