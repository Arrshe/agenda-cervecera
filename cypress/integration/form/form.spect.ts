describe("formulario de registro", () => {
    it("abre la página de registro y rellena el formulario", () => {
        cy.visit("/");

        //nombre input
        cy.get('#nombreContacto').type('pepe');

        //telefono input
        cy.get('#telefono').type('628930475');

        //fecha de nacimiento


        //sexo


        //cervezas favoritas

        
    });
});