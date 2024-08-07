"use client";
import React from "react";

const ReportAccessibility = () => {
    if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV !== "production"
    ) {
        Promise.all([import("@axe-core/react"), import("react-dom")]).then(
            ([axe, ReactDOM]) => axe.default(React, ReactDOM, 1000)
        );
    }
    return null;
};

export default ReportAccessibility;

/* https://www.cypress.io/ 
https://developer.mozilla.org/en-US/docs/Learn/Accessibility*/
