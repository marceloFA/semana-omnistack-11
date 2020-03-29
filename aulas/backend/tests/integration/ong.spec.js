const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conenction');

const postOngData = {
    name: "APAD",
    email: "test@test.com",
    whatsapp: "11999999999",
    city: "São Paulo",
    uf: "SP"
};


// if you need to set the Authoriation hader for any test user the following syntax:
// request(app).method().set('Authorization',yourAuthorizationHeader)....


describe('ONG', () => {

    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it('Shoud be able to create a new ONG', async () =>{
        const  response = await request(app)
                        .post('/ongs')
                        .send(postOngData);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    afterAll(async () =>{ connection.destroy() });

});