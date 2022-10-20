import React from "react";

function IntroBar (props) {
    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}> Welcome to the {props.pagename} Page</h1>
        </div>
    );
}

export default IntroBar;
