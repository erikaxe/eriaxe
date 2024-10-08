import { Container, Grid, Typography } from "@mui/material";
import ContactButton from "@/app/_components/Buttons/ContactButton";

const page = () => {
    return (
        <section>
            <Container maxWidth={"lg"} sx={{ mt: "calc(30vh - 1.5em)" }}>
                <Typography variant="h1" className="sr-only">
                    How to contact me
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <ContactButton type={"linkedin"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContactButton type={"mailto"} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default page;
