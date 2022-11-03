import React from "react";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
    width: 100%;
    height: 50px;
    background-color:#404258;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`
const Header = () => {

    return(
        <HeaderContainer>
            <NavLink className={'headerNavLink'} to={'/kanban'}>Kanban Panosu</NavLink>
            <NavLink className={'headerNavLink'} to={'/login'}>Login Ekranı</NavLink>
        </HeaderContainer>
    )
}
export default Header