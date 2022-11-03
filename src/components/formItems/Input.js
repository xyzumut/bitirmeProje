import React, {forwardRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
const InputContainer = styled.div`
    min-width:200px;
    height:26px;
    border:1px solid black;
    display:inline-flex;
    input{
        width:${({icon}) => icon === 'yes' ? '80%' : '100%'};
        height:100%;
        border:none;
    }
    input:focus-visible{
        outline:none;
        border:none;
    }
`
const InputIcon = styled.div`
    width:20%;
    background-color:red;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    svg{
        width:25px;
        height:25px;
    }
`
const Input = forwardRef(({type,onChange,icon='no',style}, ref) => {
    const[show,setShow]=useState(false)
    useEffect(()=>{

    })
    return(
        <InputContainer style={style}>
            <input/>
            {
                icon === 'yes' &&
                <InputIcon onClick={()=>{setShow(!show)}}>
                    {
                        show === false ? <FaEye/> : <FaEyeSlash/>
                    }
                </InputIcon>
            }
        </InputContainer>
    )
})
export default Input