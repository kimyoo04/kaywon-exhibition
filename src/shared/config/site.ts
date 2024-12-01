import { type LucideIconName } from '@/shared/lib/lucide-icon'

export interface SiteConfig {
  name: string
  title: string
  symbol: LucideIconName
  description: string
}

export const SITE_CONFIG: SiteConfig = {
  name: 'ky template',
  title: 'ky template',
  description: 'ky template',
  symbol: 'Activity',
}

/**
 * (private) 디렉토리에 추가된 파일을 라우팅하기 위한 경로
 */
export const PRIVATE_ROUTES = ['/projects']

const headerHeight = '60px'
export const HEADER_HEIGHT = `h-[${headerHeight}]`

export const HEADER_URLS = [
  {
    name: '게시글',
    url: '/posts',
  },
  {
    name: '프로젝트',
    url: '/projects',
  },
]

export const COMPANY_INFO = {
  name: 'ky template',
  ceo: '대표이사: ky',
  email: '이메일: ky@ky.com',
  address: '주소: 서울시 강남구 테헤란로',
  idNumber: '사업자등록번호: 111-11-11111',
}
