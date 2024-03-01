import React from "react";
import { Box, Container } from "@mui/material";
import CardGrid from "@/app/_components/Grids/CardGrid";

const page = () => {
    return (
        <Container maxWidth={"md"} sx={{ mt: "calc(30vh - 1.5em)" }}>
            <Box>
                <CardGrid />
            </Box>
        </Container>
    );
};

export default page;
