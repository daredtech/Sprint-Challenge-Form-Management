import React from 'react';
import axios from 'axios';

class Collection extends React.Component{

    constructor () {
        super();
        // set the initial state to empty 
        this.state = {
            users: []
        }
    }

    // make the request to get the data from the server,
    // if successful, update the state with the data
    // else log the error
    getUsers = () =>{
        axios
        .get('http://localhost:5000/api/restricted/data ')
        .then(response => {
            console.log('i am response when returning users: ', response.data);
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log('unable to get the data')
        })

    }

    // once component is mounted, call the function
    componentDidMount(){
        this.getUsers();
    }

    // display the object
    render (){
        return (
            <div className='collection'>
                <h3> List of Courses</h3>
            {this.state.users.map(
                user => {
                    return <div key={user.name}> 
                    {user.course}: {user.name}
                    </div>
                }
            )}
            </div>
           
           
        )
    }

} 

export default Collection;