import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView
  } from 'dripsy'

export const ContactUs = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View sx={{
                    mx: 16,
                    alignItems: 'center'
                }}>
                    <View sx={{ height: 58 }} />
                    <Text variant={'h4'} sx={{ color: '$greenDark' }}>Contact Us</Text>
                    <View sx={{ height: 62 }}/>
                </View>

                <Image
                    source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/yoga-with-oga.appspot.com/o/yoga-with-oga-logo-320.png?alt=media&token=edb09175-1e90-4633-adc1-5717bdf947fd',
                    }}
                    accessibilityLabel="Yoga with Oga Logo"
                    sx={{
                        width: 128,
                        height: 128,
                        alignSelf: 'center',
                        mb: '24px',
                    }}
                />
                <View sx={{height: 32}}/>
                
                <View sx={{
                    mx: 16
                }}>
                    <Text variant={'small'} sx={{ color: '$greenDark' }}>
                        If you need more infromation about Yoga with Oga or want to report a bug hit us up:
                    </Text>

                    <View sx={{ height: 16 }} />

                    <Text variant={'base'} sx={{ color: '$greenDark' }}>
                        Sebastian Hinterauer
                    </Text>
                    <Text variant={'small'} sx={{ color: '$greenLight' }}>
                        shinterauer.mmt-b2020@fh-salzburg.ac.at
                    </Text>

                    <View sx={{ height: 16 }} />

                    <Text variant={'base'} sx={{ color: '$greenDark' }}>
                        Matthias 'Oga' Oberholzer
                    </Text>
                    <Text variant={'small'} sx={{ color: '$greenLight' }}>
                        moberholzer.mmt-b2020@fh-salzburg.ac.at
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}