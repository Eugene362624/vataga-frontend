import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Search from '../Search'
import IconButton from "@material-ui/core/IconButton"
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Cookie from 'js-cookie'

import './Header.scss'
import { Button } from '@material-ui/core'
import { useSelector } from 'react-redux';
const Header = (props) => {
    const userLogout =() => {
        Cookie.set('userInfo', null)
        
        props.props.history.push('/')
    }

    const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  console.log(userInfo)
    const [notifications, setNotifications ] = useState(false)

    return (
        <div className="">
            <header>
                <div className="header-left">
                    <div className="logo">
                        <Link to='/'>
                            <h1>Vataga.by</h1>
                        </Link>
                    </div>
                    <Search />
                </div>
                <div className="header-right">
                    <IconButton onClick={() => setNotifications(!notifications)}>
                        {!notifications ?
                        <NotificationsIcon/> :
                        <NotificationImportantIcon /> }
                    </IconButton>
                    {
                    userInfo && props.props && userInfo.id == props.props.match.params.id ?
                    <Button id="isLoged" onClick={() => userLogout()}>
                        Выйти
                    </Button>
                    :
                    userInfo ?
                    <Link id='isLoged' to={`/profile/${userInfo.id}`}>
                        <Button>
                            {userInfo.userName}
                        </Button>
                    </Link>
                    :
                    <Link id='isLoged' to='/login'>
                        <Button>
                            ВОЙТИ
                        </Button>
                    </Link>}
                </div>
            </header>
        </div>
    )
}

export default Header