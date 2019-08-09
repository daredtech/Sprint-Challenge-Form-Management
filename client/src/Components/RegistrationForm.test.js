import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import RegistrationForm from './RegistrationForm';



describe('<RegistrationForm />', () => {
    // to test the component is rendering
    it('should render the object', () => {
        render(<RegistrationForm/>)
    }),

    // to test that form has valid entry
    it('should note when submit is clicked', () => {
        const { getByPlaceholderText } = render(<RegistrationForm  />);
        const name_input = getByPlaceholderText('username');
        const password_input = getByPlaceholderText('password');
        fireEvent.change(name_input, { target: { name: 'username', value: 'cool user' } });
        fireEvent.change(password_input, { target: { password: 'password', value: '12345678' } });
        expect(name_input.value).toBe('cool user');
        expect(password_input.value).toBe('12345678');
    })



})

