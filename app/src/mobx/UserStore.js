import {action, observable} from 'mobx'
import {saveLanguage} from "../util/Store";

export default class UserStore {

    @observable language = 'en'
    @observable wallet = {}

    initWallet() {
        this.wallet = {
            name: '',
            currency: {
                title: '',
                currency: '',
            },
            balance: ''
        }
    }

    @action changeWalletName(name) {
        this.wallet.name = name
    }

    @action changeWalletCurrency(currency) {
        this.wallet.currency = currency
    }

    @action changeWalletBalance(balance) {
        this.wallet.balance = balance
    }

    @action changeLanguage(language) {
        this.language = language
        saveLanguage(language)
    }
}
