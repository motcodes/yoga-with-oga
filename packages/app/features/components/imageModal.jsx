import { Image, Pressable, View } from 'dripsy'
import React from 'react'
import { Alert, Modal, useWindowDimensions } from 'react-native'
import { X } from 'react-native-feather'
import { IconButton } from './iconButton'

export const ImageModal = ({ modalVisible, setModalVisible, modalData }) => {
  const windowSize = useWindowDimensions()
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        setModalVisible(!modalVisible)
      }}
    >
      <View
        sx={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <View
            sx={{
              backgroundColor: '$white',
              borderRadius: 8,
              padding: '4px',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 1,
              shadowRadius: 150,
              elevation: 3,
              height: windowSize.height * 0.85,
              width: windowSize.width * 0.9,
              maxHeight: windowSize.width * (16 / 9),
              position: 'relative',
            }}
          >
            <Image
              source={{ uri: modalData.imageUrl }}
              accessibilityLabel={modalData.title}
              sx={{ width: '100%', height: '100%', borderRadius: 6 }}
            />

            <IconButton style={{ position: 'absolute' }}>
              <X />
            </IconButton>
          </View>
        </Pressable>
      </View>
    </Modal>
  )
}
