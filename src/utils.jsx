import { useState, useCallback } from 'react';

export const initialState = {
    name: '',
    password: '',
    color: '',
    email: '',
    terms: false,
};

export const onClickNext = (to, setPathname) => {
    setPathname(to);
    window.history.pushState(null, '', to);
};

export const onClickBack = (from, setPathname) => {
    setPathname(from);
    window.history.pushState(null, '', from);
}; 

export const onSubmit = async (formData, setPathname) => {
    const resp = await fetch('http://localhost:3001/api/submit', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formData) });
    if (resp.status >= 400) {
        window.history.pushState(null, '', '/error');
        setPathname('/error');
    } else {
        window.history.pushState(null, '', '/success');
        setPathname('/success');
    }
};

export const createOnClickRestart = ({ setFormData, setPathname }) => useCallback(() => {
    window.history.pushState(null, '', '/');
    setPathname('/');
    setFormData({...initialState});
}, []);

export const createOnFormDataChange = ({ setFormData, formData }) => useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = {
        ...formData,
        [name]: name ==='terms' ? !formData.terms : value,
    };

    setFormData({...newFormData});
}, [formData]); 

export const useForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [pathname, setPathname] = useState('/');
    const onFormDataChange = createOnFormDataChange({ formData, setFormData });
    const onClickRestart = createOnClickRestart({ setFormData, setPathname });

    return { onClickRestart, onFormDataChange, formData, setPathname };
};

export const toCapitalized = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export const toTransformText = (text, key) => {
    if (key === 'terms') {
        return text ? 'Agreed' : 'Disagreed';
    }

    if (key === 'password') {
        return '*'.repeat(text.length);
    }

    return text;
}; 