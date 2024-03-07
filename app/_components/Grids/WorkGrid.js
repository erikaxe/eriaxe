import workExperience from "@/public/workExperience.json";
import { Grid } from "@mui/material";
import WorkCard from "@/app/_components/Cards/WorkCard";

const WorkGrid = ({ skipLastIndex }) => {
    return (
        <section>
            <Grid container spacing={2}>
                {workExperience.map((item, i) => {
                    let smValue;

                    if (i % 3 === 0) {
                        smValue = 12; // Every third item gets a value of 12
                    } else {
                        smValue = 6; // Other items get a value of 6
                    }

                    // Check if it's the last index and skip if needed
                    if (skipLastIndex && i === workExperience.length - 1) {
                        return null;
                    }

                    return (
                        <Grid item xs={12} sm={smValue} key={i}>
                            <article>
                                <WorkCard
                                    title={item.title}
                                    years={item.years}
                                    subHeader={item.subHeader}
                                    desc={item.desc}
                                />
                            </article>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default WorkGrid;
