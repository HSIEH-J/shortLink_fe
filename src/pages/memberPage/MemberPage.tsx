import React from 'react';
//Import react router dom
import { useNavigate } from 'react-router-dom';
//Import interface
import { MemberProps } from '../../utils/interface';

const MemberPage: React.FC<MemberProps> = ({title, text}) => {
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/');
    };

    return (
        <div>
            Here's <b>{title}</b> Page....<br />
            <br />
            extra text will be <b>{text}</b>
            <br /><br />
            <button onClick={onBack}>Back</button>
        </div>
    );
};

export default MemberPage;