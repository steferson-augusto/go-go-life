import React from 'react'
import { Image } from 'react-native'
import LottieView from 'lottie-react-native'

import { Container } from './styles'
import logo from '../../assets/images/logo.png'

const Splash: React.FC = () => (
  <Container>
    <Image source={logo} />
    <LottieView
      source={require('../../assets/animations/load.json')}
      autoPlay
      loop
      style={{
        width: 100,
        height: 100
      }}
    />
  </Container>
)

export default Splash
