import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'; 
import './styles.css';
import heroesImg from  '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi/'

export default function Logon(){
  const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e){
      e.preventDefault();
      var response = undefined;
      
      try{
        response = await api.post('sessions', {id});
      }
      catch(error){
        alert('Falha no login tente novamente!');
      };

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
      alert('Login realizado com sucesso!');
    }

    return (
        <div className="logon-container">
          <section className="form">
            <img src={logoImg} alt="be The Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input 
                  placeholder="Sua ID"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
            </form>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
            </Link>

          </section>
          <img src={heroesImg} alt="heroes"/>
        </div>
    );
}