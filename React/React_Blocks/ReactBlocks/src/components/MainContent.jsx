import React from "react";
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';


function MainContent() {
    return(
        <main className="main-content">
            <div className="sub">
            <Subcontent />
            <Subcontent />
            <Subcontent />
            </div>
            <Advertisement />
        </main>
    )
}

export default MainContent;