// Import React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

import "./images/starwarsintro.css";


export default (
    <Slide bgColor="black" className="star-wars-intro">
        <div style={{fontFamily : "Star Wars"}} className="main-logo">
            This Should Be Star Wars
        </div>

        <div class="main-content">

            <div class="title-content">
                <p class="content-header">EPISODE 42<br/>BLAH BLAH</p>

                <br />

                <p class="content-body">
                    This is a Star Wars intro crawl...
                </p>

            </div>
        </div>

    </Slide>
);