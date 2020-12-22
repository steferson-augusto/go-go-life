/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

type Category = 'messages' | 'news' | 'schedules' | 'taxes' | 'services'
type Type = 'post'

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

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  const pages: Page[] = [
    {
      title: 'Home',
      icon: 'fa-home',
      url: 'page://home',
      content: []
    },
    {
      title: 'Camara',
      icon: 'fa-building',
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
      icon: 'fa-chat',
      url: 'page://comunicar',
      content: []
    },
    {
      title: 'Proteção Civil',
      icon: 'fa-danger',
      url: 'page://protecao-civil',
      content: []
    },
    {
      title: 'Covid',
      icon: 'fa-band-aid"',
      url: 'page://covid',
      content: []
    },
    {
      title: 'Agenda',
      icon: 'fa-calendar',
      url: 'page://agenda',
      content: []
    }
  ]
  response.send(pages)
}
