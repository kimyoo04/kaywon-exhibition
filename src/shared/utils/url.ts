/**
 * URL 경로와 쿼리 문자열을 결합하여 URN을 생성합니다.
 * 경로의 중복 슬래시를 제거하고 끝의 슬래시도 제거합니다.
 *
 * @param {string} path - URL 경로
 * @param {string} query - 쿼리 문자열
 * @returns {string} 생성된 URN
 */
export function setUrn(path: string, query: string): string {
  const sanitized = path.replace(/\/+/g, '/').replace(/\/+$/, '')

  return [sanitized, query].filter(Boolean).join('?')
}

/**
 * URLSearchParams 객체를 일반 객체로 변환합니다.
 *
 * @param {URLSearchParams} searchParams - 변환할 URLSearchParams 객체
 * @returns {Record<string, string>} 쿼리 파라미터 객체
 */
export function getQueryString(searchParams: URLSearchParams): Record<string, string> {
  return Object.fromEntries(searchParams?.entries())
}

/**
 * 객체를 URL 쿼리 문자열로 변환합니다.
 * null이나 undefined 값을 가진 속성은 제외됩니다.
 *
 * @param {T} object - 쿼리 문자열로 변환할 객체
 * @returns {string} 생성된 쿼리 문자열
 * @template T
 */
export function setQueryString<T extends Record<string, any>>(object: T): string {
  const params = Object.keys(object).reduce((acc: T, key: string) => {
    if (object[key] === undefined || object[key] === null) {
      return acc
    }
    acc[key as keyof T] = object[key]
    return acc
  }, {} as T)

  return new URLSearchParams(params).toString()
}
