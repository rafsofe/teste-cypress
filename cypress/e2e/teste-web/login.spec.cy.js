/// <reference types="cypress" />

// Importa as localizações de elementos da página a partir do arquivo centralizado de locators
import loc from '../../support/locators';

// Importa comandos personalizados para interações com a tela de contas, evitando repetição de código
import '../../support/commandsContas';

// Descreve um conjunto de testes para a funcionalidade de login
describe('Testes para a Tela de Login', () => {
    // Hook que é executado uma vez antes de todos os testes
    before(() => {
        // Realiza o login usando um comando personalizado que insere e-mail e senha
        cy.login('rafael.cy@rafael.cy.com', '12345678');
    });

    // Teste para validar o login com sucesso
    it('Deve realizar login com sucesso', () => {
        // Verifica se a mensagem de boas-vindas está presente na tela após o login
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo');
    });
});