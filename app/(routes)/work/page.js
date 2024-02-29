import React from "react";
import WorkCard from "@/app/_components/Cards/WorkCard";
import { Box, Container } from "@mui/material";

const page = () => {
    return (
        <Container
            maxWidth={"md"}
            sx={{ mt: "calc(30vh - 1.5em)", backgroundColor: "coral" }}>
            <Box>
                <WorkCard />
            </Box>
        </Container>
    );
};

export default page;
