
import Link from 'next/link';
import type { News, Reverse } from '../services/interfaces/newsletter'
//import Image from 'next/image';


interface Props {
  news: News
  reverse: Reverse
  widthPhoto: number
}

export const Main3Left = ({news, reverse, widthPhoto}: Props) => {
  let {order,category, url, image, title, summary} = news
  const isOneDrive = false   //url.includes('live.com')
  const isDrive = false      //url.includes('drive.google.com/file')

  if (isOneDrive) url = url.replace('?', '%3F' )

  return (
    <>
      <td className={reverse.first} width={ reverse.rever=='' ? (100-widthPhoto)+'%' : (widthPhoto)+'%'} style={ (widthPhoto==0 ) ? {display:'none'} : {}}> 
      <table width="100%">
        <tbody>
          <tr>
            <td width="60%">
              <table width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <div >
                        <div>
                          <Link target="_blank" href={ isOneDrive ? `/newsletter/photo.html?img=${url}` : `${url}`} rel="noreferrer noopener">
                            <img src={image} alt={title} width={266.666666666663}  className="mn-img-article-image"/>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>  
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </>
  )
}








