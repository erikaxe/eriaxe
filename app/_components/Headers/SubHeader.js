import { Typography, Divider, Box } from "@mui/material";

const SubHeader = ({ text }) => {
    return (
        <Box my={5}>
            <Typography variant="h2" className="fs-18 fw-600 ls-2">
                {text}
            </Typography>
            <Divider
                sx={{
                    width: "25%",
                    my: 3,
                    borderColor: "#4d4b4b",
                }}
            />
        </Box>
    );
};

export default SubHeader;
