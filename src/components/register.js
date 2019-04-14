import React,{Component} from 'react';
import { register} from '../Api/user';

class RigesterPage extends Component{
    registerHandler = async (e) => {
        e.preventDefault();
        const {
          username: { value: username },
          password: { value: password },
          email: { value: email }
        } = e.target.elements;
        const res = await register({ username, password, email }).then(res => this.props.history.push('/login'));
        alert('you are registerd');
      }
    render(){
        return(
            <div className="form">
               <h2>
            Registeration Form
            </h2>
          <form  onSubmit={this.registerHandler} >
              <label>Name</label>
              <input type="text" name="username" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
              <button className="btn btn-purple btn-fluid" type="submit" >
                Register
              </button>
          </form> 
            </div>
        )
    }
}
export default RigesterPage;
