
import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';
// import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;

}


const TextArea: React.FC<InputProps> = ({ label, name,...rest }) => {
  return(
    <div className="textarea-block">
        <label htmlFor={name}>{ label }</label>
        <textarea id={name} {...rest}/>
  </div>
  );
}

export default TextArea;