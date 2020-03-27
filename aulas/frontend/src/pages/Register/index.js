import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const registerData ={
            name, email, whatsapp, city, uf
        };

        try{
            const response = await api.post('ongs', registerData);    
            alert(`Cadatro realizado com sucesso. Seu ID de acesso é ${response.data.id}`);
            history.push('/');
        }
        catch(error){
            alert('Erro no cadastro, tente novamente!');
            console.log(error);
        }
        
    };



    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os caso da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Já tenho uma conta
                    </Link>
                </section>

                
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF"
                            onChange={e => setUf(e.target.value)}
                            style={{width:80}}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}