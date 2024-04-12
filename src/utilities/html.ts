import { DOMParser } from '@dependencies'


export const getTextFromHTMLFragment = (html: string) => {
  const document = new DOMParser()
    .parseFromString(html, 'text/html')

  return document?.body?.textContent ?? ''
}