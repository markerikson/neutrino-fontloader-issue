import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

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
    SlideSet,
    Slide,
    Spectacle,
    Text
} from "spectacle";

import Presentation from "common/setup/Presentation";

import anotherSection from "./anotherSection";

const slides = anotherSection.concat(
);


const root = document.getElementById('root');
const load = () => render((
    <AppContainer>
        <Presentation slides={slides} />
    </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  //module.hot.accept('./', load);
    module.hot.accept()
}

load();
