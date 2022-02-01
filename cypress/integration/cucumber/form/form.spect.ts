

describe("formulario de registro", () => {
    it("abre la página de registro, rellena el formulario y lo envía", () => {
        cy.visit("/");

        //nombre input
        cy.get('#nombreContacto').type('pepe');

        //telefono input
        cy.get('#telefono').type('628930475');

        //fecha de nacimiento
        cy.get('#fechaNacimiento').click().type('1997-12-04');

        //sexo
        cy.get("#sexoItem").check()

        //cervezas favoritas
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#0').check()
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#3').check()
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#5').check()


        //submit
        cy.get(".agenda-cervecera-alta__submit").click()
    });

});

describe("formulario de registro", () => {
    it("abre la página de registro, rellena el formulario y lo limpia", () => {
        cy.visit("/");

        //nombre input
        cy.get('#nombreContacto').type('pepe');

        //telefono input
        cy.get('#telefono').type('628930475');

        //fecha de nacimiento
        cy.get('#fechaNacimiento').click().type('1997-12-04');

        //sexo
        cy.get("#sexoItem").check()

        //cervezas favoritas
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#0').check()
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#3').check()
        cy.get(".agenda-cervecera-alta__checkbox--wrapper")
            .children('#5').check()


        //submit
        cy.get(".agenda-cervecera-alta__clear").click()
    });

});