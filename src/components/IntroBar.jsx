import React from "react";

function IntroBar (props) {
    return (
        <div>
            <p style={{display: "flex", justifyContent: "center"}}> Welcome to the {props.pagename} Page</p>
        </div>
    );
}

export default IntroBar;
