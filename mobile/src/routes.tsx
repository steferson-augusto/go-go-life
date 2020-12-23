import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import api from './api'
import { AplicationState } from './store'
import { PagesState } from './store/ducks/pages/types'
import * as PagesActions from './store/ducks/pages/actions'
import PageScreen from './screens/Main'
import Splash from './components/Splash'
import Error from './components/Error'

const Tab = createBottomTabNavigator()

const Routes: React.FC = () => {
  const [splashing, setSplashing] = useState(true)
  const { data, error, loading } = useSelector<AplicationState, PagesState>(
    state => state.pages
  )
  const dispatch = useDispatch()
  useEffect(() => {
    setSplashing(true)

    setTimeout(() => {
      setSplashing(false)
    }, 1500)

    dispatch(PagesActions.loadRequest())
    const getData = async () => {
      try {
        const response = await api.get('/pages')
        dispatch(PagesActions.loadSuccess(response.data))
      } catch (error) {
        dispatch(PagesActions.loadFailure())
      }
    }

    getData()
  }, [])

  if (error) return <Error />

  if (loading || splashing) return <Splash />

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const page = data?.find(pg => pg?.title === route.name)
            const icon = page?.icon || 'error'

            return <Icon name={icon} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#666',
          inactiveTintColor: '#101010'
        }}
        sceneContainerStyle={{ backgroundColor: '#fff' }}
      >
        {data?.map((page, index) => (
          <Tab.Screen
            key={`${index}`}
            name={page?.title}
            component={PageScreen}
            options={{
              tabBarBadge: page.title === 'Comunicar' ? 1 : undefined
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
