import { OnEditProfileSubmit } from './onEditProfileSubmit'

export function OnClickSave ({ state, push, user, setUser, setModalVisible }) {
    if (state.userName.val && state.firstName.val) {
        OnEditProfileSubmit({ state, push, user, setUser, setModalVisible })
    } else {
    setModalVisible(true);
    setTimeout(() => {
        setModalVisible(false);
    }, 2000);
    }
}