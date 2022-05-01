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
      // onChangeText={onChange}
      // value={value}
      placeholder={placeholder}
      sx={{
        paddingBlock: 12,
        paddingInline: 14,
        border: '2px solid var(--grey-80)',
        borderRadius: 6,
        width: '100%',
        fontSize: 16,
        backgroundColor: '$white',
        color: '$greenDark',
      }}
    />
  )
}
