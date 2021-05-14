import { Button } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

const Menu = () => {
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
                    
                    
                    <NavLink activeClassName='activeLink' to="/users/profile/1">
                    <Button><li>Профиль</li></Button>
                    </NavLink>
                    
                    
                    <NavLink activeClassName='activeLink' to="/settings">
                    <Button><li>Настройки</li></Button>
                    </NavLink>
                    
                    
                </ul>
            </nav>
        </menu>
    )
}

export default Menu