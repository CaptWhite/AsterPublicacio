import { cache } from 'react'
import { getNewslettersLast } from './getnewsletters'
 
export const getItem = cache(async () => {
  const item = await await getNewslettersLast()
  return item
})