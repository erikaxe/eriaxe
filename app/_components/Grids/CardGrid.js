import React from "react";
import workExperience from "@/public/workExperience.json";
import { Grid } from "@mui/material";
import WorkCard from "@/app/_components/Cards/WorkCard";

const CardGrid = () => {
    return (
        <Grid container spacing={2}>
            {workExperience.map((item, i) => {
                let smValue;

                if (i % 3 === 0) {
                    smValue = 12; // Every third item gets a value of 12
                } else {
                    smValue = 6; // Other items get a value of 6
                }

                return (
                    <Grid item xs={12} sm={smValue} key={i}>
                        <WorkCard
                            title={item.title}
                            years={item.years}
                            subHeader={item.subHeader}
                            desc={item.desc}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default CardGrid;
