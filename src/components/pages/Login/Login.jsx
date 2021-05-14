import React, { useEffect, useState } from 'react';
import {Avatar, Button} from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link';
import {Link, Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useCookies} from 'react-cookie'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../actions/userActions';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">
      <LinkUI color="inherit">
        Vataga.by
      </LinkUI></Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url(/Studyonline.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#656565",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {

  const classes = useStyles();

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const {loading, userInfo, error} = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      props.history.push('/')
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(userEmail, userPassword))
  }

  // const userLogin = () => {
  //     axios.post('/login', {
  //       userEmail,
  //       userPassword
  //     })
  //     .then((res) => setCookie('auth', `Bearer ${res.data.token}`, {path:"/", maxAge: 10000000}))
  //     .catch((error) => {
  //       console.log(error.response)
  //       if(error.response) {
  //         if (error.response.status && error.response.status == 400) console.log("Неверный почтовый адрес или пароль")
  //       }
  //         else console.log(error)
  //     })
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <form onSubmit={submitHandler} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => setUserEmail(e.target.value)}
              label="Адрес электронной почты"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value='remember' />}
              label="Запомнить меня"
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Авторизоваться
            </Button>
            <Grid container>
              <Grid item xs>
                <LinkUI href="#" variant="body2">
                  Забыли пароль?
                </LinkUI>
              </Grid>
              <Grid item>
                <Link to="/register" >
                  <LinkUI variant="body2">{"Всё ещё нет аккаунта? Зарегистрируйтесь!"}</LinkUI>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}