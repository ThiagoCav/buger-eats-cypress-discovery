class SignupPage{

    go(){
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }
    fillForm(deliver){
        
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.datails)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh) //cypress busca diretamente o nome da imagem na pasta fixtures, por isso passamos /images/

    }
    submit(){
        cy.get('form button[type="submit"]').click()
    }
    modalCotentShouldBe(expectedMessage){
        cy.get('div[id="swal2-html-container"]')
            .should('have.text', expectedMessage)  
    }

    alertMessageShoudldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text', expectedMessage) // Esse Get busca apenas um elemento
        cy.contains('.alert-error', expectedMessage).should('be.visible') // Este contains busca todos os elementos da tela que são .alert-error
    }

}

export default new SignupPage;