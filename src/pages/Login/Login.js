import React, {useEffect, useRef, useState} from "react";
import {Input, Button} from './LoginComponents/allLoginComponents'
import {FaUser} from 'react-icons/fa'
import {highFive, kanbanPicture} from '../../img/allİmages'
import {KanbanPicture, Label, LabelText, LoginContainer, LoginForm, 
        LoginFormItems, LoginFormLogo, LoginFormPanel, LoginImage, 
        LoginLayout, TextContainer, TextTyping1, TextTyping2} from './LoginStyle'

const write = (messageIndex,setter) => {
    const messages=['Uygulamaya Hoşgeldiniz','Ekibinizin ve sizin neler yaptığını görmek için kullanıcı bilgilerinizle giriş yapabilirsiniz !']
    let temp = ''
    let startTime = messageIndex === 0 ? 75 : 1800
    let duration = messageIndex === 0 ? 50 : 25
    for(let i=0; i<messages[messageIndex].length; i++){
        setTimeout(()=>{
            temp+=messages[messageIndex][i]
            setter(temp)
        },startTime+(duration*i)) 
      } 
}
const inputStyle={}
const Login = () => {
    const[mess1,setMess1]=useState('')
    const[mess2,setMess2]=useState('')
    const[gifTemp,setGifTemp]=useState(false)
    
    useEffect(()=>{
        write(0,setMess1)
        write(1,setMess2)
    },[])
    useEffect(()=>{
        mess1 !=='' && mess2!=='' && setTimeout(()=>{
            setGifTemp(true)
        },3000)
    },[mess1,mess2])
    useEffect(()=>{
        console.log('render edildi')
    })
    return(
        <LoginLayout>
            <LoginContainer>
                <TextContainer>
                    <TextTyping1>{mess1}</TextTyping1>
                    <TextTyping2>{mess2}</TextTyping2>
                    {gifTemp && <LoginImage src={highFive} />}
                </TextContainer>
                <LoginFormPanel>
                    <LoginForm>
                        <LoginFormLogo>
                            <FaUser/>
                        </LoginFormLogo>
                        <LoginFormItems>
                            <Label>
                                <LabelText>Kullanıcı Adı</LabelText>
                                <Input type={'text'}/>
                            </Label>
                            <Label>
                                <LabelText>Şifre</LabelText>
                                <Input type={'password'} icon={'yes'} />
                            </Label>
                            <Button>Giriş Yap</Button>
                        </LoginFormItems>
                        <KanbanPicture src={kanbanPicture} />
                    </LoginForm>
                </LoginFormPanel>
            </LoginContainer>
        </LoginLayout>
    )
}
export default Login