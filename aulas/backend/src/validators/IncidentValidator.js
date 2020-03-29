
const { celebrate, Segments, Joi } = require('celebrate');

//Incident DELETE validation
const incidentDeleteKeys = {
    id: Joi.number().required()
};

const incidentDeleteValidator = {
    [Segments.PARAMS]: incidentDeleteKeys
};


// Incident pagination validator
const incidentsListingKeys = {
    page: Joi.number()
};

const incidentsListingValidator = {
    [Segments.QUERY]: Joi.object().keys(incidentsListingKeys)
};

// FinalObject and export
const IncidentValidator = {
    pagination: incidentsListingValidator,
    delete: incidentDeleteValidator

};

module.exports = IncidentValidator;