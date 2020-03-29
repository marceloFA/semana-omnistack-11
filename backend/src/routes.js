const express = require('express'); 
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

// Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Validators
const OngValidator = require('./validators/OngValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const SessionValidator = require('./validators/SessionValidator');

/*
Tipos de parametros:
    Query params: parametros nomeados enviados na rota após "?" (filtros, paginação)
    é posísivel obter esses pelo atributo query do objeto request (request.query)
    
    Route params: parametros utilizados para indentificar recursos
    é posísivel obter esses pelo atributo params do objeto request (request.params)

Request body:
    Corpo da requisição, utilizado para criar ou alterar recursos
    é possível obter este por meio do atributo body do objeto request (request.body)
*/

routes.post('/sessions', SessionController.create);

routes.get('/profile', celebrate(ProfileValidator.profile), ProfileController.index);

routes.post('/ongs', celebrate(OngValidator.ongCreation), OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', celebrate(IncidentValidator.pagination), IncidentController.index);
routes.delete('/incidents/:id', celebrate(IncidentValidator.delete), IncidentController.delete);

module.exports = routes;