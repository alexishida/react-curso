import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/Aleatorio";

export default function App(props) {
    return (<div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Desafio Aleatorio">
            <Aleatorio min={10} max={60}/>
        </Card>
        
    
    </div>)
}
