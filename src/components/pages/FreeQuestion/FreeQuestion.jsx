import Menu from '../../parts/Menu/Menu'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../parts/Footer/Footer'
import Header from '../../parts/Header'
import './FreeQuestion.scss'
import { Link } from 'react-router-dom'
import { Avatar, Button, Checkbox, FormControlLabel, IconButton, Tooltip } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ReportIcon from '@material-ui/icons/Report';
import DoneIcon from '@material-ui/icons/Done';
import GradeIcon from '@material-ui/icons/Grade';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useDispatch, useSelector } from 'react-redux'
import { detailsQuestion } from '../../../actions/questionActions'
import Skeleton from '@material-ui/lab/Skeleton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Cookie from 'js-cookie'



function FreeQuestion(props) {
    const [favorite, setFavorite] = useState(false);
    const [good, setGood] = useState(false);
    const [bad, setBad] = useState(false);
    const [report, setReport] = useState(false);
    const [checked, setChecked] = useState(false);
    
    const userInfo = JSON.parse(Cookie.get('userInfo'))

    const questionDetails = useSelector(state => state.questionDetails);
    const { question, tags, loading, error } = questionDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsQuestion(props.match.params.id))
    }, [])

    return (
        <div className='free-question'>
            <Header />
            <div className="main">
                <Menu />
                <div className="content">
                    <div className="question-info">
                        <div className="question-info-upper">
                            {loading ? <Skeleton><h1>Название</h1></Skeleton> : error ? <h1>{error}</h1> : <h1>{question.title}</h1>}
                            <span><small>Не нашли ответ на свой вопрос?</small> <Button>Задать вопрос</Button></span>
                        </div>
                        <div className="question-info-bottom">
                            {loading ? <Skeleton><p>Вопрос задан 10.02.20 пользователем </p></Skeleton> : error? "error" : <p>Вопрос задан {question.timestamp}</p>}
                        </div>

                        <hr></hr>
                    </div>
                    <div className="question-content">
                        <div className="question">
                            {loading ? <Skeleton><p>Я не могу их решить, помогите, пожалуйста!!!!</p></Skeleton> : error ? "" : <p>{question.text}</p>}
                        </div>
                        <div className="question-action">
                            <IconButton onClick={() => setFavorite(!favorite)}>{favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
                            <IconButton onClick={() => { setGood(!good); bad ? setBad(!bad) : setBad(bad) }}>{good ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}</IconButton>
                            <IconButton onClick={() => { setBad(!bad); good ? setGood(!good) : setGood(good) }}>{bad ? <ThumbDownIcon /> : <ThumbDownAltOutlinedIcon />}</IconButton>
                            <IconButton onClick={() => setReport(!report)}>{report ? <ReportIcon /> : <ReportOutlinedIcon />}</IconButton>
                        </div>
                        <hr></hr>
                    </div>
                    {loading ? <Skeleton><h2>Ответы на вопрос:</h2></Skeleton> :
                        error ? <h2>Ошибка загрузки</h2> :
                            question.answers.length ? <h2>Ответы на вопрос:</h2> : <h2>Нет ответов</h2>}


                    <br></br>
                    <div className="question-answers">
                        {
                            loading ?
                                <React.Fragment>
                                    <div className="answer">
                                        <div className="answer-action">
                                            <Skeleton variant="circle" style={{ height: "48px", width: "48px" }}></Skeleton>
                                            <Skeleton variant="circle" style={{ height: "48px", width: "48px" }}></Skeleton>
                                            <Skeleton variant="circle" style={{ height: "48px", width: "48px" }}></Skeleton>
                                            <Skeleton variant="circle" style={{ height: "48px", width: "48px" }}></Skeleton>
                                        </div>
                                        <div className="answer-part">
                                            <div className="answer-rating">
                                                <Skeleton><DoneIcon /> <small>Этот ответ мы посчитали решением</small></Skeleton>

                                            </div>
                                            <div className="answer-content">
                                                <Skeleton><p>Вот моё решение этого примера, но оно может быть неправильным, потому что я сам плохо понимаю эту тему</p></Skeleton>
                                                <Skeleton>
                                                    <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt="" />
                                                </Skeleton>
                                            </div>
                                            <Skeleton><div className="answer-person">
                                                На этот вопрос ответил <Button><Link to={'/profile/1'}>Евдоким Кик</Link></Button> 20.10.2021
                            </div></Skeleton>
                                            <Skeleton><small>Помогите нам, пожалуйста! Этот ответ верный? <Button>Да</Button>/<Button>Нет</Button></small></Skeleton>
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                error ? "error" :

                                    question.answers.map((e, i) => {

                                        return <React.Fragment>
                                            <div className="answer">
                                                <div className="answer-action">
                                                    <IconButton onClick={() => setFavorite(!favorite)}>{favorite ? <GradeIcon /> : <StarBorderIcon />}</IconButton>
                                                    <IconButton onClick={() => { setGood(!good); bad ? setBad(!bad) : setBad(bad) }}>{good ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}</IconButton>
                                                    <IconButton onClick={() => { setBad(!bad); good ? setGood(!good) : setGood(good) }}>{bad ? <ThumbDownIcon /> : <ThumbDownAltOutlinedIcon />}</IconButton>
                                                    <IconButton onClick={() => setReport(!report)}>{report ? <ReportIcon /> : <ReportOutlinedIcon />}</IconButton>

                                                </div>
                                                <div className="answer-part">
                                                    <div className="answer-rating">
                                                        {e.rate >= 4 ? <React.Fragment><DoneIcon /> <small>Этот ответ мы посчитали решением</small></React.Fragment> : <React.Fragment><Tooltip title="Как только этот вопрос наберет хороший рейтинг или создатель вопроса подтвердит правильность - вопрос будет считаться решением"><AccessTimeIcon /></Tooltip><small>Пока что мы не уверены в правильности этого ответа</small></React.Fragment>}

                                                    </div>
                                                    <div className="answer-content">
                                                        <p>{e.text}</p>
                                                        <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt="" />
                                                        <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt="" />
                                                        <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt="" />

                                                    </div>
                                                    <div className="answer-person">
                                                        На этот вопрос ответил <Button><Link to={'/profile/1'}>Евдоким Кик</Link></Button> 20.10.2021
                            </div>
                                                    <small>Помогите нам, пожалуйста! Этот ответ верный? <Button>Да</Button>/<Button>Нет</Button></small>
                                                </div>
                                            </div>
                                            <hr></hr>
                                        </React.Fragment>
                                    })

                        }
                    </div>


                    <div className="question-tags">
                        Этот вопрос содержит теги:
                        {
                            loading ?
                                <React.Fragment>
                                    <Skeleton style={{ width: "100px", height: "20px" }}></Skeleton>,
                            <Skeleton style={{ width: "100px" }}></Skeleton>,
                            <Skeleton style={{ width: "100px" }}></Skeleton>
                                </React.Fragment>
                                :
                                error ? "error" :
                                    tags.map((e, i) => {
                                        return tags.length - 1 == i ? <Button key={i}>{e}</Button> : <React.Fragment><Button key={i}>{e}</Button>,</React.Fragment>
                                    })

                        }
                    </div>

                    <div className="add-answer">
                        <h1>Добавить ответ</h1>
                        <small>Если вы считаете, что этот вопрос нуждается в решении, то, пожалуйста, помогите нам на него ответить</small>

                        <form>
                            <textarea rows='20'></textarea>
                        </form>
                        <div className="agreement">
                            <FormControlLabel control={<Checkbox onChange={() => setChecked(!checked)}></Checkbox>} label='Подтверждая, вы соглашаетесь с правилами сообщества'></FormControlLabel>
                            {checked ? <Button>Отправить</Button> : <Button onClick={() => console.log(1)} disabled>Подтвердите условия, чтобы отправить</Button>}
                        </div>
                    </div>
                </div>

                <div className="right-sidebar">
                    <div className="info-about-user">
                        {userInfo.userName + ' ' + userInfo.userSurname}
                        
                    </div>
                    <div className="info-about-subscribe">
                        <h1>Vataga PLUS</h1>
                        <p>Нужно очень много ответов на ОЧЕНЬ большое количество твоих <strong><u>неглупых</u></strong> вопросов?</p>
                        <h3>Оформи подписку и имей бесконечный доступ ко всему сообществу с кучей бонусов!</h3>
                        <Button variant="contained">Оформить подписку</Button>
                    </div>
                    <div className="info-about-challenges">
                        <h3>Челленджи:</h3>

                    </div>
                </div>


            </div>
            <Footer />

        </div>
    )
}

export default FreeQuestion
