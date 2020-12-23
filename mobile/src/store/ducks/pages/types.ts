export enum PagesTypes {
  LOAD_REQUEST = '@pages/LOAD_REQUEST',
  LOAD_SUCCESS = '@pages/LOAD_SUCCESS',
  LOAD_FAILURE = '@pages/LOAD_FAILURE'
}

type Category = 'messages' | 'news' | 'schedules' | 'taxes' | 'services'
type Type = 'post'

export interface Content {
  type: Type
  title: string
  properties: {
    categories: Category[]
  }
}

export interface Page {
  title: string
  icon: string
  url: string
  content: Content[]
}

export interface Post {
  title: string
  category: Category
  content?: any
}

export interface PagesState {
  readonly data: Page[]
  readonly loading: boolean
  readonly error: boolean
}
