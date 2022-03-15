import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import Body from './Body';




ReactDom.render(
    <div>
    <Heading /> {/** Calling the heading component*/}
    <Body /> {/** Calling the body component*/}
    </div>,
    document.getElementById('root'));