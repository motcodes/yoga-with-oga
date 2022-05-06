import {
    Flex,
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView
  } from 'dripsy'
import Svg, { Path } from 'react-native-svg'
import { useUser } from '../../provider/userContext'
import { useRouter } from 'solito/router'
import { TextLink, Link } from 'solito/link'
import { ProfileListItem } from '../components/profileListItem'
import { useEffect, useState } from 'react'
import { GetSession } from '../../helper/getSession'

export const Imprint = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View sx={{
                    mx: 16,
                    alignItems: 'center'
                }}>
                    <View sx={{ height: 58 }} />
                    <Text variant={'h4'} sx={{ color: '$greenDark' }}>Imprint</Text>
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
                <View sx={{ height: 32 }}/>

                <Text variant={'small'} sx={{ color: '$greenDark', mx: 16 }}>
                    This Website was created by Sebatian Hinterauer and Matthias Oberholzer as a Multimediaproject 2b for the University of Applied Sciences Salzburg.
                </Text>
                <View sx={{ height: 16 }}/>
                
                <Text variant={'base'} sx={{ color: '$greenDark', mx: 16 }}>
                    Rights
                </Text>
                <Text variant={'small'} sx={{ color: '$greenLight', mx: 16 }}>
                    With regard to your data stored by us, you have the right to information, correction, deletion, restriction, Data portability, revocation and objection. If you believe that the processing of your data violates data protection law or your data protection claims have otherwise been violated in a way, you can complain to the email address listed under ‘Contact Us’ or your data protection authority. Furthermore we use Firebase to store your data. For privacy information visit this site:
                </Text>
                <Link sx={{color: '$yellow'}} href={'http://www.google.com/policies/privacy/partners/'}>
                    <Text variant={'small'} sx={{ color: '$yellow', mx: 16 }}>
                        How Google uses data when you use our partners’ sites or apps
                    </Text>
                </Link>
                <View sx={{height: 16}}/>
                
                <Text variant={'base'} sx={{ color: '$greenDark', mx: 16 }}>
                    Icons
                </Text>
                <Text variant={'small'} sx={{ color: '$greenLight', mx: 16 }}>
                    The Icons we use are from <Link href={'https://feathericons.com/'}><Text variant={'small'} sx={{ color: '$yellow'}}>FeatherIcons</Text></Link>.
                </Text>

                <View sx={{ height: 64 }} />
            </ScrollView>
        </SafeAreaView>
    )
}