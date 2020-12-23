import React from 'react'

import { Container, Content, Title, Description, Image } from './styles'
import error from '../../assets/images/error.png'

const Error: React.FC = () => (
  <Container>
    <Image source={error} resizeMode="contain" />
    <Content>
      <Title>Houve um problema!</Title>
      <Description>
        Verifique sua conexão ou tente novamente mais tarde...
      </Description>
    </Content>
  </Container>
)

export default Error
