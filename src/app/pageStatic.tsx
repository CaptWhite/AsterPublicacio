import { getNewslettersLast,  } from '../services/getnewsletters'
import {CallWeb} from '../components/CallWeb';
import {Head} from '../components/Head';
import {Main1} from '../components/Main1';
import {Footer} from '../components/Footer';

export default async function HomePage() {

  const {id, date, widthPhoto, news } = await getNewslettersLast()
  return (
    <>    
      <CallWeb id={id} />
      <Head id={id} date={date}/>
      <Main1 news={news} widthPhotoDefault={widthPhoto}/>
      <Footer/>
    </>
);
}
