import { Button } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Footer from '../../parts/Footer/Footer';
import Header from '../../parts/Header';
import Menu from '../../parts/Menu/Menu';
import CreateIcon from '@material-ui/icons/Create';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BlockIcon from '@material-ui/icons/Block';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ReportIcon from '@material-ui/icons/Report';
import UndoIcon from '@material-ui/icons/Undo';
import LoopIcon from '@material-ui/icons/Loop';
import axios from 'axios'
import Skeleton from '@material-ui/lab/Skeleton';
import queryString from 'querystring'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import "./UserProfile.scss"
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { fullUserInfo } from '../../../actions/userActions';

function UserProfile(props) {
    const [fav, setFav] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [reported, setReported] = useState(false)

    const values = queryString.parse(props.match)
    const userInfo = JSON.parse(Cookie.get('userInfo'))

    const userFullInfo = useSelector(state => state.userFullInfo)
    const { user, loading, error } = userFullInfo
    const dispatch = useDispatch()
    console.log(props.match.params.id)
    useEffect(() => {
        dispatch(fullUserInfo(props.match.params.id))
    }, [])

    return (
        <div className="user-profile-page">
            <Header props={props}/>
            <div className="main">
                <Menu />
                <div className="content">
                    <div className="content-user">
                        <img alt='Фото профиля' src='/6300581.png'></img>
                        <div className="user-info">
                            {loading ? <Skeleton animation="wave"><h2>Евгений Медведев</h2></Skeleton> : 
                            error ? "" : 
                            user ? <h2>{user.userName} {user.userSurname}</h2> : ''}
                            {loading ? <Skeleton animation="wave"><p>Это закрытый профиль</p></Skeleton> :
                            error ? "" :
                            user ? <p>{user.isPrivate == false ? "Публичный профиль": "Скрытый профиль"}</p>: ''}
                            {loading || error? <Skeleton animation="wave"><p>Студент из БГУИР</p></Skeleton> : user ? <p>Студент из {user.university}</p> : ''}
                            {loading || error ? <Skeleton animation="wave"><p>Теги: <Button>Математика</Button></p></Skeleton> : user ? <p>Теги: {user.tags.map((e, i) => {return <Button key={i}>{e}</Button>})}</p> : ''}
                            
                        </div>
                        {props.match.params.id != userInfo.id ? <div className="user-action">
                            {!fav ?
                                <Button onClick={() => setFav(!fav)}><BookmarkBorderIcon style={{ marginRight: '1rem' }} />В избранные</Button> :
                                <Button onClick={() => setFav(!fav)}><BookmarkIcon style={{ marginRight: '1rem' }} />В избранных</Button>}
                            <Button><CreateIcon style={{ marginRight: '1rem' }} />Написать</Button>
                            {!blocked ?
                                <Button onClick={() => setBlocked(!blocked)}><BlockIcon style={{ marginRight: '1rem' }} />Заблокировать</Button> :
                                <Button onClick={() => setBlocked(!blocked)}><UndoIcon style={{ marginRight: '1rem' }} />Разблокировать</Button>}
                            {!reported ? 
                                <Button onClick={() => setReported(!reported)}><ReportOutlinedIcon style={{ marginRight: '1rem' }} />Пожаловаться</Button> :
                                <Button onClick={() => setReported(!reported)}><ReportIcon style={{ marginRight: '1rem' }} />Отозвать жалобу</Button>}
                        </div> : 
                        <div className="user-action">
                        {!fav ?
                            <Button onClick={() => setFav(!fav)}><BookmarkBorderIcon style={{ marginRight: '1rem' }} />Список избранных</Button> :
                            <Button onClick={() => setFav(!fav)}><BookmarkIcon style={{ marginRight: '1rem' }} />В избранных</Button>}
                        <Button><CreateIcon style={{ marginRight: '1rem' }} />Сообщения</Button>
                        {!blocked ?
                            <Button onClick={() => setBlocked(!blocked)}><BlockIcon style={{ marginRight: '1rem' }} /><span style={{textAlign: 'start'}}>Список заблокированных</span></Button> :
                            <Button onClick={() => setBlocked(!blocked)}><UndoIcon style={{ marginRight: '1rem' }} />Разблокировать</Button>}
                        {!reported ? 
                            <Button onClick={() => setReported(!reported)}><ExitToAppIcon style={{ marginRight: '1rem' }} />Выйти</Button> :
                            <Button onClick={() => setReported(!reported)}><ExitToAppIcon style={{ marginRight: '1rem' }} />Отозвать жалобу</Button>}
                    </div>} 
                        
                    </div>
                    {
                        loading || error? 
                        <div className="content-user-activity">
                        <div className="user-answers-group">
                            <Skeleton animation="wave"><h3>Последние ответы пользователя</h3></Skeleton>
                            <div className="user-answers">
                                <Skeleton animation="wave"><div className='user-answer'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                                <Skeleton animation="wave"><div className='user-answer'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                                <Skeleton animation="wave"><div className='user-answer'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                            </div>
                        </div>
                        <div className="user-questions-group">
                            <Skeleton animation="wave"><h3>Последние вопросы пользователя</h3></Skeleton>
                            <div className="user-questions">
                                <Skeleton animation="wave"><div className='user-question'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                                <Skeleton animation="wave"><div className='user-question'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                                <Skeleton animation="wave"><div className='user-question'>место чтобы заполнить скелетон Медведев</div></Skeleton>
                            </div>
                        </div>
                    </div>
                    
                     : user ? 
                    <div className="content-user-activity">
                        <div className="user-answers-group">
                            {!user.answers ? <h3>Ответов нет</h3> : <React.Fragment><h3>Последние ответы пользователя</h3>
                            <div className="user-answers">
                                {user.answers.map((e, i) => {
                                    return <div key={i} className="user-answer">{e}</div>
                                })}
                            </div></React.Fragment>}
                        </div>
                        <div className="user-questions-group">
                            {!user.questions ? <h3>Вопросов нет</h3> : <React.Fragment><h3>Последние вопросы пользователя</h3>
                            <div className="user-answers">
                                {user.questions.map((e, i) => {
                                    return <div key={i} className="user-answer">{e}</div>
                                })}
                            </div></React.Fragment>}
                                
                        </div>
                    </div> : ''}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfile;
