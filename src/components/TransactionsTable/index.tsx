import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('https://localhost:3000/api/transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Trabalho</td>
            <td>15/08/2021</td>
          </tr>
          <tr>
            <td>Conta de luz</td>
            <td className="withdraw">-R$150</td>
            <td>Casa</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Conta de água</td>
            <td className="withdraw">-R$80</td>
            <td>Casa</td>
            <td>25/08/2021</td>
          </tr>
          <tr>
            <td>Rodizio boi nobre</td>
            <td className="withdraw">-R$220</td>
            <td>Restaurante</td>
            <td>27/08/2021</td>
          </tr>
          <tr>
            <td>Parque aquático</td>
            <td className="withdraw">-R$100</td>
            <td>Lazer</td>
            <td>27/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}