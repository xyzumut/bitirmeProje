import React, {useEffect, useRef} from "react";
import styled from 'styled-components'
const KanbanCell = styled.div`
    width: 100%;
    height: 110px;
    background-color: red;
    border-radius: 5px;
    margin:10px 0;
    cursor: pointer;
    padding: 2px;
`
const CellTags = styled.div`
    width: 100%;
    height: 25px;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const CellTag = styled.div`
    height: 20px;
    width: auto;
    padding: 1px 10px;
    background-color: yellow;
    margin: 2px;
    border-radius: 5px;
    background-color:${({tag}) => tag && tag ==='bugfix' ? 'yellow' : tag === 'update' ? 'green' : 'orange'}
`

const Cell = ({tags=['bugfix']}) => {
    /* tags = [tag1,tag2,tag3] */
    const kanbanCellRef = useRef()

    useEffect(()=>{
        kanbanCellRef.current.addEventListener('dragstart',(e)=>{
            const activeCell = e.currentTarget
            activeCell.className+=' cellHold'
        })
        kanbanCellRef.current.addEventListener('dragend',(e)=>{
            const activeCell = e.currentTarget
            activeCell.classList.remove('cellHold')
        })
    },[])

    return(
        <KanbanCell draggable={"true"} ref={kanbanCellRef}>
            <CellTags>
                {
                    tags.map((tag,key)=>{
                        return(<CellTag key={key} tag={tag} >{tag}</CellTag>)
                    })
                }
            </CellTags>
        </KanbanCell>
    )
}
export default Cell