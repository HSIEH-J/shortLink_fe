import React, { MouseEventHandler } from 'react';
//Import react router dom
import { useNavigate } from 'react-router-dom';

type ButtonProps =  {
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string,
};

type ResultLists = {
    originalURL: string,
    shortURL: string,
    redirectTimes: number,
};

type Result = {
    lists: ResultLists[],
};

const fakeData: ResultLists[] = [
    {
        originalURL: "www.https://longlonglong1.com.tw",
        shortURL: "www.https://short1.com.tw",
        redirectTimes: 100,
    },
    {
        originalURL: "www.https://longlonglong2.com.tw",
        shortURL: "www.https://short2.com.tw",
        redirectTimes: 100,
    },
    {
        originalURL: "www.https://longlonglong3.com.tw",
        shortURL: "www.https://short3.com.tw",
        redirectTimes: 100,
    }
];

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
                <Button onClick={onLogin} text={"login"} />
                <Button onClick={onSignUp} text={"Sign up"} />
            </div>
            <div>
                <ResultTable lists={fakeData} />
            </div>
        </div>
    );
};

const Button: React.FC<ButtonProps> = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

const ResultTable: React.FC<Result> = ({ lists }) => {
    const content = lists.map((item) => {
        return(
            <tr>
                <td>{item.originalURL}</td>
                <td>{item.shortURL}</td>
                <td>{item.redirectTimes}</td>
            </tr>
        )
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>URL</th>
                    <th>Short URL</th>
                    <th>Redirect Times</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
};

export default HomePage;