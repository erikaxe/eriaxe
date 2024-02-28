import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box mt={"calc(40vh - 1.5em)"}>
            <Typography
                variant="h1"
                textAlign="center"
                fontSize={{ xs: "9vw", sm: "8vw", lg: "5vw" }}>
                Your next
                <Box component="span" className="header-next">
                    .js
                </Box>{" "}
                developer?
            </Typography>
        </Box>
    );
};

export default Home;
