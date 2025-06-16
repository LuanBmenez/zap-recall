import Home from "./components/Home";
import Deckcards from "./components/DeckCards";
import { useState } from 'react';



function App() {

    const [deckAndMeta, setDeckAndMeta] = useState({deck:"", meta:""});
    const [visible, setVisible] = useState(true);
    
    return (
        <>
            <Home visible={visible} setVisible={setVisible} deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta}/>
            <Deckcards deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta} visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default  App;