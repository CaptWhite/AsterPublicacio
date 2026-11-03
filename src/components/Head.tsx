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
              <img src="https://files.aster.org/Folder1/Newsletter.png"
                        alt="imagen de aster" width="100%"/>
            </div>
            <div className="hd-div-paragraph">
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
