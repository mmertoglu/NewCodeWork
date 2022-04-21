import React from "react";
import Router from "./Router";
import FavouriteProvider from "./context/Provider";

function Wrapper () {
    return(
        <FavouriteProvider>
            <Router/>
        </FavouriteProvider>
    )
}
export default Wrapper