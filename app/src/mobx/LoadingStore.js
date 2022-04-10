import {action, observable} from 'mobx'
import {strings} from "../config/i18n/i18n";
import DialogUtil from "../util/DialogUtil";

export default class LoadingStore {

    @observable loading = false

    @action showLoading() {
        this.loading = true
    }

    @action hideLoading() {
        this.loading = false
    }
}

export const showMessage = (message, title, onClickOk) => {
    title = title || strings('common.title');
    DialogUtil.showMessageDialog(title, message, strings('common.ok'), onClickOk);
}

export const showConfirm = ({message, title, confirmText, confirmReject, onConfirmClick, onRejectClick}) => {
    title = title || strings('common.title');
    message = message || strings('common.message');
    confirmText = confirmText || strings('common.ok');
    confirmReject = confirmReject || strings('common.cancel');
    DialogUtil.showConfirmDialog(title, message, confirmText, confirmReject, onConfirmClick, onRejectClick);
}

export const showError = (error, title) => {
    title = title || strings('common.error')
    const message = error && error.message
    if (message) {
        DialogUtil.showMessageDialog(title, message, strings('common.ok'))
    } else {
        DialogUtil.showMessageDialog(title, strings('common.unknown'), strings('common.ok'))
    }
};
