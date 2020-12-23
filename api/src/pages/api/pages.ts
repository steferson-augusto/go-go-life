/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

type Category = 'messages' | 'news' | 'schedules' | 'taxes' | 'services'
type Type = 'post' | 'image'

interface Content {
  type: Type
  title: string
  properties: {
    categories: Category[]
  }
}

interface Page {
  title: string
  icon: string
  url: string
  content: Content[]
}

export const pages: Page[] = [
  {
    title: 'Home',
    icon: 'home',
    url: 'page://home',
    content: [
      {
        type: 'post',
        title: 'Home Screen',
        properties: {
          categories: ['services']
        }
      }
    ]
  },
  {
    title: 'Camara',
    icon: 'account-balance',
    url: 'page://camara',
    content: [
      {
        type: 'post',
        title: 'Mensagens do Presidente',
        properties: {
          categories: ['messages']
        }
      },
      {
        type: 'post',
        title: 'Notícias',
        properties: {
          categories: ['news']
        }
      },
      {
        type: 'post',
        title: 'Horários e Serviços',
        properties: {
          categories: ['schedules', 'services']
        }
      },
      {
        type: 'post',
        title: 'Taxas e Tarifários',
        properties: {
          categories: ['taxes']
        }
      }
    ]
  },
  {
    title: 'Comunicar',
    icon: 'forum',
    url: 'page://comunicar',
    content: []
  },
  {
    title: 'Proteção Civil',
    icon: 'warning',
    url: 'page://protecao-civil',
    content: []
  },
  {
    title: 'Covid',
    icon: 'healing',
    url: 'page://covid',
    content: [
      {
        type: 'image',
        title: 'Covid',
        properties: {
          categories: ['messages']
        }
      }
    ]
  },
  {
    title: 'Agenda',
    icon: 'event',
    url: 'page://agenda',
    content: []
  }
]

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  return response.send(pages)
}
