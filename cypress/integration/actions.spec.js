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

  const filmeInvalido = {
    titulo: 'B',
    urlFoto: 'https://m',
    descricao: ' ',
    nota: 11,
    urlIMDb: 'https://w',
    genero: '',
  }

  // https://on.cypress.io/interacting-with-elements

  it('Verifica a validação do formulário vazio', () => {

    cy.get('.mat-button-wrapper')
      .contains('Salvar').click()

    cy.get('.mat-error').should(($errors) => {
      expect($errors).to.have.length(4)
      expect($errors).to.contain('Campo Obrigatório')
    })
    
  })

  it('Verifica a validação para filme inválido', () => {

    cy.get('#mat-input-0').type(filmeInvalido.titulo)

    cy.get('#mat-input-1').type(filmeInvalido.urlFoto)

    cy.get('#mat-input-3').type(filmeInvalido.descricao)

    cy.get('#mat-input-4').type(filmeInvalido.nota)

    cy.get('#mat-input-5').type(filmeInvalido.urlIMDb)

    cy.get('.mat-button-wrapper')
      .contains('Salvar').click()

    cy.get('.mat-error').should(($errors) => {
      expect($errors, '6 erros').to.have.length(6)
      expect($errors.eq(0), 'Título').to.have.text(' O campo deve ter no mínimo 2 caracteres! ')
      expect($errors.eq(1), 'Link Foto').to.have.text(' O campo deve ter no mínimo 10 caracteres! ')
      expect($errors.eq(2), 'Data Lançamento').to.have.text('Campo Obrigatório')
      expect($errors.eq(3), 'Nota').to.have.text(' O maior valor possível é 10 ')
      expect($errors.eq(4), 'Link IMDb').to.have.text(' O campo deve ter no mínimo 10 caracteres! ')
      expect($errors.eq(5), 'Gênero').to.have.text('Campo Obrigatório')
    })

  })

  it('Verifica o cadastro de filme válido', () => {
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

    cy.get('.mat-button-wrapper')
      .contains('Salvar').click() 
  })

})
