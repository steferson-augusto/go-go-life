import React from 'react'
import LottieView from 'lottie-react-native'

import { Container } from './styles'

const Loading: React.FC = () => (
  <Container>
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

export default Loading
