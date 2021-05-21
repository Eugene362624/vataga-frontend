import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import './Menu.scss'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser, fullUserInfo} from '../../../actions/userActions'
import Skeleton from '@material-ui/lab/Skeleton';


const Menu = () => {
    const userInfo = JSON.parse(Cookie.get('userInfo') || null)

    const userFullInfo = useSelector(state => state.userFullInfo)
    const { user, loading, error } = userFullInfo
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fullUserInfo(userInfo ? userInfo.id : 0))
    }, [])
    console.log(user)
    return (
        <menu>
            <nav>
                <ul>
                    
                    <NavLink activeClassName='activeLink' exact to="/free-help">
                    <Button><li>Бесплатная помощь</li></Button>
                    </NavLink>
                    
                    <NavLink activeClassName='activeLink' to="/paid-help">
                    <Button><li>Платная помощь</li></Button>
                    </NavLink>
                    
                    <NavLink activeClassName='activeLink' to="/news">
                    <Button><li>Новости</li></Button>
                    </NavLink>
                    
                    <NavLink activeClassName='activeLink' to="/flea-market">
                    <Button><li>Барахолка</li></Button>
                    </NavLink>
                    
                    <NavLink activeClassName='activeLink' to="/library">
                    <Button><li>Библиотека файлов</li></Button>
                    </NavLink>
                    
                    
                    {userInfo ? <NavLink activeClassName='activeLink' to={`/profile/${userInfo ? userInfo.id : 0}`}>
                    <Button><li>Профиль</li></Button>
                    </NavLink> : null}
                    
                    
                    {userInfo ? <NavLink activeClassName='activeLink' to="/settings">
                    <Button><li>Настройки</li></Button>
                    </NavLink>
                    : null}
                    </ul>
            </nav>
        </menu>
    )
}

export default Menu