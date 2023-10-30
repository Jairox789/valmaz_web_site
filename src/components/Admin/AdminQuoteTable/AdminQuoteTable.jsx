import "./AdminQuoteTable.css";

export const AdminQuoteTable = ({
  openModalDelete,
  handleQuoteInfoTemp,
  quoteInfo,
}) => {
  //LOGICA
  return (
    <table className="table_quote">
      <thead className="table-success table-striped">
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Correo electrónico</th>
          <th>Teléfono</th>
          <th>Servicio</th>
          <th>Fecha de cotización</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {quoteInfo.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.name}</td>
            <td>{quote.business}</td>
            <td>{quote.email}</td>
            <td>{quote.phone}</td>
            <td>{quote.service}</td>
            <td>{quote.date}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  openModalDelete();
                  handleQuoteInfoTemp({ id: quote.id, name: quote.name });
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}

        {/* <tr className="new">
          <td>Jairo</td>
          <td>Valmaz</td>
          <td>jairo.161.ortega@gmail.com</td>
          <td>8683900256</td>
          <td>Video con dron</td>
          <td>20/10/23</td>
          <td>
            <button className="btn btn-danger">Eliminar</button>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};
