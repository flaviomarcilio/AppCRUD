/// <reference types="cypress" />

context('Navegação', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/filmes')
    })
  
    it('Navega para a página de cadastro', () => {

      cy.get('.mat-toolbar').contains('Menu').click({ force: true })
      cy.get('.mat-list-item-content').contains('Cadastrar novo Filme').click({ force: true })
  
      cy.location('pathname').should('include', 'cadastro')
  
      cy.go('back')
      cy.location('pathname').should('not.include', 'cadastro')
  
      cy.go('forward')
      cy.location('pathname').should('include', 'cadastro')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', 'cadastro')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', 'cadastro')
    })
  
    it('Recarrega a página', () => {
      // https://on.cypress.io/reload
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('Navega para a página inicial', () => {
      // https://on.cypress.io/visit
  
      // Visit any sub-domain of your current domain
  
      // Pass options to the visit
      cy.visit('http://localhost:4200/filmes', {
        timeout: 50000, // increase total time for the visit to resolve
        onBeforeLoad (contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad (contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === 'object').to.be.true
        },
      })
    })

    it('Navega para a página Detalhes e para página de edição', () => {
      cy.get(':nth-child(3) > .mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').click()

      cy.get('.mat-list > :nth-child(1) > .mat-list-item-content').then(($span) => {

        const titulo1 = $span.text().slice(8)

        cy.get('.mat-accent > .mat-button-wrapper').click().then(() => {

          cy.get('#mat-input-1').should('contain.value', titulo1)

          // cy.get('#mat-input-1').should(($value) => {
          //   expect($value, 'Título').to.have.value(titulo1)
          // })

        })
      })
    })
  })