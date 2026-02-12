
import {Main3Left}  from './Main3Left';
import {Main3Right} from './Main3Right';
import type { News } from '../services/interfaces/newsletter.d'
import { calculeClasesReverse } from '../services/getnewsletters'

interface Props {
  news: News;
  widthPhotoDefault: number
}

export const Main3 = ({news, widthPhotoDefault}: Props) => {
  if (!news.widthPhoto && news.widthPhoto>0) news['widthPhoto'] = widthPhotoDefault
  const reverse = calculeClasesReverse(news) 

  return (
  
    <table align="center" width="100%">
      <tbody>
        <tr>
          <td>
            <table className="row-content stack mn-row-content-article" align="center" width="800" >
              <tbody>
                <tr className={reverse.rever}>
                    { reverse.rever == 'reverse'
                      ? <><Main3Left news={news} reverse={reverse} widthPhoto={news.widthPhoto} /><Main3Right news={news} reverse={reverse} widthPhoto={news.widthPhoto} /></>
                      : <><Main3Right news={news} reverse={reverse} widthPhoto={100 - news.widthPhoto} /><Main3Left news={news} reverse={reverse} widthPhoto={100 - news.widthPhoto} /></>
                    }              
                </tr>
              </tbody>
            </table>
          </td> 
        </tr> 
      </tbody>
    </table>
  )
}



