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
            <table 
              background="https://lh3.googleusercontent.com/pw/AP1GczPuWxKc-M1M7NGWS1ajkVcYr0FBu3ozgfMDFbreuLiObTCXNmT7MgQNixAK8anFOgTT42d1Dp0uA7gaHgvqwRlggZJ3515CoVDDv8Iyp6UzHtjhzgYyMDWtDPhG-4f9pQkTYws6PyKtWKbFAf8Zrw-W=w1369-h339-s-no-gm">
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ padding: '15px 15px 5px' }}>
                            <div>
                              <img src="https://lh3.googleusercontent.com/pw/AP1GczOc1x0mb3jnVc61xBi4qaxDCFRgsSQnPB710YtupsFTMB_d17feykT08k4S6z9rkL2_9DSdFIN4T8Zw5ObhdtcBBBzqzhulBswESgxNIe0qprSOmRaYkwo0s1FaciTXvgmM6JQ2C23RmCzEaZ26Zkwe=w1115-h362-s-no-gm?authuser=2"
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
