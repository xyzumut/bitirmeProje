import styled from "styled-components"
const LoginLayout = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#C7EAB4;
    background-color:#001253;
    background-color:#06283D;
`
const LoginContainer = styled.div`
    width:1300px;
    height:600px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const LoginFormPanel = styled.div`
    width:40%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:.9;
    transition:.5s all ease;
    &:hover{
        opacity:1;
    }
`
const LoginForm = styled.div`
    width:80%;
    height:90%;
    background-color:white;
    border-radius:30px;
    position:relative;
    padding-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const LoginFormItems = styled.div`
    width:100%;
    height:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
const Label = styled.label``
const LabelText = styled.p`
    font-size:20px;
    margin:5px 0;
    color :#0D6EFD;
`
const KanbanPicture = styled.img`
    height:200px;
`
const LoginFormLogo = styled.div`
    width:150px;
    height:150px;
    background-color:#0D6EFD;
    position:absolute;
    top:-75px;
    left:50%;
    transform:translateX(-50%);
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    *{
        width:70%;
        height:70%;
        color:white;
    }
`
const TextContainer = styled.div`
    width:60%;
    height:100%;
    background-color:white;
    display:flex;
    flex-direction:column;
    padding:100px 40px;
    border-radius:20px;
    opacity:.9;
    transition:.5s all ease;
    &:hover{
        opacity:1;
    }
`
const TextTyping1 = styled.p`
    font-size:48px;
    background: linear-gradient(to top right,#0d6efd, green, #0d6efd, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width:100%;
    height:20%;
    line-height:100px;
    margin-bottom:20px;
`
const TextTyping2 = styled.p`
    font-size:24px;
    background: linear-gradient(to top right,#0d6efd, green, #0d6efd, green, #0d6efd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height:40px;
    height:100px;
    display:block;
    width:80%;
`
const LoginImage = styled.img`
    width:50%;
    margin:20px auto;
`


export{
    KanbanPicture,
    Label,
    LabelText,
    LoginContainer,
    LoginForm,
    LoginFormItems,
    LoginFormLogo,
    LoginFormPanel,
    LoginImage,
    LoginLayout,
    TextContainer,
    TextTyping1,
    TextTyping2,
}