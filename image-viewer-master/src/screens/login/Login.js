import React,{Component} from 'react';
import Header from '../../common/header/Header';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Login.css'


const styles={
    card:{
        padding:'20px',
        top:'100px',
        left:'50%',
        width:'350px',
        position:'relative',
        transform:'translateX(-50%)'
    },
    title:{
        fontSize:25
    }
};

class Login extends Component{
    constructor(){
        super();
        this.state={
            userNameRequired:"dispNone",
            passwordRequired:"dispNone",
            userName:"",
            password:"",
            incorrectCredentials:"dispNone",
            loggedIn:sessionStorage.getItem('access-token') == null ? false : true

        };
    }

    loginButtonClickHandler = () => {
        this.state.userName === ""? this.setState({userNameRequired:"dispBlock"}) : this.setState({userNameRequired:"dispNone"});
        this.state.password === ""? this.setState({passwordRequired:"dispBlock"}) : this.setState({passwordRequired:"dispNone"});

        if(this.state.userName === "" || this.state.password === ""){
            return
        }

        if(this.state.userName === "aravind" && this.state.password === "password"){
            sessionStorage.setItem('username','aravind');
            sessionStorage.setItem('access-token','14175697527.0fb87b1.c09c3615c3444216bd1c44ce25d5cc50');
            this.setState({loggedIn:true});
            this.goToHomePage();
        }
        else{
            this.setState({incorrectCredentials:"dispBlock"})
        }
    }

    goToHomePage = () => {
        this.props.history.push('/home');
    }

    inputUserNameChangeHandler = (e) => {
        this.setState({ userName : e.target.value})
    }

    inputPasswordChangeHandler =(e) => {
        this.setState({password : e.target.value})
    }

    

    render(){
        return(
            <div class="mainController">
                <Header />
                <Card style={styles.card}>
                    <CardContent>
                        <Typography style={styles.title}>LOGIN</Typography>
                        <br/><br/>
                                   
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username = {this.state.userName} onChange={this.inputUserNameChangeHandler}/>
                            <FormHelperText className={this.state.userNameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>

                        <br/><br/>
                        <FormControl required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <div className={this.state.incorrectCredentials}><span className="red">Incorrect username and/or password</span></div><br/>            
                        <Button variant="contained" color="primary" onClick={this.loginButtonClickHandler}>LOGIN</Button>
                </CardContent>
                </Card>
            </div>
        );
    }
}

export default Login;