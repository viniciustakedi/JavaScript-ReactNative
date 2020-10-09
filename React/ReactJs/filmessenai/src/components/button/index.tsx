import React, { ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    onClick: any;
}

const Button: React.FC<ButtonProps> = ({name, onClick}) => {
    return(
        <div>
            <button onClick={onClick} className="ButtonArea">{name}</button>
        </div>
    );
}

export default Button;