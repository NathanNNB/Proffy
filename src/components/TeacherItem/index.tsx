import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF4bFJeBPATuw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=ITDk66asVF-dNoipFXNRubItj1ZK7-vv0NKWLR6qNPs" alt="Nathan Novais Borges"/>
        <div>
            <strong>Nathan Novais</strong>
            <span>Física</span>
        </div>
    </header>

    <p>
        Estusiasta nos estudos de física teórica
        <br></br>
        O louco que faz calculos esquecendo coeficientes
    </p>

    <footer>
        <p>
            Preço/Hora
            <strong>R$50,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </button>
    </footer>
    </article>
  );
}

export default TeacherItem;