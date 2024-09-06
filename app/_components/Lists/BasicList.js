import { List, ListItem, Typography } from "@mui/material";

const BasicList = ({ data, title }) => {
    return (
        data && (
            <>
                <Typography variant="h3" className="fs-16 fw-700">
                    {title}
                </Typography>

                <List className="lh-30">
                    {data.map((skill, i) => (
                        <ListItem key={i} disablePadding className="fs-15">
                            {skill}
                        </ListItem>
                    ))}
                </List>
            </>
        )
    );
};

export default BasicList;
