describe('ui-counter', () => {
  beforeEach(() => {
    // 페이지 접속, 띄어진 서버 port 를 작성한다.
    cy.visit('http://localhost:64424');
  })

  it('생성시 버튼과 초기값(10)을 렌더링 한다.', () => {
    // 버튼 렌더링 검증
    cy.get('.minus-button').should('be.visible');
    cy.get('.minus-button').should('have.text', '-');
    cy.get('.plus-button').should('be.visible');
    cy.get('.plus-button').should('have.text', '+');
    cy.get('.count-display').should('have.value', 10);
  })

  it('+ 버튼을 클릭 시 count 가 1증가한다.', () => {
    cy.get('.plus-button').click();
    cy.get('.count-display').should('have.value', 11);
  })

  it('- 버튼을 클릭 시 count 가 1감소한다.', () => {
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value', 9);
  })

  it('+ 버튼을 눌렀을 때 count 가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)', () => {
    cy.get('.count-display').should('have.value', 10);

    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();

    cy.get('.count-display').should('have.value', 12);
  })

  it('- 버튼을 눌렀을 때 count 는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)', () => {
    cy.get('.count-display').should('have.value', 10);

    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();

    cy.get('.count-display').should('have.value', 8);
  })

});

/*
* '+' 텍스트를 포함하는 엘리먼트
  cy.contains('+');

* Assersion API: https://docs.cypress.io/guides/references/assertions.html
  cy.get('.login').should('be.visible');                    // 보임
  cy.get('form').should('have.class', 'form-horizontal');   // 'form-horizontal' 클래스가 있음
  cy.get('input').should('not.have.value', 'Jane');         // value가 'Jane'이 아님
  cy.get('.value').should('have.text', '10');               // 텍스트가 '10'
  cy.get('.btn-inc').should('have.attr', 'disabled');       // disabled 속성이 있음(true)
* https://docs.cypress.io/guides/overview/why-cypress
* https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
 */
