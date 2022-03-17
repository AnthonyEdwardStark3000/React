import React from "react";


function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer>
    <p>
        CopyRight © Stark Industries {currentYear}
    </p>
    </footer>
)}

export default Footer