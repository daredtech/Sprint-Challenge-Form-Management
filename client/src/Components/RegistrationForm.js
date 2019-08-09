import React from 'react';
import {withFormik, Form, Field, setNestedObjectValues} from 'formik';

// A registration form built with formik - include inputs for a username and a password

function RegistrationForm () {

    return(
       <Form className=' registration-form'>
  
           <div className='username-field'> 
           <Field type='text' name='username' placeholder='username'/>
           </div>

           <div className='password-field'> 
           <Field type='password' name='password' placeholder='password'/>
           </div>
       </Form>
    )

}

const FormikRegistrationForm = withFormik({})(RegistrationForm);

export default FormikRegistrationForm;