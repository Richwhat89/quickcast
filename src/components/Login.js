import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/userReducer';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            passowrd: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.hadleSubmit = this.hadleSubmit.bid(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render(){
        return(
            <div>
                <h1>Quick Caster</h1>
                    <div onSubmit = {this.handleSubmit}>
                        <input onChange = {this.handleChange} value = {this.state.username} name = 'username'/>
                        <input onChange = {this.handleChange} value = {this.state.password} name = 'password'/>
                        {this.props.username ? <Link to = '/hole'><button>Fish!</button></Link> :
                        <button onClick = {() => this.props.login(this.state.username, this.state.password)}>Login</button>}
                    </div>
                    <div>
                        <Link to = '/register'><button>Register</button></Link>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {login: login})(Login);