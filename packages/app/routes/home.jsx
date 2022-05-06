import React from 'react'
import { useSessions } from 'app/helper'
import { HomeScreen } from 'app/features/home/screen'
import { useUser } from 'app/provider/userContext'

export const HomeRoute = () => {
  const { user } = useUser()
  const sessions = useSessions()

  return <HomeScreen user={user} sessions={sessions} />
}
