import { Box, Typography, Container } from "@mui/material";

const Home = () => {
    return (
        <Container maxWidth={"lg"}>
            <Box mt={"calc(40vh - 1.5em)"}>
                <Typography
                    variant="h1"
                    textAlign="center"
                    fontSize={{ xs: "9vw", sm: "8vw", lg: "5vw" }}>
                    Your next developer?
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
