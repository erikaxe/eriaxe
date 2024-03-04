import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { AppContext } from "@/app/_context/appContext";
import NavLink from "@/app/_components/Links/NavLink";

const MenuDrawer = () => {
    const { openDrawerNav, setOpenDrawerNav } = useContext(AppContext);

    const handleDrawerToggle = () => {
        setOpenDrawerNav(!openDrawerNav);
    };

    return (
        <>
            <IconButton onClick={handleDrawerToggle}>
                <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
            </IconButton>
            <Drawer
                sx={{
                    "& .MuiDrawer-paper": {
                        p: 1,
                        boxSizing: "border-box",
                        width: "80%",
                        borderRight: "1px solid #f0f0f0",
                        backgroundColor: "#171717",
                    },
                }}
                anchor="right"
                open={openDrawerNav}
                onClose={handleDrawerToggle}>
                <IconButton
                    className="width-fit-content"
                    onClick={handleDrawerToggle}>
                    <CloseIcon sx={{ color: "white" }} />
                </IconButton>
                <Box className="flex column center-y" gap={3} mt={4}>
                    <NavLink href="/resume" text="CV" />
                    <NavLink href="/work" text="Arbete" />
                    <NavLink href="/contact" text="Kontakt" />
                </Box>
            </Drawer>
        </>
    );
};

export default MenuDrawer;
