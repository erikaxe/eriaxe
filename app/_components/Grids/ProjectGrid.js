import { Grid } from "@mui/material";
import projects from "@/public/projects.json";
import ProjectCard from "@/app/_components/Cards/ProjectCard";

const ProjectGrid = () => {
    return (
        <Grid container spacing={2}>
            {projects.map((item, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProjectCard
                            href={item.url}
                            title={item.title}
                            url={item.display_url}
                            img={item.img}
                            color={item.color}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProjectGrid;
