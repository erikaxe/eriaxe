import React from "react";
import { Grid, Typography } from "@mui/material";
import education from "@/public/education.json";
import BasicList from "@/app/_components/Lists/BasicList";

const EducationGrid = () => {
    return (
        <Grid container spacing={2}>
            {education.map((item, i) => {
                return (
                    <React.Fragment key={i}>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h3" className="fs-20 fw-600">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" className="fs-15">
                                {item.subTitle}
                            </Typography>
                            <Typography variant="body1" className="fs-15">
                                {item.years}
                            </Typography>
                            <Typography variant="body1" className="fs-15">
                                {item.location}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BasicList
                                data={item.courses}
                                title={item.listTitle}
                            />
                        </Grid>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
};

export default EducationGrid;
