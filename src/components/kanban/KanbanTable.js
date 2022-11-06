import React from "react";
import styled from 'styled-components'
import Ticket from "./kanbanComponents/Ticket";
import KanbanColumn from "./kanbanComponents/KanbanColumn";

const KanbanTableContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: row;
    width:max-content;
`
const KanbanTable = ({columnData}) => {
    return(
        <KanbanTableContainer style={{margin:'100px auto'}}>
            {
                columnData.map((item,key)=>{
                    return(
                        <KanbanColumn key={key} columnName={item.columnName} >
                            {
                                item.ticketGroups && item.ticketGroups.map((ticket,key)=>{
                                    return(
                                        <Ticket  key={key} tags={ticket}/>
                                    )
                                })
                            }
                        </KanbanColumn>
                    )
                })
            }
        </KanbanTableContainer>
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
export default KanbanTable