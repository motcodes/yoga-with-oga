import { Flex, Text, View, useSx } from 'dripsy'
import React, { useEffect, useState } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { Link, TextLink } from 'solito/link'
import { User } from 'react-native-feather'
import { createParam } from 'solito'
import { useParam } from 'app/helper'

export const BottomNavigation = () => {
  const sx = useSx()
  const [videoId] = useParam('videoId')
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    if (videoId) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [videoId])

  return (
    isVisible && (
      <Flex
        sx={{
          justifyContent: 'center',
          width: '100%',
          height: 80,
          borderTopWidth: 4,
          borderTopColor: '$grey25',
          backgroundColor: '$white',
          position: 'fixed',
          bottom: 0,
        }}
      >
        <Link sx={{ mt: 50 }} href="/">
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View sx={{ height: 10 }} />

            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M11.9997 22.9979L11.9999 21.9979H11.9995L11.9997 22.9979ZM7.5 22.5315L7.94626 21.6366L7.5 22.5315ZM8.43275 19.2559L8.25697 18.2715H8.25697L8.43275 19.2559ZM9.31302 14.5732L8.31526 14.5062V14.5062L9.31302 14.5732ZM9 14.5L9.7824 15.1228L9.7824 15.1228L9 14.5ZM2.84891 19.193L2.81865 18.1935L2.84891 19.193ZM2.17464 16.4656L1.93271 15.4953H1.93271L2.17464 16.4656ZM8.21483 10.8488L8.97771 11.4953L8.97771 11.4953L8.21483 10.8488ZM8.51622 10.5172L9.23049 11.2171L9.23049 11.2171L8.51622 10.5172ZM16.4999 22.5315L16.0537 21.6366L16.4999 22.5315ZM15.5672 19.2559L15.743 18.2715H15.743L15.5672 19.2559ZM14.6869 14.5732L15.6847 14.5062V14.5062L14.6869 14.5732ZM14.9999 14.5L14.2175 15.1228L14.2175 15.1228L14.9999 14.5ZM21.151 19.193L21.1208 20.1925H21.1208L21.151 19.193ZM21.8253 16.4656L22.0672 15.4953L21.8253 16.4656ZM15.7851 10.8488L16.548 10.2022V10.2022L15.7851 10.8488ZM15.4837 10.5172L14.7694 11.2171V11.2171L15.4837 10.5172ZM7.94626 21.6366C7.62479 21.4763 7.50091 21.3153 7.45625 21.227C7.41625 21.1478 7.41025 21.0733 7.43839 20.9842C7.50219 20.7823 7.81974 20.3812 8.60853 20.2403L8.25697 18.2715C6.96638 18.5019 5.88187 19.272 5.5313 20.3817C5.35225 20.9485 5.38599 21.5649 5.67144 22.1294C5.95224 22.6848 6.43952 23.1201 7.05374 23.4264L7.94626 21.6366ZM8.60853 20.2403C9.42828 20.094 9.75458 19.3416 9.87987 18.9807C10.0368 18.5288 10.1188 17.984 10.169 17.4753C10.2205 16.9532 10.2444 16.3993 10.2614 15.9046C10.279 15.3932 10.2888 14.9669 10.3108 14.6403L8.31526 14.5062C8.2904 14.8763 8.27882 15.3638 8.26259 15.8359C8.24579 16.3249 8.22349 16.8246 8.17866 17.2789C8.13251 17.7467 8.06804 18.1014 7.9905 18.3247C7.88135 18.6391 7.88529 18.3379 8.25697 18.2715L8.60853 20.2403ZM8.2176 13.8772C7.38787 14.9196 6.3124 16.0259 5.26211 16.8678C4.73707 17.2887 4.23733 17.6281 3.79382 17.8607C3.33532 18.1011 3.01132 18.1876 2.81865 18.1935L2.87917 20.1925C3.50784 20.1735 4.14577 19.9344 4.72256 19.632C5.31435 19.3217 5.92326 18.9011 6.51302 18.4283C7.69234 17.483 8.87107 16.2677 9.7824 15.1228L8.2176 13.8772ZM2.81865 18.1935C2.48962 18.2034 2.28942 18.1189 2.17982 18.0417C2.06696 17.9621 2.02061 17.8717 2.00607 17.8074C1.99196 17.745 2.00281 17.6937 2.03226 17.6492C2.05993 17.6074 2.15153 17.502 2.41656 17.4359L1.93271 15.4953C1.26202 15.6626 0.710275 16.0226 0.364211 16.5458C0.0199315 17.0662 -0.0733325 17.6794 0.0552927 18.2484C0.320281 19.4206 1.44162 20.2361 2.87917 20.1925L2.81865 18.1935ZM2.41656 17.4359C3.72483 17.1097 4.88907 16.1259 5.90606 15.0698C6.93467 14.0016 7.98705 12.6642 8.97771 11.4953L7.45195 10.2022C6.38882 11.4567 5.43601 12.6746 4.46542 13.6825C3.48322 14.7025 2.65425 15.3154 1.93271 15.4953L2.41656 17.4359ZM11.9995 21.9979C11.2165 21.9981 10.4025 22.0122 9.64 21.9638C8.85519 21.914 8.28187 21.8039 7.94626 21.6366L7.05374 23.4264C7.7716 23.7844 8.69055 23.9076 9.51342 23.9598C10.3586 24.0134 11.2677 23.9981 11.9999 23.9979L11.9995 21.9979ZM8.97771 11.4953C9.0598 11.3984 9.14386 11.3055 9.23049 11.2171L7.80195 9.81733C7.67763 9.9442 7.56121 10.0733 7.45195 10.2022L8.97771 11.4953ZM10.3108 14.6403C10.3628 13.8655 9.71666 13.5373 9.42131 13.4685C9.09911 13.3935 8.57316 13.4305 8.2176 13.8772L9.7824 15.1228C9.51885 15.4539 9.15396 15.4598 8.96754 15.4164C8.85665 15.3905 8.7036 15.3285 8.56546 15.187C8.41184 15.0297 8.29635 14.7878 8.31526 14.5062L10.3108 14.6403ZM12 8C10.417 8 8.8702 8.72709 7.80195 9.81733L9.23049 11.2171C9.96179 10.4707 11.0081 10 12 10V8ZM16.9462 23.4264C17.5604 23.1201 18.0477 22.6848 18.3285 22.1294C18.6139 21.5649 18.6477 20.9485 18.4686 20.3817C18.1181 19.272 17.0335 18.5019 15.743 18.2715L15.3914 20.2403C16.1802 20.3812 16.4977 20.7823 16.5615 20.9842C16.5897 21.0733 16.5837 21.1478 16.5437 21.227C16.499 21.3153 16.3751 21.4763 16.0537 21.6366L16.9462 23.4264ZM15.743 18.2715C16.1146 18.3379 16.1186 18.6391 16.0094 18.3247C15.9319 18.1014 15.8674 17.7467 15.8213 17.2789C15.7764 16.8246 15.7541 16.3249 15.7373 15.8359C15.7211 15.3638 15.7095 14.8763 15.6847 14.5062L13.6892 14.6403C13.7111 14.9669 13.7209 15.3932 13.7385 15.9046C13.7555 16.3993 13.7794 16.9532 13.8309 17.4753C13.8811 17.984 13.9632 18.5288 14.1201 18.9807C14.2453 19.3416 14.5716 20.094 15.3914 20.2403L15.743 18.2715ZM14.2175 15.1228C15.1289 16.2677 16.3076 17.483 17.4869 18.4283C18.0767 18.9011 18.6856 19.3217 19.2774 19.632C19.8542 19.9344 20.4921 20.1735 21.1208 20.1925L21.1813 18.1935C20.9886 18.1876 20.6646 18.1011 20.2061 17.8607C19.7626 17.6281 19.2629 17.2887 18.7378 16.8678C17.6875 16.0259 16.6121 14.9196 15.7823 13.8772L14.2175 15.1228ZM21.1208 20.1925C22.5583 20.2361 23.6796 19.4206 23.9446 18.2484C24.0733 17.6794 23.98 17.0662 23.6357 16.5458C23.2896 16.0226 22.7379 15.6626 22.0672 15.4953L21.5834 17.4359C21.8484 17.502 21.94 17.6074 21.9677 17.6492C21.9971 17.6937 22.008 17.745 21.9939 17.8074C21.9793 17.8717 21.933 17.9621 21.8201 18.0417C21.7105 18.1189 21.5103 18.2034 21.1813 18.1935L21.1208 20.1925ZM22.0672 15.4953C21.3457 15.3154 20.5167 14.7025 19.5345 13.6825C18.5639 12.6746 17.6111 11.4567 16.548 10.2022L15.0222 11.4953C16.0129 12.6642 17.0652 14.0016 18.0939 15.0698C19.1109 16.1259 20.2751 17.1097 21.5834 17.4359L22.0672 15.4953ZM11.9995 23.9979C12.7316 23.9981 13.6409 24.0134 14.4862 23.9598C15.3092 23.9076 16.2283 23.7844 16.9462 23.4264L16.0537 21.6366C15.7181 21.8039 15.1446 21.914 14.3596 21.9638C13.597 22.0122 12.7829 21.9981 11.9999 21.9979L11.9995 23.9979ZM16.548 10.2022C16.4387 10.0733 16.3223 9.9442 16.198 9.81733L14.7694 11.2171C14.8561 11.3055 14.9401 11.3984 15.0222 11.4953L16.548 10.2022ZM15.6847 14.5062C15.7036 14.7878 15.5881 15.0297 15.4345 15.187C15.2963 15.3285 15.1433 15.3905 15.0324 15.4164C14.846 15.4598 14.4811 15.4539 14.2175 15.1228L15.7823 13.8772C15.4268 13.4305 14.9008 13.3935 14.5786 13.4685C14.2833 13.5373 13.6371 13.8655 13.6892 14.6403L15.6847 14.5062ZM12 10C12.9919 10 14.0381 10.4707 14.7694 11.2171L16.198 9.81733C15.1297 8.72709 13.5829 8 12 8V10Z"
                fill="#00473E"
              />
              <Circle cx="12" cy="4" r="3" stroke="#00473E" strokeWidth="2" />
            </Svg>

            <Text variant={'small'} style={sx({ color: '$green' })}>
              Session
            </Text>
          </Flex>
        </Link>

        <View sx={{ width: 50 }} />

        {/*<TextLink href='/user/motcodes'>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View sx={{ height: 11}} />

          <Inbox stroke='hsla(180, 3%, 45%, 1)' height={24} width={24}></Inbox>

          <Text variant={'small'} style={sx({color: '$grey45'})}>
              Pose Library
          </Text>
        </Flex>
      </TextLink>

      <View sx={{ width: 51}} />*/}

        <TextLink href="/auth/signUp">
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View sx={{ height: 10 }} />

            <User stroke="hsla(180, 3%, 45%, 1)"></User>

            <Text variant={'small'} sx={{ color: '$grey45' }}>
              Profile
            </Text>
          </Flex>
        </TextLink>
      </Flex>
    )
  )
}
