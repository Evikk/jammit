import { connect } from "react-redux";
import React from "react";
import { authService } from "../services/authService.js";
import { login } from '../store/actions/userActions.js'

class _LoginSignup extends React.Component {
    state = {
        msg: "",
        loggedinUser: null,
        loginCred: {
            username: "",
            password: "",
        },
        signupCred: {
            username: "",
            password: "",
            fullname: "",
        },
        isSignUp: false
    };

    componentDidMount(){
        if (this.props.loggedInUser) this.props.history.push('/')
    }

    loginHandleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState((prevState) => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value,
            },
        }));
    };

    signupHandleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState((prevState) => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value,
            },
        }));
    };

    doLogin = async (ev) => {
        ev.preventDefault();
        const { username, password } = this.state.loginCred;
        if (!username) {
            return this.setState({ msg: "Please enter user/password" });
        }
        const userCreds = { username, password };
        this.props.login(userCreds)
        this.setState({loggedInUser: this.props.loggedInUser})
        this.props.history.push('/')
    };

    doSignup = async (ev) => {
        ev.preventDefault();
        const { username, password, fullname } = this.state.signupCred;
        if (!username || !password || !fullname) {
            return this.setState({ msg: "All inputs are required" });
        }

        authService.signup({ username, password, fullname }).then((user) => {
            this.setState({
                signupCred: { username: "", password: "", fullname: "" },
                loggedInUser: user,
            });
        });
    };
    
    render() {
        let signupSection = (
            <form className="login-form" onSubmit={this.doSignup}>
                <h2 className="form-title">Create a new account</h2>
                <input
                    type="text"
                    name="fullname"
                    value={this.state.signupCred.fullname}
                    onChange={this.signupHandleChange}
                    placeholder="Full name"
                />
                <input
                    name="password"
                    type="password"
                    value={this.state.signupCred.password}
                    onChange={this.signupHandleChange}
                    placeholder="Password"
                />
                <input
                    type="text"
                    name="username"
                    value={this.state.signupCred.username}
                    onChange={this.signupHandleChange}
                    placeholder="Username"
                />
                <br />
                <button>Signup</button>
                <p className="message">Already registered? <span onClick={()=>this.setState({isSignUp: false})} >Sign In</span></p>
            </form>
        );
        let loginSection = (
            
            <form className="login-form" onSubmit={this.doLogin}>
                <h2 className="form-title">Login to your account</h2>
                <input
                    type="text"
                    name="username"
                    value={this.state.loginCred.username}
                    onChange={this.loginHandleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.loginCred.password}
                    onChange={this.loginHandleChange}
                    placeholder="Password"
                />
                <button>Login</button>
                <p className="message">Not registered? <span onClick={()=>this.setState({isSignUp: true})}>Create an account</span></p>
            </form>
        );

        return (
            <div>
                <div className="form-container">
                    <div className="form">
                        {this.state.isSignUp ? signupSection : loginSection}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      loggedInUser: state.userModule.loggedInUser
    }
  }
  const mapDispatchToProps = {
    login
  }
  
  export const LoginSignup = connect(mapStateToProps, mapDispatchToProps)(_LoginSignup)
  