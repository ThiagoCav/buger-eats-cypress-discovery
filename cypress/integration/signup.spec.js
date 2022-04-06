import signup from '../pages/SingnupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // before(function(){
    //     cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes') 
    // })

    // beforeEach(function(){
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    // after(function(){
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes') 
    // })

    // afterEach(function(){
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de CADA os casos de testes') 
    // })

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalCotentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '397870506AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoudldBe('Oops! CPF inválido')
    })
    //Forma dinamica para testar todos os campos. Desta forma o teste não aborta quando é apresentado erro em alguma validação. 
    //Campo e-mail incorreto

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.alertMessageShoudldBe(msg.output)
            })

        })

    })
})
    // it('Required fields', function () {
    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageShoudldBe('É necessário informar o nome')
    //     signup.alertMessageShoudldBe('É necessário informar o CPF')
    //     signup.alertMessageShoudldBe('É necessário informar o email')
    //     signup.alertMessageShoudldBe('É necessário informar o CEP')
    //     signup.alertMessageShoudldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShoudldBe('Selecione o método de entrega')
    //     signup.alertMessageShoudldBe('Adicione uma foto da sua CNH')
    // })