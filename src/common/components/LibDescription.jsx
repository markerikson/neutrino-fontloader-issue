import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fit,
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

 const LibDescription = (props) => {
     let {repoName} = props;

     if(!repoName && props.url.startsWith("https://github.com/")) {
         repoName = props.url.replace("https://github.com/", "");
     }

     return (
         <span>
            <Text  style={{fontSize : "2.5rem"}}>
                <b><a href={props.url}>{repoName}</a></b>
            </Text>

            <Text textColor="black" style={{fontSize : "2.25rem"}}>
                {props.children}
            </Text>
        </span>
     );

}

export default LibDescription;