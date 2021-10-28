import React, { useState } from 'react'
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { List, Menu, TextInput } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'


type SelectDropDownMenu<I> = {
  items: I[]
  labelProperty: keyof I
  anchorLabel?: string
  onItemPress: (key: number) => void
  containerStyle?: StyleProp<ViewStyle>
} & Partial<TextInputProps>

const SelectDropDown = <I,>({ items, labelProperty, onItemPress, anchorLabel = 'Abrir Menu', style, ...rest }: SelectDropDownMenu<I>) => {
  const [visible, setVisible] = useState(false)
  const [itemWidth, setItemWidth] = useState(0)
  const [selectedKey, setSelectedKey] = useState<number>(-1)

  const toggleMenu = () => setVisible(v => !v)
  const inputValue = (selectedKey >= 0 ? items[selectedKey][labelProperty] : '') as string

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={
        <Pressable style={style} onPress={toggleMenu} onLayout={({ nativeEvent: { layout: { width } } }) => { setItemWidth(width) }}>
          <TextInput 
            label={anchorLabel}  
            right={<TextInput.Icon name={visible ? 'chevron-down' : 'chevron-up'} onPress={toggleMenu} />}            
            value={inputValue}
            focusable={false}
            editable={false}
            {...rest}
          />
        </Pressable>
        }
      style={{
        width: itemWidth,
        marginHorizontal: 8
      }}
    >
      {
        items.map((item, key) => (
          <List.Item 
            onPress={() => {
              onItemPress(key)
              setSelectedKey(key)
              toggleMenu()
            }}
            title={item[labelProperty]}
            key={key}
          />
        ))
      }
    </Menu>
  )
}

export default SelectDropDown

const styles = StyleSheet.create({})
