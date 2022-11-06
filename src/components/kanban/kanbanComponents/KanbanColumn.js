import React,{useEffect, useRef} from "react";
import styled from 'styled-components'
import { useTheme } from "../../../context/ThemeContext";
const Column = styled.div`
    border: 1px solid ${({themeItems}) => themeItems.theme === true ? themeItems.dark : themeItems.light};
    width:200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    overflow: auto;
    padding:0px 5px;
    align-content: flex-start;
    z-index:100;
    background-color:${({themeItems}) => themeItems.theme === true ? themeItems.gray : themeItems.dark1};
    color:${({themeItems}) => themeItems.theme === true ? themeItems.dark1 : themeItems.light  };
    position:relative;
    `
const ColumnName = styled.div`
    width:100%;
    height:24px;
    background-color:inherit;
    font-size:14px;
    font-weight:600;
    text-align:center;
    line-height:24px;
    position:sticky;
    top:0;
    &:after{
        content:'';
        width:100%;
        height:2px;
        poisiton:absolute;
        display:block;
        top:0;
        bottom:0;
        background-color:${({themeItems}) => themeItems.theme === true ? themeItems.dark1 : themeItems.light};
    }
`
const KanbanColumn = ({children,columnName}) => {
    const themeItems = useTheme()
    const columnRef = useRef()
    useEffect(()=>{
        columnRef.current.addEventListener('dragenter',(e)=>{
            const _column = e.currentTarget
            _column.className+=' targetColumn'
        })
        columnRef.current.addEventListener('dragover',(e)=>{
            e.preventDefault()
        })
        columnRef.current.addEventListener('dragleave',(e)=>{
            const _column = e.currentTarget
            _column.classList.remove('targetColumn')
        })
        columnRef.current.addEventListener('drop',(e)=>{
            const hedefKolon = e.currentTarget
            const activeTicket = document.querySelector('.ticketHold')
            hedefKolon.append(activeTicket)
            console.log(activeTicket)
            hedefKolon.classList.remove('targetColumn')
        })
    },[])

    return(
        <Column  themeItems={themeItems}ref={columnRef}> 
            <ColumnName themeItems={themeItems}>{columnName}</ColumnName>
            {children}
        </Column>
    )
}
export default KanbanColumn