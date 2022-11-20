import { useParams } from "react-router-dom"
import { Avatar, Button, Comment, Form, Input, List, Image, Popover } from 'antd';
import moment from 'moment';
import React, { useState, useEffect, forwardRef } from 'react';
import {TicketCommentsContainer, TicketContent, TicketDetailContainer, TicketDetailLeftContainer, TicketDetailRightContainer, TicketDetailRightContainerBottom, TicketDetailRightContainerHeader, TicketHeader, TicketPageContainer, ImageUpload} from './TicketPageStyle'
import styled from "styled-components";
const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} Yorum`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => {
    return(
        <>
            <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
            </Form.Item>
        </>
    )
};
const metin ='bu konuda çok acil bir durum olursa diye bir firma kuruluşları, kurum ve kuruluşların da bu alanda yeni bir düzenleme yapılıncaya kadar yemek yemek için bile bir kadının kırıldığı, toplantı salonu, sauna, kapalı teklif usulü ile taçlandırmak istedim. bu kez de ben de aynı şekilde düşünmeye başlar. çünkü bu tür bir işlem değil. ancak her şey bitmiş değil. bu durumda da önemli işlere imza attığını belirterek, bir süre basın ve diyalog kutusunu kapatın. sel çapta tanınan kararla ilgili olarak sağlık bakanlığına bağlı hastanelerde çalışabilirler. bu tür konularda insanları bilgilendirmek için yaptığı bir ankete göre türkiye’de 2008 yılında başlanan ve 2010 yılında ise 10 bin kişi de ölümle sonuçlanan bir haberin ardından bölgeye giden güney osetya ve abhazya’yı tanımak için kullanılan yöntemlerden birisi de bu olayı anlattı. belediye başkanı ahmet çakır, ayrıca görev yapan yöneticilerin bu tavrı da aynı şekilde yapılan masaj ve antibiyotik kullanmanın da bir anlamı yok. bir kaç gün içinde yapılması gereken işleri ve kişisel gereksinimleri gidermek için çalışmalarını sürdürüyor.'
const TicketPage = () => {
    const ticket = useParams()
    useEffect(()=> {
        console.log(ticket.id)
        console.log('comments',comments)
        console.log('submitting',submitting)
        console.log('value',value)
        /* Comments önceki yorumlar */
        /* value yazılan submit edilmeden önceki değer */
        /* submitting submit edildiğinde true sonrasında false oluyor */
    })
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [img,setImg]=useState(null)
    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
        setSubmitting(false);
        setValue('');
        setComments([
            ...comments,
            {
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: <p>{value}</p>,
                datetime: moment('2016-11-22').fromNow(),
            },
        ]);
        }, 1000);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <TicketPageContainer>
            <TicketDetailContainer>
                <TicketDetailLeftContainer>
                    <TicketHeader>Ticket Headırı yani Ticket Başlığının Tam hali</TicketHeader>
                    <TicketContent>{metin}</TicketContent>

                </TicketDetailLeftContainer>
                <TicketDetailRightContainer>
                    <TicketDetailRightContainerHeader>
                    </TicketDetailRightContainerHeader>    
                    <TicketDetailRightContainerBottom>
                        <Image.PreviewGroup>
                            <Image
                                src="https://placebear.com/g/200/300"
                            />   
                            <Image
                                src="https://placebear.com/g/600/300"
                            />   
                            <Image
                                src="https://placebear.com/g/200/310"
                            /> 
                            <Image
                                src="https://placebear.com/g/400/300"
                            /> 
                            <Image
                                src="https://placebear.com/g/250/300"
                            /> 
                            <Image
                                src="https://placebear.com/g/670/300"
                            /> 
                            <Image
                                src="https://placebear.com/g/200/300"
                            /> 
                            <Image
                                src="https://placebear.com/g/250/300"
                            /> 
                            <Image
                                src="https://placebear.com/g/200/310"
                            /> 
                            <Image
                                src="https://placebear.com/g/120/300"
                            /> 
                        </Image.PreviewGroup>
                    </TicketDetailRightContainerBottom>    
                </TicketDetailRightContainer>
            </TicketDetailContainer>
            <TicketCommentsContainer>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                    content={
                        <Editor
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </TicketCommentsContainer>
        </TicketPageContainer>
    );
};
export default TicketPage;