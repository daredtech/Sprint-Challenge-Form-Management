import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Collection from './Collection';



describe('<Collection />', () => {

    // to test the component is rendering
    it('should render the object', () => {
        render(<Collection/>)
    })
})

