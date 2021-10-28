const keyBuilder = (key: string) => `@checklist_app/${key}`

/**
 * AsyncStorage keys used on the app, this file is mainly used to avoid conflicting keys and to ensure the same keys is used for the same information.
 */
export const AppStorageKeys = {
  colorPreference: keyBuilder('user_color_preference'),
  currentUser: keyBuilder('current_user')
}