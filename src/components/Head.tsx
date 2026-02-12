import Image from 'next/image';

interface Props {
  id: string
  date: string
}

export const Head = ({ id, date }: Props) => {

  return (
    // <!-- HEADER -->
    <table align="center">
      <tbody>
        <tr>
          <td>
            <table className="hd-row-content">
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ padding: '15px 15px 5px' }}>
                            <div>
                              <img src="https://www.aster.cat/images/newsletter.jpg"
                                alt="imagen de aster" width={768} height={249} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center">
                      <tbody>
                        <tr>
                          <td>
                            <div className="hd-div-paragraph">
                              <h2 className="hd-p-paragraph">AsterPublicació {id}</h2>
                              <h3 className="hd-p-paragraph">{date}</h3>
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
        </tr>
      </tbody>
    </table>
    // * <!-- End of HEADER --> */
  )
}
