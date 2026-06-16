/// <reference types="cypress" />

describe('test', () => {
  it('Sent POST request with valid name', () => {
    cy.SentRequest('POST', 'team/90121761677/goal', 
{
  "name": "New Goal",
  "due_date": 1568036964079,
  "description": "Goal Description",
  "multiple_owners": true,
  "color": "#32a852"
})
    .then((response) => {
      expect(response.status).to.eq(200)
      const goalId = response.body.goal.id
      cy.log("GoalID: " + goalId)
      Cypress.env('goalId', goalId)
    })
})

  it('Sent GET request', () => {
    cy.SentRequest('GET', 'team/90121761677/goal', null)
      .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Sent DELETE request', () => {
    const goalId = Cypress.env('goalId')
    cy.SentRequest('DELETE', `goal/${goalId}`, null)
      .then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
