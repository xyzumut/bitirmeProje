import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Cell from "./Cell";
import KanbanColumn from "./KanbanColumn";
const KanbanTable = styled.div`
    height: 400px;
    background-color: wheat;
    display: flex;
    flex-direction: row;
    width:max-content;
`
const Kanban = ({columnData}) => {
    return(
        <KanbanTable style={{margin:'100px auto'}}>
            {
                columnData.map((item,key)=>{
                    return(
                        <KanbanColumn key={key} columnName={item.columnName} >
                            {
                                item.cellTags && item.cellTags.map((cellTag,key)=>{
                                    return(<Cell key={key} tags={cellTag} />)
                                })
                            }
                        </KanbanColumn>
                    )
                })
            }
        </KanbanTable>
    )
    // return(
    //     <KanbanTable>
    //         <KanbanColumn columnName={'Kolon1'}>
    //             <Cell tags={['bugfix','feature']} />
    //             <Cell tags={['feature']}/>
    //         </KanbanColumn>
    //         <KanbanColumn columnName={'Kolon2'}>
    //             <Cell tags={['bugfix','feature']} />
    //         </KanbanColumn>
    //         <KanbanColumn columnName={'Kolon3'}>
    //             <Cell tags={['bugfix']} />
    //             <Cell tags={['update','feature','bugfix']} />
    //         </KanbanColumn>
    //     </KanbanTable>
    // )
}
export default Kanban