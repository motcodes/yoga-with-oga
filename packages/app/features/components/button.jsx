import { Text, useSx } from 'dripsy'
import { useState } from 'react'
import { Pressable as NativeButton } from 'react-native'

const DEFAULT_VARIANTS = 'filled' | 'outlined' | 'text'
const DEFAULT_SIZE = 'default' | 'small'

export const Button = ({
  children,
  variant = DEFAULT_VARIANTS,
  size = DEFAULT_SIZE,
  hasShadow = false,
  onClick,
  style,
  ...rest
}) => {
  const sx = useSx()
  const [pressing, setPress] = useState(false)
  return (
    <NativeButton
      {...rest}
      onPress={onClick}
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      style={sx({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 32,
        paddingRight: 32,
        width: size === 'small' ? 'fit-content' : '100%',
        backgroundColor:
          variant === 'text'
            ? 'transparent'
            : variant === 'outlined'
            ? '$white'
            : '$green',
        borderWidth: variant === 'outlined' ? 2 : 0,
        borderStyle: 'solid',
        borderColor: '$green',
        borderRadius: 6,
        boxShadow: hasShadow ? 'md' : 'none',
        ':active': {
          backgroundColor: 'red',
        },
        filter: pressing ? 'brightness(50%)' : 'brightness(100%)',
        transition: 'all 0.1s ease-out',
        ...style,
      })}
    >
      <Text
        sx={{
          color:
            variant === 'text' || variant === 'outlined' ? '$green' : '$white',
          userSelect: 'none',
        }}
      >
        {children}
      </Text>
    </NativeButton>
  )
}
