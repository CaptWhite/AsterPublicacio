interface Props {
  id: string
  date: string
}

export const Head = ({ id, date }: Props) => {

  return (
    // <!-- HEADER -->
    <table align="center" width="100%">
      <tbody>
        <tr>
          <td>
            <div>
              <img src="https://lh3.googleusercontent.com/pw/AP1GczMwZlJmMBz5_LR7TliFJmFu0UUh6kspLROOuiuabat0d9-64xrmRSbTzNn9KTClqdBG26tfqmN4MWsBIYO4KGyzUk6Byt2-0w-4D4YJe_KeYk3SsTJ2e9aSN-hSERKQ6I1i14xTt3kmxw7WBnFpWMWE=w782-h336-s-no-gm?authuser=1"
                        alt="imagen de aster" width="100%"/>
            </div>
            <div className="hd-div-paragraph" style={{ marginTop:'-65px', background: 'rgb(243, 213, 172)', paddingTop: '5px', paddingBottom: '2px' }}>
              <h2 className="hd-p-paragraph">AsterPublicació {id}</h2>
              <h3 className="hd-p-paragraph">{date}</h3>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    // * <!-- End of HEADER --> */
  )
}
