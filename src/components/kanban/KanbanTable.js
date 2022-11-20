import React from "react";
import styled from 'styled-components'
import Ticket from "./kanbanComponents/Ticket/Ticket";
import KanbanColumn from "./kanbanComponents/KanbanColumn/KanbanColumn";
import 'antd/dist/antd.css';
import { Alert } from 'antd'
const KanbanTableContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    width:${({columnLength}) => columnLength && columnLength === 5 ? '1500px' : '1200px' };
`
const KanbanColumnsContainer = styled.div`
    margin-top:30px;
    height: 500px;
    display: flex;
    flex-direction: row;
    width:100%;

`
const alertMessage = 'Kanban Panosunda Bulunan Ticketları Diğer Sütunlara Mouse İle Sürükleyebilir Yada Ticketlara Tıklandığında Açılan Pencerede Ticket\'ın Durumunu Güncelleyebilirsiniz'
const KanbanTable = ({columnData}) => {
    console.log('uzunluk',columnData.length)
    return(
        <KanbanTableContainer style={{margin:'100px auto'}} columnLength = {columnData.length}>  
            <Alert
                message={alertMessage}
                type="info"
                closable
                showIcon 
            />
            <KanbanColumnsContainer>
                {
                    columnData.map((item,key)=>{
                        return(
                            <KanbanColumn key={key} columnName={item.columnName} columnLength={columnData.length}>
                                {
                                    item.ticketGroups && item.ticketGroups.map((ticket,key)=>{
                                        return(
                                            <Ticket  
                                                key={key}
                                                ticketID={ticket.id} 
                                                tags={ticket.ticketTags} 
                                                header={ticket.header} 
                                                context={ticket.context} 
                                                date={ticket.date} 
                                                messCount={ticket.messCount}
                                                columnLength={columnData.length}
                                            />
                                        )
                                    })
                                }
                            </KanbanColumn>
                        )
                    })
                }
            </KanbanColumnsContainer>
        </KanbanTableContainer>
    )
}
export default KanbanTable
