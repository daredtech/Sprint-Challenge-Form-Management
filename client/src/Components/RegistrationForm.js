import React from 'react';
import {withFormik, Form, Field, setNestedObjectValues} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

// A registration form built with formik - include inputs for a username and a password, submit button

function RegistrationForm () {

    return(
       <Form className=' registration-form'>
  
           <div className='username-field'> 
           <Field type='text' name='username' placeholder='username'/>
           </div>

           <div className='password-field'> 
           <Field type='password' name='password' placeholder='password'/>
           </div>

           <button type='submit' className='registration-button'> submit 
           </button>

       </Form>
    )

}

const FormikRegistrationForm = withFormik({

    //data handling
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

})(RegistrationForm);

export default FormikRegistrationForm;