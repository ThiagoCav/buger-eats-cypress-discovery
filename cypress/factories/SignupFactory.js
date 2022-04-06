var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '1199999222',
            address: {
                postalcode: '14805428',
                street: 'Avenida José Santiago Torres',
                number: '296',
                datails: 'teste',
                district: 'Residencial Cambuy',
                city_state: 'Araraquara/SP'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data
    }
}