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
      userName: state.userName.val,
      firstName: state.firstName.val,
    }
    if (state.gender.val && state.gender.val !== '')
      data = { ...data, gender: state.gender.val }
    if (state.height.val && state.height.val !== '')
      data = { ...data, height: state.height.val }
    if (state.weight.val && state.weight.val !== '')
      data = { ...data, weight: state.weight.val }

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
