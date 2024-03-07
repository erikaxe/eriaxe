import SkillsGrid from "@/app/_components/Grids/SkillsGrid";
import { Container, Typography } from "@mui/material";
import SubHeader from "@/app/_components/Headers/SubHeader";
import EducationGrid from "@/app/_components/Grids/EducationGrid";
import ResumeWorkGrid from "@/app/_components/Grids/ResumeWorkGrid";

const page = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: "calc(30vh - 1.5em)" }}>
            <section>
                <Typography variant="h1" className="fs45-30 fw-600">
                    Erik Axelsson
                </Typography>
                <Typography variant="body1" className="fs21-15 lh-34" my={4}>
                    En noggrann front-end-utvecklare med en passion för att
                    omvandla design och wireframes till responsiva och
                    användarvänliga webbplatser.
                </Typography>
            </section>
            <section>
                <SubHeader text={"Färdigheter"} />
                <SkillsGrid />
            </section>
            <section>
                <SubHeader text={"Utbildning"} />
                <EducationGrid />
            </section>
            <section>
                <SubHeader text={"Arbete"} />
                <ResumeWorkGrid />
            </section>
        </Container>
    );
};

export default page;
