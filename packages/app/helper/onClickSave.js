import { onEditProfileSubmit } from './onEditProfileSubmit'

export function onClickSave({ state, push, user, setUser, setModalVisible }) {
  if (state.userName.value && state.firstName.value) {
    onEditProfileSubmit({ state, push, user, setUser, setModalVisible })
    console.log('yes')
  } else {
    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false)
    }, 2000)
  }
}
