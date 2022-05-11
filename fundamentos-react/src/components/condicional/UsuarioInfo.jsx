import React from "react";
import If from './If'

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario}>
                Seja bem vindo <strong> { props.usuario.nome } </strong>
            </If>
        </div>
    )
}