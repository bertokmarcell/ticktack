describe('My Page Tests', () => {
  it('shows correct heading', () => {
    cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')

    cy.get('div').should('have.length', 9)
  })
  it('places X when clicking a cell', () => {
    cy.get("div").and("not.contain", "X").and("not.contain","O")
  })
  
  it('places X when clicking a cell', () => {
  cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
  cy.get('.elem').eq(0).click()
  cy.get('.elem').eq(0).should('contain', 'X')
  })
  it('places X when clicking a cell', () => {
  cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
  cy.get('.elem').eq(1).click()
  cy.get('.elem').eq(1).should('contain', 'X')
  })
  it('places X when clicking a cell', () => {
  cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
  cy.on('window:alert', (text) => {
    expect(text).to.contains('A győztes: X')
  })
  cy.get('.elem').eq(0).click()
  cy.get('.elem').eq(6).click()
  cy.get('.elem').eq(1).click()
  cy.get('.elem').eq(4).click()
  cy.get('.elem').eq(2).click()
  })
  it('places X when clicking a cell', () => {
  cy.visit('https://hrvthlevi.github.io/tictactoeJS--260326/')
  cy.on('window:alert', (text) => {
    expect(text).to.contains('A játék döntetlen!')
  })
  cy.get('.elem').eq(0).click()
  cy.get('.elem').eq(2).click()
  cy.get('.elem').eq(1).click()
  cy.get('.elem').eq(6).click()
  cy.get('.elem').eq(2).click()
  })
  
})