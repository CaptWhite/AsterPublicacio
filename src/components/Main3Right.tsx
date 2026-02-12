
import {Parrafo} from './Parrafo';
import type { News, Reverse } from '../services/interfaces/newsletter'

interface Props { 
  news: News
  reverse: Reverse
  widthPhoto: number
}


export const Main3Right = ({news, reverse, widthPhoto}: Props) => {
  const {order,category, url, image, title, summary} = news


  return (
    <>
      <td className={reverse.last} width={ reverse.rever=='' ?      (widthPhoto)+'%' :  100-widthPhoto+'%'  } style={(widthPhoto==100 )   ? {display:'none'} : {}}>
        <table width="100%">
          <tbody>  
            <tr>
              <td className="mn-pad-title-h1">
                <h1 className="mn-h1-article-title">
                  <span>
                    <a  href={url}
                      target="_blank" className="mn-anchor-article-title" rel="noopener">{title}
                    </a>
                  </span>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <table width="100%">
          <tbody>
            <tr>
              <td className="mn-pad-title-p">
                <div className="mn-div-title-p">
                  <span>
                    <Parrafo text={summary}/>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </>
  )
}