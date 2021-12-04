import { useRouter } from 'next/router'

const getIfShouldPreventDefault = (path: string, href: string): boolean => {
  const sectionLinkMatch = href.match(/^\/#/)
  const isHomepage: boolean = path === '/'
  return !sectionLinkMatch || !isHomepage
}

export const useNavigatorToLink = (href: string) => {
  const router = useRouter()
  return (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.persist()
    const shouldPreventDefault: boolean = getIfShouldPreventDefault(
      router.pathname,
      href
    )
    if (shouldPreventDefault) event.preventDefault()
    router.push(href)
  }
}
