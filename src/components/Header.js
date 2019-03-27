import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
    }

    login(){
        Auth.authenticate();
        console.log(Auth.getAuth())
    }

    logout(){
        Auth.signout();
    }

    render(){
        
        return(
            <div>
                <Link to='/'>Home</Link><br/>
                <Link to='Public'>Public</Link><br/>
                <Link to='protected'>Protected</Link><br/>
                <button onClick={this.login}>Login</button><br/>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Header;
