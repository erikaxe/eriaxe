import { List, ListItem, Typography } from "@mui/material";

const BasicList = ({ data, title }) => {
    return (
        data && (
            <List className="lh-30">
                <Typography variant="h3" className="fs-16 fw-700">
                    {title}
                </Typography>
                {data.map((skill, i) => (
                    <ListItem key={i} disablePadding className="fs-15">
                        {skill}
                    </ListItem>
                ))}
            </List>
        )
    );
};

export default BasicList;
