const connection = require('../database/conenction');

module.exports = {

    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('ong_id', id)
            .select('*');

        return response.json(incidents);

    }
}