import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes'
import { SignIn } from '../screens/SignIn'

export function Routes() {
  const { user } = useAuth()

  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </View>
  )
}