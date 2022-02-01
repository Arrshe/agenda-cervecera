Feature: Formulario de registro


    Scenario: El usuario envía el formulario
        Given: Entro en la página de la agenda cervecera
        And: Relleno los campos del formulario
        When: Pulso sobre el botón de enviar
        Then: Se envía el formulario


    Scenario: El usuario cancela el formulario
        Given: Entro en la página de la agenda cervecera "http://localhost:4200/"
        And: Relleno los campos del formulario
        When: Pulso sobre el botón de limpiar
        Then: Se limpian los campos del formulario