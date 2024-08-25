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
        cy.login('rafael.cy@rafael.cy.com', '123456789');
    });

    // Teste para validar mensagem de erro com credenciais inválidas
    it('Mensagem de erro para credenciais inválidas', () => {
        // Verifica se a mensagem de Error está presente na tela
        cy.get(loc.MESSAGE).should('contain', 'Error')
    })
})