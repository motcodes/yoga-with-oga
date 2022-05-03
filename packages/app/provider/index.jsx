import { Layout } from 'app/features/components/layout'
import { View } from 'dripsy'
import { Dripsy} from './dripsy'
import { NavigationProvider } from './navigation'
import { BottomNavigation } from 'app/features/components/bottomNavigation'
import { UserProvider, useUser } from './userContext'

export function Provider({ children }) {
  return (
    <UserProvider>
      <NavigationProvider>
        <Dripsy>
          <Layout>
            {children}
            <View sx={{ height: 50 }} />
            <BottomNavigation />
          </Layout>
        </Dripsy>
      </NavigationProvider>
    </UserProvider>
  )
}
