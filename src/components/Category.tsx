
interface Props {
  category: string
}

export const Category = ({category}: Props) => {
  return (
       
    <table align="center" width="100%">
          <tbody>
            <tr>
              <td>
                <table className="row-content mn-row-content-headline" align="center" width="800">
                  <tbody>
                    <tr>
                      <td>
                        <table width="100%" >
                        <tbody>
                          <tr>
                            <td>
                              <h1 className="mn-main-headline">
                                <span>{category}</span>
                              </h1>
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
  )
}


 