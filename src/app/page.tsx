import { getItem } from '../services/getDynamics'
import { CallWeb } from '../components/CallWeb';
import { Head } from '../components/Head';
import { Main1 } from '../components/Main1';
import { Footer } from '../components/Footer';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {

  const { id, date, widthPhoto, news } = await getItem()
  return (
    <>
      <table align="center" width="800px">
        <tbody>
          <tr>
            <td>
              <CallWeb id={id} />
              <Head id={id} date={date} />
              <Main1 news={news} widthPhotoDefault={widthPhoto} />
              <Footer />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
