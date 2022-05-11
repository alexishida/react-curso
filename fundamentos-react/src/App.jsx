import "./App.css";
import React from "react";

import Card from "./components/layout/Card";


import Aleatorio from "./components/Aleatorio";
import Fragmento from "./components/basicos/Fragmento"
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from "./components/basicos/Primeiro"
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default function App(props) {
    return (<div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#08 - Rendereização Condicional" color="#982395">
                <ParOuImpar numero = {20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Alex Ishida'}}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Componente Lista Alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ishida" >
                    <FamiliaMembro nome="Alex" />
                    <FamiliaMembro nome="Alan" />
                    <FamiliaMembro nome="Jussara" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>)
}
