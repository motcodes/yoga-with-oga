import React, { useState } from 'react'

export const BottomNavigationContext = React.createContext()

export function BottomNavProvider({ children }) {
  const [isBottomNav, setBottomNav] = useState(true)

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { isBottomNav, setBottomNav }
  return (
    <BottomNavigationContext.Provider value={value}>
      {children}
    </BottomNavigationContext.Provider>
  )
}

export function useBottomNav() {
  const context = React.useContext(BottomNavigationContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
