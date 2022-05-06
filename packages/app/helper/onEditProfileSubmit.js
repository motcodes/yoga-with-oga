import { db } from '../firebase/client'
import { doc, setDoc } from 'firebase/firestore'

export async function onEditProfileSubmit({
  state,
  push,
  user,
  setUser,
  setModalVisible,
}) {
  try {
    const { id, gender, height, weight, ...tmpUser } = user
    let data = {
      ...tmpUser,
      userName: state.userName.value,
      firstName: state.firstName.value,
    }
    if (state.gender.value && state.gender.value !== '')
      data = { ...data, gender: state.gender.value }
    if (state.height.value && state.height.value !== '')
      data = { ...data, height: state.height.value }
    if (state.weight.value && state.weight.value !== '')
      data = { ...data, weight: state.weight.value }

    console.log(data)
    await setDoc(doc(db, 'users', id), data)
    setUser({ ...data, id: id })

    push('/profile/settings')
  } catch (error) {
    console.log(error)

    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false)
    }, 2000)
  }
}
