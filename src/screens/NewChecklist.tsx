import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Checkbox, Surface } from 'react-native-paper'
import SelectDropDown from '../lib/components/SelectDropDown'
import { Checklist, Common } from '../lib/model'
import { AppDrawerScreenProps, checklistOptions } from '../lib/utils'

const initialState: Omit<Checklist, keyof Common> = {
  user_id: '',
  vehicle_id: '',
  items: checklistOptions.reduce((a, c) => {
    a[c] = false
    return a
}, {} as Checklist["items"])

}

/**
 * Form used to fill a new checklist
 */
const NewChecklist = ({ navigation }: AppDrawerScreenProps<'NewChecklist'>) => {
  const [checklist, setChecklist] = useState(initialState)

  /**
   * Reset the checklist when a user leaves it without submitting
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setChecklist(initialState)
    })

    return unsubscribe
  }, [navigation])

  /**
   * Toggles the value of a single item of the checklist
   */
  const toggleItem = (item: keyof Checklist["items"]) => () => {
    setChecklist(v  => ({
      ...v,
      items: {
        ...v?.items,
        [item]: !v.items[item]
      }
    }))
  }

  /**
   * Function that sets all checklist values to the same, either true or false
   * 
   * @param checked wheter the items needs to be checked or not
   */
  const setAll = (checked: boolean) => {
    setChecklist(v => ({
      ...v,
      items: checklistOptions.reduce((a, c) => {
        a[c] = checked
        return a
      }, {} as Checklist["items"])
    }))
  }

  /**
   * Variable that checks if all items are checked
   */
  const allChecked = Object
    .values(checklist.items)
    .reduce((a, c) => a && c, true)

  /**
   * Variable that checks if any of the items aren't checked
   */
  const noneChecked = !Object
    .values(checklist.items)
    .reduce((a, c) => a || c, false)

  
  /**
   * Handles the check-all / uncheck-all button
   */
  const handleMainChecklistPress = () => {
    if (noneChecked)
      setAll(true)
    else
      setAll(false)
  }

  return (
    <ScrollView>
      <Surface>
        <SelectDropDown 
          items={[
            {
              placa: 'HBQ-1234'
            },
            {
              placa: 'HBQ-4321'
            },
            {
              placa: 'HBQ-7891'
            },
          ]}
          onItemPress={(key) => console.log(key)}
          labelProperty='placa'
          anchorLabel="Selecionar veículo"
          style={{
            marginHorizontal: 16,
            marginTop: 8
          }}
          mode="outlined"
        />
        <Checkbox.Item 
          label="Selecionar todos"
          status={allChecked ? 'checked' : noneChecked ? 'unchecked' : 'indeterminate'}
          onPress={handleMainChecklistPress}
        />
        {
          checklistOptions.map((opt, key) => (
            <Checkbox.Item 
              label={opt}
              status={checklist.items[opt] ? 'checked' : 'unchecked'}
              key={key}
              onPress={toggleItem(opt)}
            />
          ))
        }
        <Button icon="content-save">
          Salvar checklist
        </Button>
      </Surface>
    </ScrollView>
  )
}

export default NewChecklist

const styles = StyleSheet.create({})
