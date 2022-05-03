import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const UserContext = React.createContext()

function UserProvider({children}) {
  const [user, setUser] = useState()

  const getUser = async (userCollectionRef, userId) => {
    const data = await getDocs(userCollectionRef)
    let fetchUser
    data.docs.map((doc) => { 
        /*{doc: doc.id, auth: userId}*/ if (doc.id === userId) {
                fetchUser = { id: doc.id, userName: doc.data().userName, firstName: doc.data().firstName}
        }})
    setUser(fetchUser)
  }

  useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        //console.log(authUser.uid)
        const userCollectionRef = collection(db, 'users')

        getUser(userCollectionRef, authUser.uid)
        
    })
  }, [])

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {user, setUser}
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