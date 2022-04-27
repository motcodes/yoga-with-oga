import { Layout } from 'app/features/components/layout'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({ children }) {
  return (
    <NavigationProvider>
      <Dripsy>
        <Layout>{children}</Layout>
      </Dripsy>
    </NavigationProvider>
  )
}
