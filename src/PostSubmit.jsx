import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import Button from './Button';
import Step from './Step';

export default function PostSubmit({ onClickRestart, isError }) {
    const title = isError ? 'Error' : 'Success!';
    const message = isError ? 'Uh oh, something went wrong.  Please try again later.' : 'You should receive a confirmation email soon';
    return (
        <Step title={title}>
            <div>{isError ? <AiFillCloseCircle /> : <AiFillCheckCircle />}</div>
            <div className='post-submit-message'>{message}</div>
            <div className='button-container'>
                <Button onClick={onClickRestart}>Restart</Button>
            </div>
        </Step>
    );
}