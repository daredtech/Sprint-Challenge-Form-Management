import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import RegistrationForm from './RegistrationForm';


describe('<RegistrationForm />', () => {
    // to test the component is rendering
    it('should render the object', () => {
        render(<RegistrationForm/>)
    })
})