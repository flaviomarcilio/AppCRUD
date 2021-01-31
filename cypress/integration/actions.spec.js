/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/filmes/cadastro')
  })

  const filmeValido = {
    titulo: 'Batman: O Cavaleiro das Trevas',
    urlFoto: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    descricao: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    nota: 9.0,
    urlIMDb: 'https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=47J9TTR073RGQEPW7DYA&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4',
    genero: 'Action',
  }

  // https://on.cypress.io/interacting-with-elements

  it('Preenche o formulário', () => {
    // https://on.cypress.io/type
    cy.get('#mat-input-0')
      .type(filmeValido.titulo).should('have.value', filmeValido.titulo)

    cy.get('#mat-input-1')
      .type(filmeValido.urlFoto).should('have.value', filmeValido.urlFoto)

    cy.get('#mat-input-2')
      .click()
    cy.get('.mat-calendar-body-active').click('center')

    cy.get('#mat-input-3')
      .type(filmeValido.descricao).should('have.value', filmeValido.descricao)

    cy.get('#mat-input-4')
      .type(filmeValido.nota).should('have.value', filmeValido.nota)

    cy.get('#mat-input-5')
      .type(filmeValido.urlIMDb).should('have.value', filmeValido.urlIMDb)

    cy.get('.mat-select-placeholder')
      .click()
    cy.get('#mat-option-0')
      .click()
  })

  it('Salva um filme válido', () => {
    // https://on.cypress.io/submit
    cy.get('.mat-button-wrapper')
      .contains('Salvar').click() 
  })

})
