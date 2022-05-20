import { Timestamp } from 'firebase/firestore';

export const testUser = {
  firstName: 'Test',
  sessionName: 'Sun Salutation',
  pastSessions: [
    {
      session: 'sun-salutation',
      timeStamp: Timestamp.fromDate(new Date())
    },
    {
      session: 'sun-salutation',
      timeStamp: Timestamp.fromDate(new Date(new Date().setDate(new Date().getDate())))
    }
  ]
}
