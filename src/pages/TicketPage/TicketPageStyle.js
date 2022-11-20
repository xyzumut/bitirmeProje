import styled from "styled-components"

const TicketPageContainer = styled.div`
    width:100%;
    padding:50px 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const TicketDetailContainer = styled.div`
    width:100%;
    min-height:300px;
    display:flex;
    background:rgba(255,255,255,.5);
`
const TicketDetailLeftContainer = styled.div`
    width:80%;
    min-height:300px;
    padding:50px 12px 12px 12px;
`
const TicketHeader = styled.div`
    font-size:24px;
    Font-weight:700;
`
const TicketContent = styled.div`
    font-size:14px;
    line-height:30px;
    margin-top:50px;
`
const TicketDetailRightContainer = styled.div`
    width:20%;
    min-height:300px;
    display:flex;
    flex-direction:column;
`
const TicketDetailRightContainerHeader = styled.div`
    width:100%;
`
const TicketDetailRightContainerBottom = styled.div`
    padding:10px;
    width:100%;
    .ant-image{
        margin:5px;
        width:25%;
    }
`
const TicketCommentsContainer = styled.div`
    width:100%;
    padding:20px 100px;
    padding:10px;
`

const ImageUpload = styled.input`

`
export{
    TicketCommentsContainer,
    TicketContent,
    TicketDetailContainer,
    TicketDetailLeftContainer,
    TicketDetailRightContainer,
    TicketDetailRightContainerBottom,
    TicketDetailRightContainerHeader,
    TicketHeader,
    TicketPageContainer,
    ImageUpload
}