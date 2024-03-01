import React from "react";
import { Grid, Box } from "@mui/material";
import projects from "@/public/projects.json";
import ProjectCard from "@/app/_components/Cards/ProjectCard";

const ProjectGrid = () => {
    return (
        <Grid container spacing={2}>
            {projects.map((item, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProjectCard title={item.title} url={item.url} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProjectGrid;
