import React,{useEffect, useRef} from "react";
import styled from 'styled-components'
const Column = styled.div`
    border: 1px solid black;
    width:170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    overflow: auto;
    padding:3px 5px;
    align-content: flex-start;
    z-index:100;
`
const ColumnName = styled.div`
    width:100%;
    height:24px;
    background-color:white;
    font-size:20px;
    text-align:center;
    line-height:24px;
`
const KanbanColumn = ({children,columnName}) => {

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
            const activeCell = document.querySelector('.cellHold')
            hedefKolon.append(activeCell)
            hedefKolon.classList.remove('targetColumn')
        })
    },[])

    return(
        <Column ref={columnRef}> 
            <ColumnName>{columnName}</ColumnName>
            {children}
        </Column>
    )
}
export default KanbanColumn