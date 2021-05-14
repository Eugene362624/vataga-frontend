import Menu from '../../parts/Menu/Menu'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../parts/Footer/Footer'
import Header from '../../parts/Header'
import './FreeQuestion.scss'
import { Link } from 'react-router-dom'
import { Avatar, Button, Checkbox, FormControlLabel, IconButton } from '@material-ui/core'
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


function FreeQuestion(props) {
    const [favorite, setFavorite] = useState(false);
    const [good, setGood] = useState(false);
    const [bad, setBad] = useState(false);
    const [report, setReport] = useState(false);
    const [checked, setChecked] = useState(false);

    const questionDetails = useSelector(state => state.questionDetails);
    const {question, loading, error} = questionDetails;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(detailsQuestion(props.match.params.id))
        return () => {
            
        }
    }, [])

    console.log(question)
    const tags = ['высшая математика', 'интегралы', 'теорема Дирихле', 'БГУИР', 'определенные интегралы']

    return (
        <div className='free-question'>
            <Header/>
            <div className="main">
                <Menu />
                <div className="content">
                    <div className="question-info">
                        <div className="question-info-upper">
                        {loading? <h1>loading...</h1>: error? <h1>{error}</h1> : <h1>{question.title}</h1>}
                        <span><small>Не нашли ответ на свой вопрос?</small> <Button>Задать вопрос</Button></span>
                        </div>
                        <div className="question-info-bottom">
                        <p>Вопрос задан 10.02.20 пользователем <div className="user"><Link to='/profile/1'><Avatar src='https://avatars.githubusercontent.com/u/6300581?v=4'/>Евдоким Кик</Link></div></p>
                        </div>
                        
                        <hr></hr>
                    </div>
                    <div className="question-content">
                        <div className="question">
                        <p>Я не могу их решить, помогите, пожалуйста!!!!</p>
                        <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>
                        </div>
                        <div className="question-action">
                            <IconButton onClick={() => setFavorite(!favorite)}>{favorite ? <FavoriteIcon/> : <FavoriteBorderIcon/> }</IconButton>
                            <IconButton onClick={() => {setGood(!good); bad? setBad(!bad) : setBad(bad)}}>{good ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => {setBad(!bad); good ? setGood(!good) : setGood(good)}}>{bad ? <ThumbDownIcon/> : <ThumbDownAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => setReport(!report)}>{report ? <ReportIcon/> : <ReportOutlinedIcon/>}</IconButton>
                        </div>
                        <hr></hr>
                    </div>
                    <h2>Ответы на вопрос:</h2>
                    <br></br>
                    <div className="question-answers">
                        
                        <div className="answer">
                            <div className="answer-action">
                            <IconButton onClick={() => setFavorite(!favorite)}>{favorite ? <GradeIcon/> : <StarBorderIcon/> }</IconButton>
                            <IconButton onClick={() => {setGood(!good); bad? setBad(!bad) : setBad(bad)}}>{good ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => {setBad(!bad); good ? setGood(!good) : setGood(good)}}>{bad ? <ThumbDownIcon/> : <ThumbDownAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => setReport(!report)}>{report ? <ReportIcon/> : <ReportOutlinedIcon/>}</IconButton>
                        
                            </div>
                            <div className="answer-part">
                            <div className="answer-rating">
                            <DoneIcon/> <small>Этот ответ мы посчитали решением</small>
            
                            </div>
                            <div className="answer-content">
                                <p>Вот моё решение этого примера, но оно может быть неправильным, потому что я сам плохо понимаю эту тему</p>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>

                            </div>
                            <div className="answer-person">
                                На этот вопрос ответил <Button><Link to={'/profile/1'}>Евдоким Кик</Link></Button> 20.10.2021
                            </div>
                            <small>Помогите нам, пожалуйста! Этот ответ верный? <Button>Да</Button>/<Button>Нет</Button></small> 
                        </div>
                        </div>
                        <hr></hr>
                        <div className="answer">
                            <div className="answer-action">
                            <IconButton onClick={() => setFavorite(!favorite)}>{favorite ? <GradeIcon/> : <StarBorderIcon/> }</IconButton>
                            <IconButton onClick={() => {setGood(!good); bad? setBad(!bad) : setBad(bad)}}>{good ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => {setBad(!bad); good ? setGood(!good) : setGood(good)}}>{bad ? <ThumbDownIcon/> : <ThumbDownAltOutlinedIcon/>}</IconButton>
                            <IconButton onClick={() => setReport(!report)}>{report ? <ReportIcon/> : <ReportOutlinedIcon/>}</IconButton>
                        
                            </div>
                            <div className="answer-part">
                            <div className="answer-rating">
                            <DoneIcon/> <small>Этот ответ мы посчитали решением</small>
            
                            </div>
                            <div className="answer-content">
                                <p>Вот моё решение этого примера, но оно может быть неправильным, потому что я сам плохо понимаю эту тему</p>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>
                                <img src="https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg" alt=""/>

                            </div>
                            <div className="answer-person">
                                На этот вопрос ответил <Button><Link to={'/users/profile/1'}>Евдоким Кик</Link></Button> 20.10.2021
                            </div>
                            <small>Помогите нам, пожалуйста! Этот ответ верный? <Button>Да</Button>/<Button>Нет</Button></small> 
                        </div>
                        </div>
                    </div>
                    
                    
                    <div className="question-tags">
                    <hr></hr>
                        Этот вопрос содержит теги:
                        {tags.map((e,i) => {
                            if (tags.length-1 == i) {
                                return <React.Fragment key={`${i}__${e}`}><Button>{e}</Button></React.Fragment>}
                            else return <React.Fragment key={`${i}__${e}`}><Button>{e}</Button>,</React.Fragment>
                        })}
                    <hr></hr>
                    </div>
                    
                    <div className="add-answer">
                        <h1>Добавить ответ</h1>
                        <small>Если вы считаете, что этот вопрос нуждается в решении, то, пожалуйста, помогите нам на него ответить</small>

                        <form>
                        <textarea rows='20'></textarea>
                        </form>
                        <div className="agreement">
                            <FormControlLabel control={<Checkbox onChange={() => setChecked(!checked)}></Checkbox>} label='Подтверждая, вы соглашаетесь с правилами сообщества'></FormControlLabel>
                            {checked ? <Button>Отправить</Button> : <Button onClick={() => console.log(1)}  disabled>Подтвердите условия, чтобы отправить</Button>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    )
}

export default FreeQuestion
