import { Box, Container, Grid } from "@mui/material";
import NavLink from "@/app/_components/Links/NavLink";
import MenuDrawer from "@/app/_components/Drawers/MenuDrawer";
import MainLogo from "@/app/_components/Logo/MainLogo";
import routeLinks from "@/public/routeLinks.json";

const Navbar = () => {
    return (
        <Box
            component={"header"}
            sx={{
                backgroundColor: "#000",
                position: "fixed",
                boxShadow: 5,
                zIndex: 900,
            }}
            width="100%"
            py={3}>
            <Container maxWidth="lg" sx={{ display: "flex" }}>
                <Grid container spacing={3} className="flex center">
                    <Grid item xs={2}>
                        <MainLogo />
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={5}>
                        <Box
                            component={"nav"}
                            className="flex center-x"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                            }}>
                            <Box
                                component={"ul"}
                                className="flex space-evenly center-y nav-list">
                                {routeLinks.map((link, i) => {
                                    return (
                                        <Box component={"li"} key={i}>
                                            <NavLink
                                                href={link.href}
                                                text={link.text}
                                                external={link.external}
                                            />
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                        <Box
                            className="flex end"
                            sx={{ display: { xs: "flex", sm: "none" } }}>
                            <MenuDrawer links={routeLinks} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Navbar;
