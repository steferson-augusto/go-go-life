/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

import { pages } from './pages'

type Category = 'messages' | 'news' | 'schedules' | 'taxes' | 'services'

export interface Post {
  title: string
  category: Category
  content?: any
}

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { url } = request.query
  switch (url) {
    case 'page://camara': {
      const posts: Post[] = [
        {
          title: 'O Papel do novo centro da juventude para todos',
          category: 'messages',
          content: '...'
        },
        {
          title: 'Mensagem de Natal 2020',
          category: 'messages',
          content: '...'
        },
        {
          title: 'Obras na avenida 25 de Abril finalizadas antecipadamente',
          category: 'news',
          content: '...'
        },
        {
          title: 'Piscinas municipais abrem portas aos cidadãos carenciados',
          category: 'news',
          content: '...'
        },
        {
          title: 'Horários dos serviços municipais',
          category: 'schedules',
          content: '...'
        },
        {
          title: 'Horários das instalações desportivas',
          category: 'schedules',
          content: '...'
        },
        {
          title: 'Atendimento ao cliente no serviço de águas',
          category: 'schedules',
          content: '...'
        },
        {
          title: 'Tarifas de licenciamento',
          category: 'taxes',
          content: '...'
        },
        {
          title: 'Tarifários de água do conselho',
          category: 'taxes',
          content: '...'
        },
        { title: 'Taxas de saneamento', category: 'taxes', content: '...' }
      ]
      return response.send(posts)
    }
    case 'page://covid': {
      const image: Post[] = [
        {
          title:
            'https://static.poder360.com.br/2020/07/nasa-coronavirus-niaid-868x644.jpg',
          category: 'messages',
          content: '...'
        }
      ]
      return response.send(image)
    }
    default: {
      const page = pages?.find(page => page.url === url) || {
        title: '',
        category: 'services'
      }
      const post: Post[] = [
        {
          title: page.title,
          category: 'services',
          content: ''
        }
      ]
      return response.send(post)
    }
  }
}
