import { Layout } from 'app/features/components/layout'
import { View } from 'dripsy'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { UserProvider, useUser } from './userContext'
import { BottomNavProvider } from './bottomNavigationProvider'
import { BottomNavigation } from 'app/features/components/bottomNavigation'

export function Provider({ children }) {
  return (
    <UserProvider>
      <NavigationProvider>
        <BottomNavProvider>
          <Dripsy>
            <Layout>
              {children}
              <View sx={{ height: 48 }} />
              <BottomNavigation />
            </Layout>
          </Dripsy>
        </BottomNavProvider>
      </NavigationProvider>
    </UserProvider>
  )
}
