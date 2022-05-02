import { TextInput } from 'dripsy'
import React from 'react'

export function Input({
  value,
  onChange,
  style,
  placeholder = 'placeholder',
  ...rest
}) {
  return (
    <TextInput
      {...rest}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      sx={{
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '$grey80',
        borderRadius: 6,
        width: '100%',
        fontSize: 16,
        backgroundColor: '$white',
        color: '$greenDark',
      }}
    />
  )
}
