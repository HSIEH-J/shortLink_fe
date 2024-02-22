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
            <div>
                <button onClick={onLogin}>Log in</button>
                <button onClick={onSignUp}>Sign up</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

const ResultTable: React.FC = ({ data }) => {
    const content = data.map((item) => (<td>{item}</td>));
    return (
        <table>
            <thead>Results</thead>
            <tbody>
                <tr>
                    {content}
                </tr>
            </tbody>
        </table>
    );
};

export default HomePage;