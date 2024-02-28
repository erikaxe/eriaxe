"use client";
import Navbar from "@/app/_components/Globals/Navbar";
/* import DrawerNavigation from "@/app/_components/Globals/DrawerNavigation"; */
import { usePathname } from "next/navigation";

const Globals = () => {
    // Exclude the following pathnames from rendering the TopBar and DrawerNavigation components
    const currentPathname = usePathname();
    const disablePathname = ["/signin"];

    return (
        <div style={{ marginBottom: "109px" }}>
            <Navbar />
            {/* <DrawerNavigation /> */}
        </div>
    );
};

export default Globals;
