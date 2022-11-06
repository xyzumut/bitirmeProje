import React, {useEffect, useRef} from "react";
import styled from 'styled-components'
import { useTheme } from '../../../context/ThemeContext'
import {kanbanPicture} from '../../../img/allİmages'
const TicketContainer = styled.div`
    width: 100%;
    min-height: 110px;
    border-radius: 5px;
    margin:10px 0;
    cursor: pointer;
    padding: 2px;
    border:1px solid ${({themeItems}) => themeItems.theme === true ?  themeItems.dark : themeItems.light };
    background-color:${({themeItems}) => themeItems && themeItems.theme === true ? themeItems.light : themeItems.dark };
    color : ${({themeItems}) => themeItems && themeItems.theme===true ? themeItems.dark : themeItems.light};
`
const TicketTags = styled.div`
    width: 100%;
    height: 30px;
    border-radius:5px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom:2px;
`
const TicketTag = styled.div`
    padding: 1px 5px;
    margin: 2px;
    border-radius: 5px;
    background-color:${({tag}) => tag && tag ==='bugfix' ? '#F6F6C9' : tag === 'update' ? '#54B435' : '#AA8B56'};
    background-color:${({tag}) => tag && tag ==='bugfix' ? 'orange' : tag === 'update' ? '#54B435' : '#AA8B56'};
    font-weight:600;
`
const TicketHeader = styled.h1`
    font-size:20px;
    padding:1px 3px;
    font-weight:600;
`
const TicketContext = styled.p`
    font-size:12px;
    padding:1px 3px;
`
const TicketBottom = styled.div`
    width:100%;
    height:35px;
    display:flex;
    flex-direciton:row;
    align-items:center;
    padding:0 5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background-color:inherit;
`
const TicketOwner = styled.p`
    font-size:16px;
`
const TicketOwnerPic = styled.img`
    width:30px;
    height:30px;
    border-radius:100%;
    border:none;
    margin-right:10px;
`
const Ticket = ({tags=['bugfix']}) => {
    /* tags = [tag1,tag2,tag3] */
    const kanbanTicketRef = useRef()
    const themeItems = useTheme() 
    console.log(themeItems.theme)

    useEffect(()=>{
        kanbanTicketRef.current.addEventListener('dragstart',(e)=>{
            const activeTicket = e.currentTarget
            activeTicket.className+=' ticketHold'
        })
        kanbanTicketRef.current.addEventListener('dragend',(e)=>{
            const activeTicket = e.currentTarget
            activeTicket.classList.remove('ticketHold')
        })
    },[])

    return(
        <TicketContainer draggable={"true"} ref={kanbanTicketRef} themeItems={themeItems} onClick={()=>{
            // Burada popup açılacak
        }}>
            <TicketTags themeItems={themeItems}>
                {
                    tags.map((tag,key)=>{
                        return(<TicketTag key={key} tag={tag} themeItems={themeItems}>{tag}</TicketTag>)
                    })
                }
            </TicketTags>
            <TicketHeader >Başlık</TicketHeader>
            <TicketContext >Kanban panosundaki hücrelerde iyileştirme</TicketContext>
            <TicketBottom >
                <TicketOwnerPic src={kanbanPicture} draggable={false}/>
                <TicketOwner>username</TicketOwner>
            </TicketBottom>
        </TicketContainer>
    )
}
export default Ticket