describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            name: 'Marcel',
            username: 'Marshall',
            password: '1234'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function() {
        cy.contains('log into the application')
        cy.get('#username-input')
        cy.get('#password-input')
    })

    describe('Login',function() {
        it('succeeds with correct credentials', function() {
            cy.login({ username: 'Marshall', password: '1234' })

            cy.contains('Marcel logged-in')
        })

        it('fails with wrong credentials', function() {
            cy.get('input:first').type('Marshall')
            cy.get('input:last').type('123')
            cy.get('#login-button').click()

            cy.get('.error')
                .should('contain', 'Wrong credentials')
                .and('have.css', 'color', 'rgb(255, 0, 0)')
                .and('have.css', 'border-style', 'solid')
        })
    })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.login({ username: 'Marshall', password: '1234' })
        })

        it('a new blog can be created', function() {
            cy.contains('new blog').click()
            cy.get('#title-input').type('A Complete Guide to Flexbox')
            cy.get('#author-input').type('Chris Coyier')
            cy.get('#url-input').type('https://css-tricks.com/snippets/css/a-guide-to-flexbox/')
            cy.contains('create new blog').click()
            cy.contains('A Complete Guide to Flexbox by Chris Coyier')
        })
    })
})