import React from "react";
import { Oval } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div><Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="blue"
            secondaryColor="grey"
        /></div>
    )
}
