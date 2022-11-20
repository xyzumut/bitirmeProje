import React from "react";
import {Input, LoginButton} from './LoginComponents/allLoginComponents'
import {FaUser} from 'react-icons/fa'

import {kanbanPicture} from '../../img/allİmages'
import {KanbanPicture, Label, LabelText, LoginLayout,
        LoginForm, LoginFormItems, LoginFormLogo, LoginInputs,
        WelcomeText ,LoginText} from './LoginStyle'

const Login = () => {
    return(
        <LoginLayout deneme={kanbanPicture}>
            <LoginForm>
                <LoginFormLogo>
                    <FaUser/>
                </LoginFormLogo>
                <LoginText>
                    <WelcomeText>
                        Hoşgeldiniz
                    </WelcomeText>


                </LoginText>
                <LoginFormItems>
                    <LoginInputs>
                        <Label>
                            <LabelText>Kullanıcı Adı</LabelText>
                            <Input type={'text'}/>
                        </Label>
                        <Label>
                            <LabelText>Şifre</LabelText>
                            <Input type={'password'} icon={'yes'} />
                        </Label>
                    </LoginInputs>
                    <LoginButton>Giriş Yap</LoginButton>
                    {/* <KanbanPicture src={kanbanPicture}  alt={''}/> */}
                </LoginFormItems>
            </LoginForm>
        </LoginLayout>
    )
}
export default Login