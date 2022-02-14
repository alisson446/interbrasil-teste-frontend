import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Redirect } from "react-router-dom"

import { apiLogin } from './actions'
import { addNotification } from '../App/actions'
import { LoginPayload } from './types'
import { Container, Panel, Input, ButtonTextEnter, Label } from './styles'

const Login: React.FC<Props> = (props) => {
    const [cnpj, setCnpj] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [redirect, setRedirect] = useState<any>(null)

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        props.login({ cnpj, password })
            .then(() => {
                setRedirect(<Redirect to='/' />)
            })
            .catch(() => props.addNotification('Não foi possível entrar', 'error'))
    }

    return (
        <Container>
            <Panel>
                <Label>Acesso exclusivo para empresas</Label>
                <Input
                    type="text"
                    name="username"
                    placeholder="CNPJ"
                    onChange={(event) => setCnpj(event.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <ButtonTextEnter className='center' onClick={handleSubmit}>
                    Entrar
                </ButtonTextEnter>
            </Panel>

            {redirect}
        </Container>
    )
}

const mapDispatch = (dispatch: CallableFunction) => {
    return {
        login: (payload: LoginPayload) => dispatch(apiLogin(payload)),
        addNotification: (message: string, level: string) => dispatch(addNotification(message, level))
    }
}

const connector = connect(null, mapDispatch)
type Props = ConnectedProps<typeof connector>

export default connector(Login)
