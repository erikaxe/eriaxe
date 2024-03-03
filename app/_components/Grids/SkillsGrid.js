import { Grid } from "@mui/material";
import skills from "@/public/skills.json";
import BasicList from "@/app/_components/Lists/BasicList";

const SkillsGrid = () => {
    return (
        <Grid container spacing={2}>
            {skills.map((item, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <BasicList data={item.skills} title={item.title} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SkillsGrid;
