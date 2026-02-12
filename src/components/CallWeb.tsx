
interface Props {
  id: string
}

export const CallWeb = ({ id = '0' }: Props) => {
  const publicacio = `https://www.aster.cat/mm/file/AsterPublicacio/AsterPublicacio${id}.html`

  return (
    <table align="center" width="100%">
      <tbody>
        <tr>
          <td>
            <table align="center" width="800">
              <tbody>
                <tr>
                  <td align="center">
                    <p style={{ margin: '0' }}>
                      <span style={{ fontFamily: 'Arial,sans-serif', fontSize: '7pt', color: 'black' }}>
                        Si no pots veure correctament aquest correu, ves a la &nbsp;
                      </span>
                      <span style={{ fontFamily: 'Arial,sans-serif', fontSize: '7pt', color: 'rgb(17,136,230)' }}>
                        <a href={publicacio} style={{ color: 'rgb(17,136,230)' }}
                          target="_blank">
                          versió en línia
                        </a>
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}