import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { AppContext } from "@/app/_context/appContext";
import NavLink from "@/app/_components/Links/NavLink";

const MenuDrawer = ({ links }) => {
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
                <nav>
                    <Box
                        component={"ul"}
                        className="flex column center-x "
                        gap={3}
                        mt={4}>
                        {links.map((link, i) => {
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
                </nav>
            </Drawer>
        </>
    );
};

export default MenuDrawer;
