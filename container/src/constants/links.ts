import { keys } from '../config/keys'

export const links = {
  home: '/',
  transactions: '/transactions',
  signIn: '/sign-in',
  signUp: '/sign-up',
  budgets: '/budgets',
  statistics: '/statistics',
  categories: '/categories',
  bills: '/bills',
}

export const apiSubRoutes = {
  transactions: 'records',
  budgets: 'budgets',
  categories: 'categories',
  bills: 'bills',
}

interface ApiLinks {
  google: string
  logOut: string
}

type ApiLinkEntry = string[]

const addApiLink = (
  apiLinks: Partial<ApiLinks>,
  [name, subpath]: ApiLinkEntry
): Partial<ApiLinks> => {
  const fullLink: string = `${keys.backendUrl}${subpath}`
  return {
    ...apiLinks,
    [name]: fullLink,
  }
}

const getApiLinks = (): ApiLinks => {
  const apiSubpaths: ApiLinks = {
    google: '/auth/google',
    logOut: '/auth/logout',
  }
  const entries: ApiLinkEntry[] = Object.entries(apiSubpaths)
  return entries.reduce(addApiLink, {}) as ApiLinks
}

export const apiLinks = getApiLinks()
