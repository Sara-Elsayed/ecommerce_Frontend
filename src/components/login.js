import React,{Component} from 'react';
import { login} from '../Api/user';

class LoginPage extends Component{
    loginHandler = async (e) => {
        e.preventDefault();
        const {
          username: { value: username },
          password: { value: password },
        } = e.target.elements;
        const res = await login({ username, password});
        // .then(re => this.props.history.push('/'));
        localStorage.setItem('token',res.token);
        localStorage.setItem('userid',res.user._id)
      }
    render(){
        return(
            <div className="form">
               <h2>
            Sign In
            </h2>
          <form  onSubmit={this.loginHandler} >
              <label>Name</label>
              <input type="text" name="username" />
              <label>Password</label>
              <input type="password" name="password" />
              <button className="btn btn-purple btn-fluid" type="submit" >
                Sign In
              </button>
          </form> 
            </div>
        )
    }
}
export default LoginPage;
