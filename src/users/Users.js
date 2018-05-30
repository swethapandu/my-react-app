import React, {Component} from 'react';
import User from './User';

class Users extends Component{
    state = {
        users:[
            {name: "John",age:20},
            {name: "Smith",age:30},
            {name: "Nik",age:40}
            ],
        title:"Users List",
        name: "Pandu"
    }
    makeMeYounger = () =>{
        const newState = this.state.users.map((users)=>{
            const tempUser = users;
            tempUser.age -= 10;
            return tempUser;
        })
      this.setState({
            newState
        })
    }
    changeName = (newName) =>{
        this.setState({
            name : newName
        })
    }
    changeNameOnInput = (event) =>{
        this.setState({
            name : event.target.value
        })
    }


    render(){
        return (
        <div>
            Hello Users
            <br/>
            <button onClick={this.makeMeYounger}>Make us 10 yrs younger</button>
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((users)=>{
                    return(<User age={users.age}>{users.name}</User>)
                })
            }
        <br/><br/>
        <button onClick={() => this.changeName('Hello Swetha')}>change state using Anon Function</button>
        <br/><br/>
        <button onClick={this.changeName.bind(this,'Hello Swetha Welcome')}>change state using bind Function</button>
        <br/><br/>
        <input type="text" onChange={this.changeNameOnInput} value={this.state.name}/>
        <div>{this.state.name}</div>
        </div>
        )
    }
}

export default Users;