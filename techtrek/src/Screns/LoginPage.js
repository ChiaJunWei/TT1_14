import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Input } from '../components/Input';

import { useDispatch, useSelector } from 'react-redux';

import { signIn, signUp } from '../Redux/actions'
import { LOGOUT } from '../Redux/actionTypes';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"TechTrek-1 Team 14 "} 
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
    backgroundImage: 'url(https://source.unsplash.com/random)',
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    backgroundColor : 'red',
    width: '100%',
    display : 'flex',
    paddingLeft : 10,
    color : 'white',
    borderRadius : 5,
    marginBottom: 10,
  },
}));

const initForm = { first_name : '', last_name : '', username : '', password : '', confirmPassword : '', postal_code : '', gender : '',}
export default function LoginPage() {
  const classes = useStyles();

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch({type : LOGOUT});
    history.push('/login');
}

  const history = useHistory();
  const [form, setForm] = React.useState(initForm)
  const [isRegister, setIsRegister] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const error = useSelector((state) => state.error);
  const token = useSelector((state) => state.token)

  React.useEffect(() => {
    if(token) {
      history.push("/");
    }
  },[token])

  const handleSwitchMode = (e) => {
    e.preventDefault();
    setForm(initForm);
    setIsRegister(!isRegister);
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isRegister) {
      dispatch(signUp(form, history));
    } else {
      dispatch(signIn(form,history));
    }

  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
            {isRegister ? 'Register' : 'Sign in'}
          </Typography>
          <form className={classes.form} onSubmit = {(e) => handleSubmit(e)} >
            {isRegister ? 
            <>
              <Input name = "first_name" label = "First Name" handleChange = {handleChange} value = {form.first_name} autoFocus />
              <Input name = "last_name" label = "Last Name" handleChange = {handleChange} value = {form.last_name} />
            </> 
            : null
            }
            <Input name = "username" label = "Username" handleChange = {handleChange} value = {form.username} />
            <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? 'text' : 'password'} value = {form.password} handleShowPassword = {handleShowPassword}/>
            {isRegister ? 
            <>
              <Input name = "confirmPassword" label = "Confirm Password" handleChange = {handleChange} type = 'password' value = {form.confirmPassword}/>
            </> 
            : null
            }
            {isRegister ? <>
              <Input name = "postal_code" label = "Postal Code" handleChange = {handleChange} value = {form.postalCode} autoFocus />
              <Input name = "gender" label = "Gender" handleChange = {handleChange} value = {form.gender} />
            </> : null
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isRegister ? 'Register':'Sign In'}
            </Button>
            {error && <Typography variant='body2' className = {classes.error}>{error}</Typography>}
            <Grid container>
              <Grid item>
                <Link onClick = {(e) => handleSwitchMode(e)}variant="body2">
                  {isRegister ? "Return to login page" : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
            {<Button onClick ={handleLogout}>
                LOGOUT
        </Button>}
          </form>
        </div>

      </Grid>
    </Grid>
  );
}