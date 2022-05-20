import React from 'react'
import { SessionScreen } from 'app/features/session'
import { useParam, useSession } from 'app/helper'

export const SessionRoute = () => {
  const [sessionId] = useParam('sessionId')
  const session = useSession(sessionId)

  return <SessionScreen sessionId={sessionId} session={session} />
}
