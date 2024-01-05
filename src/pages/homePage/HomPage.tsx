import React from 'react';
//Import react router dom
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    
    const onLogin = () => {
        navigate('/login');
    };

    const onSignUp = () => {
        navigate('/signUp')
    };

    return (
        <div>
            <button onClick={onLogin}>Log in</button>
            <button onClick={onSignUp}>Sign up</button>
        </div>
    );
};

export default HomePage;