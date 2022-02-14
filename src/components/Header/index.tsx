import React, { useRef, useState } from "react";
import { connect, ConnectedProps } from 'react-redux';

import { logoutUser } from './actions'
import { addNotification } from '../../pages/App/actions'
import { Redirect } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

import { Container, Options, Logo, Logout } from "./styles";
import ImageLogo from "../../assets/logo.png";

const Header: React.FC<Props> = (props) => {

    const optionsRef = useRef<HTMLUListElement>(null);
    const [redirect, setRedirect] = useState<any>(null);

    function handleClick(event: React.MouseEvent<HTMLLIElement>){
        event.preventDefault();
        if(event.currentTarget.classList.contains('active')) return;

        let liActive = optionsRef.current?.querySelector('.active');
        liActive?.classList.remove('active');
        event.currentTarget.classList.add('active');
    }

    function handleLogout(event: React.MouseEvent<HTMLDivElement>){
        event.preventDefault();
        props.logout()
            .then(() => {
                setRedirect(<Redirect to='/' />)
            })
            .catch(() => props.addNotification('Não foi possível deslogar', 'error'));
    }

    return (
        <Container>
            <Logo>
                <img src={ImageLogo} alt="logo" />
            </Logo>

            <Options ref={optionsRef}>
                <li className="active" onClick={handleClick} id='ChatList'>Início</li>
                <li onClick={handleClick} id='ContactsList'>Colaboradores</li>
                <li onClick={handleClick}>Benefícios</li>
            </Options>
            <Logout onClick={handleLogout} id='Logout' >
                <RiLogoutBoxLine />
            </Logout>
            {redirect}
        </Container>
    );
};

const mapDispatch = (dispatch: CallableFunction) => {
    return {
        logout: () => dispatch(logoutUser()),
        addNotification: (message: string, level: string) => dispatch(addNotification(message, level))
    }
}

const connector = connect(null, mapDispatch)
type Props = ConnectedProps<typeof connector>

export default connector(Header);
