

import type { News } from '../services/interfaces/newsletter'
// import Main2 from './Main2.astro';
import { newsSortedGrouped } from '../services/getnewsletters'
import { Category } from './Category'
import { Main2 } from './Main2'

interface Props {
  news: News[]
  widthPhotoDefault: number
}

export const Main1 = ({news, widthPhotoDefault}: Props) => {

  const newsGruopedBy = newsSortedGrouped(news)

  return (
    Object.keys(newsGruopedBy).map((category) => {
      return (
        <>   
          <Category category={category} />
          <Main2 news={newsGruopedBy[category]} widthPhotoDefault={widthPhotoDefault} />
        </>
      )
    })
  )
}


 