import React, { ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
}

const Button: React.FC<ButtonProps> = ({name}) => {
    return(
        <div>
            <button className="ButtonArea">{name}</button>
        </div>
    );
}

export default Button;