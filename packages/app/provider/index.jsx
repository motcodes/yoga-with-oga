import { Layout } from 'app/features/components/layout'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { UserProvider } from './userContext'

export function Provider({ children }) {
  return (
    <UserProvider>
      <NavigationProvider>
        <Dripsy>
          <Layout>{children}</Layout>
        </Dripsy>
      </NavigationProvider>
    </UserProvider>
  )
}
