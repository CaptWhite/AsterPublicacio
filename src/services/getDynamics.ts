import { getNewslettersLast } from './getnewsletters'
 
export const getItem = async () => {
  const item = await getNewslettersLast()
  return item
}
