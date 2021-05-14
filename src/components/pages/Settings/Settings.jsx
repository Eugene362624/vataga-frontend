import { Avatar, Button, FormControlLabel, FormGroup, Switch, Tooltip } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../../parts/Footer/Footer'
import Header from '../../parts/Header'
import Menu from '../../parts/Menu/Menu'
import './Settings.scss'

function Settings() {
    let a = localStorage.getItem("checked")
    let b = localStorage.getItem('private')
    console.log(JSON.parse(a))
    const [checked, setChecked] = useState(JSON.parse(a) || false)

    // useEffect(setChecked(!!(localStorage.getItem("checked"))))


    const toggleChecked = () => {
        setChecked(!checked)
        localStorage.setItem("checked", !checked)
    }

    return (
        <div className='settings'>
            <Header />
            <div className="main">
                <Menu />
                <div className="content">
                    <div className="settings-left">
                        <h1>Основные настройки</h1>

                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Изменить цвет темы со светлой на тёмную и наоборот">
                                <span>Изменить тему</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Изменить динамический поиск на статический и наоборотС">
                                <span>Выключить выезжающий поиск</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Включить или выключить звук уведомлений">
                                <span>Отключить звук уведомлений</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Изменить цвет темы со светлой на тёмную и наоборот">
                                <span>Изменить тему</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Изменить цвет темы со светлой на тёмную и наоборот">
                                <span>Изменить тему</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <hr></hr>
                        <h1>Настройки профиля</h1>
                        <div id='line'>
                            <div className="">
                                <Avatar style={{ width: '100px', height: '100px', margin: '1rem 0' }} src='https://avatars.githubusercontent.com/u/6300581?v=4'></Avatar>
                                <Tooltip disableFocusListener arrow title="Изменить фотографию профиля на любую угодную вам">
                                    <span>Изменить фотографию профиля</span>
                                </Tooltip>
                            </div>
                            <Button>Изменить</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="За смену имени взымается плата в количестве 10 бонусов">
                                <span>Изменить имя. Сейчас: Евдоким Кик</span>
                            </Tooltip>
                            <Button>Изменить</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="За смену имени взымается плата в количестве 10 бонусов">
                                <span>Изменить учебное заведение. Сейчас: БГУИР</span>
                            </Tooltip>
                            <Button>Изменить</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="За смену имени взымается плата в количестве 10 бонусов">
                                <span>Изменить теги. (Максимум: 5) Сейчас: программирование, математика, экономика</span>
                            </Tooltip>
                            <Button>Изменить</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title={`После нажатия на "Экспортировать", введенные вами настройки станут доступы на любом вашем устройстве`}>
                                <span>Экспортировать настройки</span>
                            </Tooltip>
                            <Button>Экспортировать</Button>
                        </div>
                    </div>



                    <div className="settings-right">
                        <h1>Настройки приватности</h1>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="При изменении приватности профиля будут скрыты только ваши ответы и вопросы">
                                <span>Изменить приватность профиля</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="При изменении этого параметра, пользователи, не находящиеся в вашем списке избранных, не имеют возможности писать вам">
                                <span>Запретить личные сообщения не от избранных</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Использование телефона даёт возможность иметь вам более безопасный аккаунт. Также у вас будет звание подтвержденного аккаунта на странице профиля. Телефон никому не распространяется и стразу шифруется. Доступ к нему не имеет даже администратор сайта. Это лишь проверка вашей идентичности">
                                <span>Привязать телефон</span>
                            </Tooltip>
                            <Button>Привязать</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="Если вам удобнее использовать телефон для авторизации - пожалуйста">
                                <span>Изменить логин с почты на номер телефона</span>
                            </Tooltip>
                            <FormControlLabel
                                control={<Switch disabled size="medium" checked={checked} onChange={toggleChecked} />}
                            />
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="За смену имени взымается плата в количестве 10 бонусов">
                                <span>Изменить пароль</span>
                            </Tooltip>
                            <Button>Изменить</Button>
                        </div>
                        <div id='line'>
                            <Tooltip disableFocusListener arrow title="За смену имени взымается плата в количестве 10 бонусов">
                                <span>Выйти из профиля</span>
                            </Tooltip>
                            <Button>Выйти</Button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Settings
