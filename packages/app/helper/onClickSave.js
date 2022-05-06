import { onEditProfileSubmit } from './onEditProfileSubmit'

export function onClickSave({ state, push, user, setUser, setModalVisible }) {
  if (state.userName.val && state.firstName.val) {
    onEditProfileSubmit({ state, push, user, setUser, setModalVisible })
  } else {
    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false)
    }, 2000)
  }
}
