import { Text, TextInput, useSx, View } from 'dripsy'
import React from 'react'

export function Input({
  value,
  onChange,
  style,
  lable = '',
  placeholder = 'placeholder',
  ...rest
}) {
  const sx = useSx()

  return (
    <>
    <Text variant={'base'} sx={{ color: '$green', alignSelf: 'flex-start' }}>{lable}</Text>
    <View sx={{ height: 4 }}/>
    <TextInput
      {...rest}
      onChangeText={onChange}
      defaultValue={value}
      placeholder={placeholder}
      style = {sx({
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '$grey80',
        borderRadius: 6,
        fontSize: 16,
        backgroundColor: '$white',
        color: '$greenDark',
        width: '100%',
        ...style
      })}
    />
    </>
  )
}
