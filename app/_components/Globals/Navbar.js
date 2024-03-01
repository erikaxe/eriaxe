import * as React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Container,
    useScrollTrigger,
    Fab,
    Fade,
    Divider,
    Grid,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/_components/Links/NavLink";
import MenuDrawer from "@/app/_components/Drawers/MenuDrawer";

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Fade>
    );
}

export default function BackToTop(props) {
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
                                    width="65"
                                    height="57"
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
                        <Grid item xs={6} className="flex center">
                            <Divider
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    width: "100%",
                                    borderBottomWidth: 1,
                                    borderColor: "#4d4b4b",
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                className="flex space-evenly center-y"
                                sx={{ display: { xs: "none", sm: "flex" } }}>
                                <NavLink href="/" text="CV" />
                                <NavLink href="/work" text="Arbete" />
                                <NavLink href="/contact" text="Kontakt" />
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
            {/* <Toolbar id="back-to-top-anchor" />

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
        </nav>
    );
}
