import logo from '../../assets/cash.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logo} alt="my money" />
          <p>MyMoney</p>
        </div>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}