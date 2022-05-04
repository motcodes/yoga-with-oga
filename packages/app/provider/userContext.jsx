import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'
import { doc, getDoc } from 'firebase/firestore'

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState()

  const getUser = async (userCollectionRef) => {
    console.log('userCollectionRef :', userCollectionRef)
    const data = await getDoc(userCollectionRef)
    const fetchUser = { ...data.data(), id: data.id}
    setUser(fetchUser)
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      const userCollectionRef = doc(db, 'users', authUser.uid)

      getUser(userCollectionRef)
    })
  }, [])

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { user, setUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export {UserProvider, useUser}