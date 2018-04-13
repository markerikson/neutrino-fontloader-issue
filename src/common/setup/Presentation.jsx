// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import styled, { css } from 'react-emotion';

// Require CSS
//import "typeface-montserrat";
import "normalize.css";
import "./global.css";

import "./monokai.css";
import "./prism";
//import "./typeface-montserrat/index.css";

/*
import intro from "./intro";
import react from "./react";
import components from "./components";
import buildingApps from "./building-apps";
import redux from "./redux";
import demo from "./demo";
import furtherInfo from "./furtherInfo";
*/

const theme = createTheme({
    primary : "white",
    secondary : "#1F2022",
    tertiary : "#03A9FC",
    quarternary : "black"
}, {
    primary : "Montserrat",
    secondary : "Helvetica"
});


theme.screen.components.list.fontSize = "2.25rem";
delete theme.screen.components.listItem.fontSize;
theme.screen.components.codePane.fontSize = "1.25rem";
// Ignore the built-in dark theme and use the one we imported above
theme.screen.prism.dark = {};
//theme.screen.components.text.fontSize = "1.75rem";
delete theme.screen.components.list.padding;

/*

const slides = intro.concat(
    react,
    components,
    buildingApps,
    redux,
    demo,
    furtherInfo,
);
*/

const OverridePresentationStyles = styled("div")`
    .spectacle-slide {
        margin : 0 !important;
    }
    
    .spectacle-content {
        padding-top: 0 !important;
        padding-bottom: 20px !important;
    }
    
`

export default class Presentation extends React.Component {
    render() {
        const {slides = [], children} = this.props;

        let content = children;

        if(!content) {
            content = React.Children.toArray(slides)
        }

        return (
            <OverridePresentationStyles>
                <Deck
                    theme={theme}
                    progress="number"
                    contentWidth={1600}
                    contentHeight={1000}
                    controls={true}
                >
                    {content}
                </Deck>
            </OverridePresentationStyles>
        );
    }
}