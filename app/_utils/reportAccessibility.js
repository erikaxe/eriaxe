"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const ReportAccessibility = () => {
    const pathname = usePathname();
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            process.env.NODE_ENV !== "production"
        ) {
            // Import the modules dynamically to ensure fresh execution
            Promise.all([import("@axe-core/react"), import("react-dom")]).then(
                ([axe, ReactDOM]) => {
                    // Run axe with fresh instance
                    axe.default(React, ReactDOM, 1000);
                }
            );
        }
    }, [pathname]);

    return null;
};

export default ReportAccessibility;

/* https://www.cypress.io/ 
https://developer.mozilla.org/en-US/docs/Learn/Accessibility */
