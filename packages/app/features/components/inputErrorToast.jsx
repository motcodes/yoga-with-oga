import { Text, View, useSx } from 'dripsy'
import { Modal } from 'react-native'
import { X } from 'react-native-feather'

export const InputErrorToast = ({ modalVisible }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View
        sx={{
          alignItems: 'center',
          position: 'relative',
          height: '100%',
        }}
      >
        <View
          sx={{
            backgroundColor: '#fff',
            width: '90%',
            mt: 24,
            px: 16,
            py: 12,
            borderRadius: 6,
            // boxShadow: 'modal',
            shadowColor: '#320501',
            borderColor: '$salmon',
            borderWidth: 2,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.16,
            shadowRadius: 35,
            elevation: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 96,
          }}
        >
          <Text
            variant={'small'}
            sx={{
              color: '#320501',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X />
            <View sx={{ width: '8px' }} />
            <span>Something went Wrong! Please check your input.</span>
          </Text>
        </View>
      </View>
    </Modal>
  )
}
