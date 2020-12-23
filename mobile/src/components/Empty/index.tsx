import React from 'react'

import { Container, Content, Title, Description, Image } from './styles'
import empty from '../../assets/images/empty.png'

const Empty: React.FC = () => (
  <Container>
    <Image source={empty} resizeMode="contain" />
    <Content>
      <Title>Sem conteúdo</Title>
      <Description>
        Não há para ser exibido aqui, volte mais tarde...
      </Description>
    </Content>
  </Container>
)

export default Empty
