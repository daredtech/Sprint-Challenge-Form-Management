import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, setNestedObjectValues} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

// A registration form built with formik - include inputs for a username and a password, submit button

function RegistrationForm ({values, errors, touched, status}) {
    // to hold all the usernames-passwords
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status){
            setUsers([...users, status])
        }
    }, [status])

    // should be updating
    // console.log('current status: ', status);


    return(
       <Form className=' registration-form'>

           <h3> Register </h3>
  
           <div className='username-field'> 
           <Field type='text' name='username' placeholder='username'/>
           {/* will display error message if touched but doesn't pass validatoin */}
           {touched.username && errors.username && <p>{errors.username}</p>}
           </div>

           <div className='password-field'> 
           <Field type='password' name='password' placeholder='password'/>
           {/* will display error message if touched but doesn't pass validatoin */}
           {touched.password && errors.password && <p>{errors.password}</p>} 
           </div>

           <button type='submit' className='registration-button'> submit 
           </button>

       </Form>
    )

}

const FormikRegistrationForm = withFormik({

    // data handling
    mapPropsToValues({ username, password }) {
        return {
          username: username || "",
          password: password || "",
        };
      },

    // user input validation
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('enter username'),

        password: Yup.string()
        .required('enter password')
        .min(8, 'must be at least 8 characters long')
    }),

    // submit handling
    handleSubmit (values, {setStatus}) {
        // temp
        console.log('submitting the following values: ', values);
        // to make a post request
        axios
            .post('http://localhost:5000/api/register', values)

            // if successful, set the status to the response
            .then(response => {
                // temp
                console.log('i am response', response)

                setStatus(response);
                
                // temp
                console.log('posted');
            })
            // if not successful, log an error

            .catch(error => {
                // temp
                console.log('unable to post', error);
            })
        
    }

})(RegistrationForm);

export default FormikRegistrationForm;