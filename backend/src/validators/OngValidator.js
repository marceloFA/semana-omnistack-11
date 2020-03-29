const { celebrate, Segments, Joi } = require('celebrate');

// Ong Creation
const ongCreationKeys = {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(8).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
};

const ongCreationValidator = {
    [Segments.BODY]: Joi.object().keys(ongCreationKeys)
};


// Another validator here later on



// Final object and export
const OngValidator = {
    ongCreation: ongCreationValidator
};

module.exports = OngValidator;
