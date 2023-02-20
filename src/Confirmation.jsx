import React, { useMemo, useCallback, useState, useEffect } from 'react';
import Button from './Button';
import Step from './Step';
import { onSubmit, toTransformText, onClickBack } from './utils';

export const textField = {
    name: 'First Name',
    email: 'E-mail',
    password: 'Password',
    color: 'Favorite Color',
    terms: 'Terms And Conditions',
}
export default function Confirmation({ formData, setPathname }) {
    const [isLoading, setIsLoading] = useState(false);
    const back = useCallback(() => {
        onClickBack('/more-info', setPathname);
    }, []);
    const confirmationData = useMemo(() => {
        return Object.keys(textField).map(key => <label className='confirmation-text' key={key} title={key}>{`${textField[key]}: ${toTransformText(formData[key], key)}`}</label>);
    }, []);

    const submit = useCallback(async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(formData, setPathname);
        setIsLoading(false);
    }, []);
    return (
        <Step title='Confirmation' isLoading={isLoading} to='confirmation'>
            <div className='confirmation-container'>
                {confirmationData}
                <div>
                    <Button onClick={back}>Back</Button>
                    <Button onClick={submit} className='next-btn'>Submit</Button>
                </div>
            </div>
        </Step>
    );
}