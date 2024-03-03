import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import workExperience from "@/public/workExperience.json";

const ResumeWorkGrid = () => {
    return (
        <Grid container spacing={4}>
            {workExperience.map((item, i) => {
                return (
                    <React.Fragment key={i}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className="fs-20 fw-600">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" className="fs-15">
                                {item.years}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                mb={1}
                                variant="body1"
                                className="fs-18 fw-600">
                                {item.subHeader}
                            </Typography>
                            <Typography variant="body1" className="fs-16">
                                {item.desc}
                            </Typography>
                        </Grid>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
};

export default ResumeWorkGrid;
