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

import "./UserProfile.scss"
import Cookies from 'universal-cookie';

function UserProfile(props) {
    const [fav, setFav] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [reported, setReported] = useState(false)
    let [data,setData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/users/'+props.match.params.id)
        .then(res => {
            setTimeout(() => setData(res.data), 100)
            
        })
    }, [])
    return (
        <div className="user-profile-page">
            <Header props={props}/>
            <div className="main">
                <Menu />
                <div style={{position: 'absolute', marginLeft: '280px', width: 'calc(100% - 280px)'}} className={`content loader${!data.userName ? "" : ' done'}`}>
                    <span id='preloader'></span>
                </div> 
                <div className="content">
                    <div className="content-user">
                        <img alt='Фото профиля' src='/6300581.png'></img>
                        <div className="user-info">
                            <h2>{data.userName?data.userName + " " + data.userSurname:"Загрузка..."}</h2>
                            <p>Профиль: {!data.userName? "Загрузка..." : (data.isPrivate ? 'приватный': 'открытый')}</p>
                            <p>Студент из {!data.university ? "Загрузка..." : data.university}</p>
                            <p>Теги: {!data.tags ? <Button>Загрузка...</Button> : (data.tags).map((e, i) => <Button key={i}>{e}</Button>)}</p>
                            <p>Подтверждение профиля: {data.userName? data.isAuth? "имеется" : "отсутствует": "Загрузка..."}</p>
                        </div>
                        <div className="user-action">
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
                        </div>
                    </div>
                    {data.isPrivate ? <p>Данные профиля недоступны</p> :
                    <div className="content-user-activity">
                        <div className="user-answers-group">
                            <h3>Последние ответы пользователя</h3>
                            <div className="user-answers">
                                {!data.answers ? <React.Fragment>
                                    <div className="user-answer loading"></div>
                                    <div className="user-answer loading"></div>
                                    <div className="user-answer loading"></div>
                                </React.Fragment> :(data.answers).map((e, i) => 
                                    <div key={i} className="user-answer"><p>{e}</p></div>
                                )}
                            </div>
                        </div>
                        <div className="user-questions-group">
                            <h3>Последние вопросы пользователя</h3>
                            <div className="user-questions">
                            {!data.questions ? <React.Fragment>
                                <div className="user-question loading"></div>
                                <div className="user-question loading"></div>
                                <div className="user-question loading"></div>
                                </React.Fragment> :(data.questions).map((e, i) => 
                                    <div key={i} className="user-answer"><p>{e}</p></div>
                                )}
                                
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfile;