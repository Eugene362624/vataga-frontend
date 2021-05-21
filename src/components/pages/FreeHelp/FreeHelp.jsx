import React, { Component, useState, useEffect } from 'react';
import Header from '../../parts/Header'
import Menu from '../../parts/Menu/Menu'
import Footer from '../../parts/Footer/Footer'

import './FreeHelp.scss'
import LinkUI from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { Avatar, Button, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ToolTip from '@material-ui/core/Tooltip'
import { useDispatch, useSelector } from 'react-redux';
import { listQuestions } from '../../../actions/questionActions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import queryString from 'query-string'
import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';

function FreeHelp(props) {
    // значения sort, page, etc., полученные из поисковой строки
    const values = queryString.parse(props.location.search)

    const [page, setPage] = useState(Number(values.page) || 1)
    // const [turnOffAnswerInfo, setTurnOffAnswerInfo] = useState(JSON.parse(localStorage.getItem("turnOffAnswerInfo")) || false)
    const questionList = useSelector(state => state.questionList)
    const { questions, count, loading, error, tags } = questionList
    const dispatch = useDispatch()
    
    //всего вопросов
    const countPages = Math.ceil(count / 10)

    useEffect(() => {
        console.log("!!!")
        dispatch(listQuestions(values))
    }, [])
    // переключение страницы 
    const handleSelectPage = async (event, value) => {
        setPage(value)
        values.page = value
        
        await props.history.push(`/free-help?page=${value}` + (values.sort ? `&sort=${values.sort}` : ''))
        dispatch(listQuestions(values))
    }

    const sortSelectHandler =  (e) => {
        values.sort = e
        props.history.push(`/free-help?`+(values.page ? `page=${values.page}&` : '')+(e?`sort=${e}`:''))
        dispatch(listQuestions(values))        
    }

    const [tagsByUn, setTagsByUn] = useState(false) 
    const [universityState, setUniversityState] = useState({
        BSUIR:false, 
        BSU: false, 
        BSMU: false, 
        BSEU: false, 
        BSATU: false
    })
    console.log(universityState.BSUIR)
    function viewTagsByUniversity(e) {
        switch (e) {
            case "БГУИР": {
                setUniversityState(prevState => ({...prevState, BSUIR: !prevState.BSUIR}))
                break
            }
        }
    }

    function selectTagsTypeByUniversity() {
        return (
            <div>
                {universityState.BSUIR ? 
                <React.Fragment>
                    <Button variant="outlined" color="primary" onClick={(e) => viewTagsByUniversity(e.target.innerHTML)}>БГУИР</Button>
                    
                </React.Fragment> : 
                <Button variant="contained" color="primary" onClick={(e) => viewTagsByUniversity(e.target.innerHTML)}>БГУИР</Button>}
                <Button variant="contained" color="primary">БГУ</Button>
                <Button variant="contained" color="primary">МГЛУ</Button>
                <Button variant="contained" color="primary">МГМУ</Button>
                <Button variant="contained" color="primary">БГЭУ</Button>
                <Button variant="contained" color="primary">БГАТУ</Button>
            </div>
        )
    }
    return <div className="free-help">
                <Header />
                <div className="main">
                    <Menu />
                    <div className="content">
                        <h2>Пожалуйста, помогайте другим. Затем помогут и вам :)</h2>
                        <p>Сортировать:</p>
                        <FormControl className="form-control">
                            <InputLabel htmlFor="grouped-select">Выберите</InputLabel>
                            <Select defaultValue={values.sort} onChange={e => sortSelectHandler(e.target.value)} id="grouped-select">
                                <MenuItem value="">
                                    <em>По умолчанию</em>
                                </MenuItem>
                                <ListSubheader>По новизне</ListSubheader>
                                <MenuItem value={1}>Новые</MenuItem>
                                <MenuItem value={2}>Старые</MenuItem>
                                <ListSubheader>По качеству</ListSubheader>
                                <MenuItem value={3}>Хорошие</MenuItem>
                                <MenuItem value={4}>Плохие</MenuItem>
                            </Select>
                        </FormControl>
                        {loading ? 
                            <React.Fragment>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                            </React.Fragment>
                        :
                        error ? 
                        <React.Fragment>
                            <br></br>
                            <h4>{error} :( <br></br>Попробуйте перезагрузить страницу</h4>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                                <Skeleton style={{width: "100%", height: "100px"}} animation="wave"/>
                            </React.Fragment> :
                            questions ? 
                        <div className="question-group">
                            {questions.map((e, i) => {
                                return <Link key={i} to={`/free-help/question/${e._id}`}>
                                    <div className="question">
                                        <div className="question-info">
                                            <small>Ответов: {e.answers}</small>
                                            <small>Качество <br></br> вопроса: {e.rate}</small>
                                            <small>Подписчиков: {e.subscribers}</small>
                                        </div>
                                        <div className="question-content">
                                            <div className="question-content-upper">
                                                <p>{e.title} - {e.index}</p>
                                                {e.tags.map((e, i) => { return <Link><Button key={i}>{e}</Button></Link> })}
                                            </div>
                                            <small>Задан: {e.timestamp} пользователем <Link to="/"><LinkUI>{e.creator}</LinkUI></Link></small>
                                        </div>
                                    </div>
                                </Link>
                            })}
                        
                        </div> : ''
                        }
                        {loading || error ?
                        <div style={{display: 'flex', justifyContent: 'center', width:"100%"}}>
                            <Skeleton style={{margin: '0 1rem', borderRadius: '50%', height: '40px', width: '25px'}} animation="wave"></Skeleton>
                            <Skeleton style={{margin: '0 1rem', borderRadius: '50%', height: '40px', width: '25px'}} animation="wave"></Skeleton>
                            <Skeleton style={{margin: '0 1rem', borderRadius: '50%', height: '40px', width: '25px'}} animation="wave"></Skeleton>
                            <Skeleton style={{margin: '0 1rem', borderRadius: '50%', height: '40px', width: '25px'}} animation="wave"></Skeleton>
                        </div>
                        :
                        <div className="pagination">
                            <Pagination count={countPages} page={page} onChange={handleSelectPage} showFirstButton showLastButton />

                        </div>
                        }
                    </div>
                    <div className="left-sidebar">
                        <div className="left-sidebar-content">
                            <h2>Не нашли ответ на волнующий вас вопрос? Спросите прямо сейчас.</h2><small>Пожалуйста, перед созданием вопроса, убедитесь, что схожего с вашим вопроса не существует. Наказания за создание копий вопросов не предусмотрены. Если такой вопрос уже имеется, то вы ненарочно засоряете сообщество. Так делать не надо :). При нарочном засорении сообщества предусмотрены наказания, описанные в <Link><LinkUI>соглашении</LinkUI></Link>.</small>
                            <Link to="/add-question">
                                <Button variant="outlined">
                                    Задать вопрос
                            </Button>
                            </Link>
                        </div>
                        {loading || error?
                        <div className="left-sidebar-content">
                            <h2>Выбрать теги для отображения:</h2>
                            <br></br>
                            <Skeleton animation="wave" variant="rect"></Skeleton>
                            <Skeleton animation="wave" variant="rect"></Skeleton>
                            <Skeleton animation="wave" variant="rect"></Skeleton>
                            <Skeleton animation="wave" variant="rect"></Skeleton>
                        </div>
                        :
                        <div className="left-sidebar-content">
                            
                            <h2>Выбрать теги для отображения:</h2>
                            <Button variant="outlined" onClick={() => setTagsByUn(!tagsByUn)}>Выбрать по университету</Button>
                            {tagsByUn ? selectTagsTypeByUniversity() : null}
                            {universityState.BSUIR? tags.map((e,i) => <Button variant="outlined" >{e.name}</Button>): ''}
                            <Button variant="outlined" >Выбрать по специализации</Button>
                        </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>

}

export default FreeHelp;