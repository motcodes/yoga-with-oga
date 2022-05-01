import { Text, useSx } from 'dripsy'
import { useState } from 'react'
import { Pressable as NativeButton } from 'react-native'

const DEFAULT_VARIANTS = 'filled' || 'outlined' || 'text'
const DEFAULT_SIZE = 'default' || 'small'

export const Button = ({
  children,
  variant = DEFAULT_VARIANTS,
  size = DEFAULT_SIZE,
  hasShadow = false,
  onClick,
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
        paddingBlock: 12,
        paddingInline: 32,
        width: size === 'small' ? 'fit-content' : '100%',
        maxWidth: 332,
        backgroundColor:
          variant === 'text'
            ? 'transparent'
            : variant === 'outlined'
            ? '$white'
            : '$green',
        border: variant === 'outlined' ? '2px solid' : 'none',
        borderColor: '$green',
        borderRadius: 6,
        boxShadow: hasShadow
          ? '0px 33px 148px rgba(0, 71, 62, 0.17), 0px 12.5486px 54.0224px rgba(0, 71, 62, 0.10341), 0px 6.24621px 26.2269px rgba(0, 71, 62, 0.0793439), 0px 3.12397px 12.8569px rgba(0, 71, 62, 0.063914), 0px 1.26043px 5.08364px rgba(0, 71, 62, 0.0473013)'
          : 'none',
        ':active': {
          backgroundColor: 'red',
        },
        filter: pressing ? 'brightness(50%)' : 'brightness(100%)',
        transition: 'all 0.1s ease-out',
      })}
    >
      <Text
        sx={{
          color:
            variant === 'text' || variant === 'outlined' ? '$green' : '$white',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {children}
      </Text>
    </NativeButton>
  )
}
