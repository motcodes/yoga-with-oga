import { TextInput, useSx } from 'dripsy'
import React from 'react'

export function Input({
  value,
  onChange,
  style,
  placeholder = 'placeholder',
  ...rest
}) {
  const sx = useSx()

  return (
    <input
      {...rest}
      onChange={onChange}
      value={value}
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
        width: '90%',
        ...style
      })}
    />
  )
}
