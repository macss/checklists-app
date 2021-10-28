import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import UserContext from '../contexts/UserContext'
import { User } from '../model'
import { AppStorageKeys } from '../utils'

/**
 * Custom provider that handles reading and setting user data into local storage
 */
const StoredUserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  /**
   * Loads current user when app is opened
   */
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const value = await AsyncStorage.getItem(AppStorageKeys.currentUser)
        if (value !== null) {
          setUser(JSON.parse(value))
        }
        setLoading(false)
      } catch (e) {}
    }

    getCurrentUser()
  }, [])

  /**
   * Changes cached user when user authenticates or logs off
   */
  useEffect(() => {
    const updateUser = async () => {
      try {
        if (user) {
          await AsyncStorage.setItem(AppStorageKeys.currentUser, JSON.stringify(user))
        } else {
          await AsyncStorage.removeItem(AppStorageKeys.currentUser)
        }       
      } catch (e) {}
    }

    updateUser()
  }, [user])

  const providerData = useMemo(() => ({
    user,
    setUser,
    loading
  }), [user, setUser, loading])

  return (
    <UserContext.Provider value={providerData}>
      { children }
    </UserContext.Provider>
  )
}

export default StoredUserProvider
