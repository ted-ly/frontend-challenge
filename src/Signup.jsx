import React, { useCallback, useMemo, useEffect } from 'react';
import Input from './Input';
import Step from './Step';
import Button from './Button';
import { onClickNext } from './utils';

const textKeys = {
    name: {placeholder: 'First Name', type: 'text'},
    password: {placeholder: 'Password', type: 'password'},
    email: {placeholder: 'E-mail', type: 'email'},
};
export default function Signup({ formData, onFormDataChange, setPathname }) {
    const inputFields = useMemo(() => {
        return Object.keys(textKeys).map(key => <Input type={textKeys[key].type} key={key} placeholder={textKeys[key].placeholder} name={key} onChange={onFormDataChange} value={formData[key]}/>);
    }, [formData.name, formData.password, formData.email]);

    const onClick = useCallback(() => {
        onClickNext('/more-info', setPathname);
    }, []);
    return (
        <Step title='Sign Up'>
            <div className='signup-container'>
                {inputFields}
                <div className='button-container'>
                    <Button onClick={onClick}>Next</Button>
                </div>
            </div>
        </Step>
    )
}
