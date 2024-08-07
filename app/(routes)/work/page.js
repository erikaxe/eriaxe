import React from "react";
import { Typography, Container } from "@mui/material";
import WorkGrid from "@/app/_components/Grids/WorkGrid";

const page = () => {
    return (
        <Container maxWidth={"md"} sx={{ mt: "calc(30vh - 1.5em)" }}>
            <Typography variant="h1" className="sr-only">
                My Professional Experience
            </Typography>
            <WorkGrid skipLastIndex />
        </Container>
    );
};

export default page;
