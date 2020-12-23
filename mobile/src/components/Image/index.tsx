import React from 'react'

import { Container, Title, Content, Description, Image } from './styles'

export interface ImageProps {
  type: string
  title: string
  data: string[]
  icon?: string | undefined
}

const ImageComponent: React.FC<ImageProps> = ({ title, data, icon }) => (
  <Container>
    <Title>{title}</Title>
    {data?.length > 0 ? (
      data?.map((content, index) => (
        <Image key={`${index}`} source={{ uri: content }} resizeMode="cover" />
      ))
    ) : (
      <Description>
        <Content>Sem conteúdo.</Content>
      </Description>
    )}
  </Container>
)

export default ImageComponent
