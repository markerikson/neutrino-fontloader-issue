// Import React
import React from "react";

import "typeface-news-cycle";

import styled, { css } from 'react-emotion';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

const StarWarsIntroText = styled("div")`
    z-index: 1;
    color: rgb(75, 213, 238);
    font-weight: 400;
    font-size: 300%;
`;

export default (
    <Slide bgColor="black" align="center center" className="star-wars-intro">
            <div className="intro-text">
                A long time ago, in a web dev <br />world far, far, away...
            </div>



    </Slide>
);