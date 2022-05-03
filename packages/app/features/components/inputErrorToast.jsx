
import {
    Box,
    Flex,
    H3,
    H4,
    H5,
    extraSmall,
    Text,
    View,
    useSx,
    ScrollView,
    SafeAreaView,
} from 'dripsy'
import { Modal } from 'react-native'

export const InputErrorToast = ({ modalVisible }) => {
    const sx = useSx()
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View sx={{
            alignItems: 'center'
            }}>
            <View sx={{ height: '87%' }} />
            <View sx={{
                backgroundColor: '$salmonLight',
                width: '90%',
                height: 40,
                borderRadius: 6,
                boxShadow: 'modal',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text variant={'small'} sx={{
                    color: '$grey45'
                }}>
                    ❌  Something went Wrong! Please check your input.
                    </Text>
            </View>
            </View>
        </Modal>
    )
}