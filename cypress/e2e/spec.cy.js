describe('template spec', () => {
  beforeEach(() => {
    // Configuración que se ejecuta antes de cada prueba.
    cy.visit('http://localhost:5173/')
  });

  it('passes', () => {
    // Prueba para asegurarnos de que la página se carga correctamente.
    // Aquí no es necesario visitar nuevamente la página, ya que ya se hizo en el beforeEach.
    // Podemos agregar alguna aserción adicional si es necesario.
  });

  it('Elemento p conteniendo texto', () => {
    // Prueba para verificar que el elemento p con el id "testingCypress" contiene el texto especificado ("Precios de mayorista").
    cy.get('#testingCypress').should('have.text', 'Precios de mayorista');
  })

  it('Checkbox clicado del footer', () => {
    cy.get('#politica').should('not.be.checked')
  })

  it('Navegar al login y loguear usuario', () => {
    cy.visit('http://localhost:5173/'); // <-- Aquí, si es otra página de tu aplicación, debes definir la dirección correctamente.
    cy.get('#email').type('augusto@mail.com');
    cy.get('#password').type('Augusto1234');
    cy.get('#loginButton').click();
    cy.location('pathname').should('eq','/allproducts');
  })

})