"use client";
import React, { useState } from "react";
import {
    Box,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Button,
} from "@mui/material";

const WorkCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                position: "relative",
                color: "red",
                width: "100%",
                height: "200px",
                backgroundColor: "#fff",
                borderRadius: "15px",
                p: 3,
            }}>
            <Typography variant="h3" className="fs-24">
                Title
            </Typography>
            <Typography>years</Typography>
            <Divider />
            <Typography>description section</Typography>
            <Button
                variant="contained"
                sx={{ position: "absolute", bottom: "24px" }}>
                View projects
            </Button>
        </Box>
    );
};

export default WorkCard;
