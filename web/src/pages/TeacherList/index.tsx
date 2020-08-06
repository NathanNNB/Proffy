import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
const TeacherList: React.FC = () => {
  return (
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os profs disponíveis">
          teste
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject"></input>
            </div>

            <div className="input-block">
              <label htmlFor="week-day">Dia da Semana</label>
              <input type="text" id="week-day"></input>
            </div>

            <div className="input-block">
              <label htmlFor="time">Hora</label>
              <input type="text" id="time"></input>
            </div>
          </form>
        </PageHeader>
        <main>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
            
        </main>
      </div>
  )
}

export default TeacherList;