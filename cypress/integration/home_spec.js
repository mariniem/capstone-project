describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the correct title', () => {
    cy.title().should('equal', 'React App')
  })

  /* it('has a bookmark', () => {
    cy.get('[class^=Exercise__]')
      .first()
      .find('[class^=HeartBookmark__]')
      .click()
  }) */

  /*   describe('Home', () => {
    it('has a navigation button', () => {
      cy.get('[class^=Footer-sc-9cmh87-0]')
        .first()
        .find('[class^=Footer__NavButton]')
        .click()
    }) */
})

/*   it('has a navigtion', () => {
    cy.contains('create').click
  }) */
