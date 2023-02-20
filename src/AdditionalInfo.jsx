import React, { useCallback, useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import Step from './Step';
import Select from './Select';
import { onClickBack, onClickNext } from './utils';

export default function AdditionalInfo({ formData, onFormDataChange, setPathname }) {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (options.length < 1) {
                setIsLoading(true);
                const options = await fetch('http://localhost:3001/api/colors');
                const jsonOptions = await options.json();
                setOptions([...jsonOptions]);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [options]);

    const next = useCallback(() => {
        onClickNext('/confirmation', setPathname);
    }, []);
    const back = useCallback(() => {
        onClickBack('/', setPathname);
    }, []);
    return (
        <Step title='Additional Info' to='more-info' isLoading={isLoading}>
            <Select name='color' options={options} onChange={onFormDataChange} />
            <div className='terms-container'>   
                <Input type='checkbox' name='terms' checked={formData.terms} onChange={onFormDataChange} />
                <label className='terms-text'>I agree to <a href=''>Terms And Conditions</a></label>
             </div>
            <div className='button-container'>
                <Button onClick={back}>Back</Button>
                <Button onClick={next} className='next-btn'>Next</Button>
            </div>
        </Step>
    )
}