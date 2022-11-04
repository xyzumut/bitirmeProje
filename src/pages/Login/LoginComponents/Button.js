import React from "react";
import styled from 'styled-components'

const _Button = styled.button`
    padding:6px 60px;
    background-color:${({bgColor}) => bgColor};
    color:${({color}) => color};
    border:1px solid ${({color}) => color};
    border-color: ${({bgColor}) => bgColor};
    cursor:pointer;
    transition:.5s all ease;
    font-size:18px;
    border-radius:${({radius}) => radius};
    &:hover{
        background-color:${({color}) => color};
        color:${({bgColor})=>bgColor};
    }
    &:active{
        box-shadow:0 0 7px 1px ${({bgColor})=>bgColor};
    }
`

const Button = ({onClick,type,children,radius='5px',bgColor='#0d6efd',color='white'}) => {
    return(
        <_Button 
            type={type} 
            onClick={onClick} 
            radius={radius}
            bgColor={bgColor}
            color={color}
        >{children}</_Button>
    )
}
export default Button