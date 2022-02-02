describe('Note app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function() {
        cy.visit('http://localhost:3000')
        cy.contains('Notes')
        cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
    })

    it('login form can be opened', function() {
        cy.visit('http://localhost:3000')
        cy.contains('login').click()
    })

    it('user can login', function () {
        cy.login({ username: 'Marshall', password: '1234' })

        cy.contains('Marcel logged-in')
    })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'Marshall', password: '1234' })
        })

        it('a new note can be created', function() {
            cy.contains('new note').click()
            cy.createNote({
                content: 'another note cypress',
                important: true
            })
            cy.contains('another note cypress')
        })
    })

    describe('login fails with wrong password', function() {
        it('login fails with wrong password', function() {
            cy.contains('login').click()
            cy.get('#username').type('mluukkai')
            cy.get('#password').type('wrong')
            cy.get('#login-button').click()

            cy.get('.error')
                .should('contain', 'Wrong credentials')
                .should('have.css', 'color', 'rgb(255, 0, 0)')
                .should('have.css', 'border-style', 'solid')

            cy.get('html').should('not.contain', 'Marcel logged-in')
        })
    })
})

