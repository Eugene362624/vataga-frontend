import React, { useEffect } from 'react';
import Header from '../../parts/Header'
import Footer from '../../parts/Footer/Footer'
import Main from '../../parts/Main/Main'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './Index.scss'
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Index = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);


    // useEffect(() => {
    //   axios.get('http://localhost:3001/', {withCredentials: true})
    //   .then((res) => {
    //     if ( res.data.message == "Token is not supplied.") {
    //       console.log("Авторизационного токена не обнаружено. Авторизуйтесь, чтобы продолжиь использование сайта.")
    //     } else if ( res.data.message == "Invalid Token") {
    //       console.log("Ваш Авторизационный токен больше не поддерживается. Повторите процесс авторизации.")
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.data.message = "Token is not supplied.") {
    //       alert('У вас нет доступа к этой странице')
    //     }
    //   })
    // })

    return (
        <div className="index-page">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
}

export default Index