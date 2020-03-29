import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Profile(){
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const authorizationHeader = {headers: {Authorization:ongId}}
    
    useEffect(() => {
        api.get('incidents', {headers: {Authorization:ongId}})
        .then(response => {setIncidents(response.data);})
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,authorizationHeader);
            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(error){
            console.log(error);
            alert("Erro ao deletar incidente!");
        };
    };

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo(a) {ongName}</span>

                <Link to="/incidents/new" className="button">
                    Cadastar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>

                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>

                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{syle:'currency',currency:'BRL'}).format(incident.value)}</p>

                    <button type="button">
                        <FiTrash2 onClick={()=> handleDeleteIncident(incident.id)} size={20} color="#a88ab3"></FiTrash2>
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}