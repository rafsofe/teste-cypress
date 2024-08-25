const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    CADASTRO: {
        NOME: '.jumbotron > :nth-child(1) > .form-control',
        EMAIL: '.input-group > .form-control',
        PASSWORD: ':nth-child(3) > .form-control',
        BTN_REGISTRAR: '.btn'
    },
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(., 'rafael cy 0001')]/..//i[@class='far fa-edit']"
    },
    MESSAGE: '.toast-message'
}

export default locators;