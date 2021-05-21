import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import './Register.scss'

export default function SignUp() {
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isRegisterDisabled, setRegisterStatus] = useState(true)

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#656565',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const classes = useStyles();
  

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to='/'>
      <LinkUI color="inherit">
        Vataga.by
      </LinkUI></Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  const userRegister = () => {
    axios.post('/register', {
      userName,
      userSurname,
      userPassword,
      userEmail
    }).then(res => {
      console.log(res)
        if (res.status == 200) console.log(res.data.message)
    })
    .catch(error => {
      console.log(error.response)
      if (error.response.data = "User is already exist") console.log('Пользователь с такой почтой уже существует')
    })
  }




  return (
    <Container maxWidth="sm" className='register-page'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                inputProps={{maxLength: 20}}
                onChange={(e) => setUserName(e.target.value)}
                id="firstName"
                label="Имя"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                inputProps={{maxLength: 20}}
                onChange={(e) => setUserSurname(e.target.value)}
                label="Фамилия"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={(e) => setUserEmail(e.target.value)}
                label="Адрес электронной почты"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Я хочу получать новостную рассылку от веб-портала Vataga.by"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" onClick={() => setRegisterStatus(!isRegisterDisabled)} required={true}/>}
                label="Я полностью согласен с правилами сообщества"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            disabled={isRegisterDisabled}
            color="primary"
            className={classes.submit}
            onClick={() => userRegister()}
          >
            Зарегистрироваться
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <Link to="/login">
              <LinkUI variant="body2">
                Уже есть аккаунт? Авторизуйтесь!
              </LinkUI>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
