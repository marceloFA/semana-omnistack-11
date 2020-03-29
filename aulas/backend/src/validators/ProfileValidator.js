
const { celebrate, Segments, Joi } = require('celebrate');

// Authorization HEADER validation
const profileValidationKeys = {
    authorization: Joi.string().required()
};

const profileValidation = {
    [Segments.HEADERS]: Joi.object(profileValidationKeys).unknown()
};


// FinalObject and export
const ProfileValidator = {
    profile: profileValidation
};

module.exports = ProfileValidator;
