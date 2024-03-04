import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import NavLink from "@/app/_components/Links/NavLink";
import MenuDrawer from "@/app/_components/Drawers/MenuDrawer";

const Navbar = () => {
    return (
        <nav>
            <Box
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
                            <Link href="/">
                                <svg
                                    width="60"
                                    height="50"
                                    viewBox="0 0 65 57"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M32.5 0L64.976 56.25H0.0240479L32.5 0Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={5}>
                            <Box
                                className="flex space-evenly center-y"
                                sx={{ display: { xs: "none", sm: "flex" } }}>
                                <NavLink href="/resume" text="CV" />
                                <NavLink href="/work" text="Arbete" />
                                <NavLink href="/contact" text="Kontakt" />
                                <NavLink
                                    external={true}
                                    href="https://github.com/erikaxe/eriaxe"
                                    text="Repo"
                                />
                            </Box>
                            <Box
                                className="flex end"
                                sx={{ display: { xs: "flex", sm: "none" } }}>
                                <MenuDrawer />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </nav>
    );
};

export default Navbar;
