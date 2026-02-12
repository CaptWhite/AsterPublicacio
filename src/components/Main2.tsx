
import {Main3} from './Main3';
import type { News } from '../services/interfaces/newsletter.d.ts'
import { Fragment } from 'react';

export interface Props {
  news: News[]
  widthPhotoDefault: number
}
export const Main2 = ({news, widthPhotoDefault}: Props) => {
  return (
    <>
      {
        news.map ((_news: News) => {
          const {order, url, image, title, summary}  = _news 
          return (
            <Fragment key={_news.order}>
              <Main3 news={_news}  widthPhotoDefault={widthPhotoDefault}/>
            </Fragment>  
          )
        })  
      }
    </>
  )
}
