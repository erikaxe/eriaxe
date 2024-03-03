import React from "react";
import { Box, Container } from "@mui/material";
import WorkGrid from "@/app/_components/Grids/WorkGrid";

const page = () => {
    return (
        <Container maxWidth={"md"} sx={{ mt: "calc(30vh - 1.5em)" }}>
            <WorkGrid skipLastIndex />
        </Container>
    );
};

export default page;
