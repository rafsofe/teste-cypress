/// <reference types="cypress" />

// Importa os seletores de elementos da página a partir do arquivo centralizado de locators
import loc from '../../support/locators';

// Importa os comandos personalizados para interações com a tela de contas
import '../../support/commandsContas';

// Função para gerar um e-mail aleatório
const generateRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `user${randomString}@example.com`;
};

// Descreve um conjunto de testes para a funcionalidade de cadastro
describe('Testes de Cadastro', () => {
    // Hook que é executado uma vez antes de todos os testes
    before(() => {
        // Realiza o cadastro usando um comando personalizado que insere nome, e-mail e senha
        // O comando 'cy.cadastro' deve ser definido em 'commands.js'
        const randomEmail = generateRandomEmail();  // Gera um e-mail aleatório
        cy.cadastro('Rafael 01', randomEmail, '12345');  // Usa o e-mail aleatório p
    });

    // Teste para validar que o cadastro foi realizado com sucesso
    it('Deve realizar o cadastro de conta com sucesso', () => {
        // Verifica se a mensagem de sucesso está presente na tela após o cadastro
        // 'loc.MESSAGE' é um seletor para localizar o elemento que exibe a mensagem de sucesso
        cy.get(loc.MESSAGE).should('contain', 'Usuário adicionado');
    });
});