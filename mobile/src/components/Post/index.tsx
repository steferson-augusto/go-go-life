import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Title, Content, Description } from './styles'

export interface PostProps {
  title: string
  data: string[]
  icon?: string | undefined
}

const Post: React.FC<PostProps> = ({ title, data, icon }) => (
  <Container>
    <Title>{title}</Title>
    {data?.length > 0 ? (
      data?.map((content, index) => (
        <Description key={`${index}`}>
          {icon ? <Icon name={icon} size={16} color="#121212" /> : null}
          <Content icon={!!icon}>{content}</Content>
        </Description>
      ))
    ) : (
      <Description>
        <Content icon={false}>Sem conteúdo.</Content>
      </Description>
    )}
  </Container>
)

export default Post
