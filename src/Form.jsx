import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import Confirmation from './Confirmation';
import PostSubmit from './PostSubmit';
import Route from './Route';
import Signup from './Signup';
import { useForm } from './utils';

export default function Form() {
    const dataProps = useForm();

    return (
        <div className='form'>
            <Route path='/'><Signup {...dataProps} /></Route>
            <Route path='/more-info'><AdditionalInfo {...dataProps} /></Route>
            <Route path='/confirmation'><Confirmation {...dataProps} onClickNext={dataProps.onSubmit} /></Route>
            <Route path='/error'><PostSubmit {...dataProps} isError={true} /></Route>
            <Route path='/success'><PostSubmit {...dataProps} /></Route>
        </div>
    );
}