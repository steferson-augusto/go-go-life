import { action } from 'typesafe-actions'
import { PagesTypes, Page } from './types'

export const loadRequest = () => action(PagesTypes.LOAD_REQUEST)
export const loadSuccess = (data: Page[]) => action(PagesTypes.LOAD_SUCCESS, data)
export const loadFailure = () => action(PagesTypes.LOAD_FAILURE)
