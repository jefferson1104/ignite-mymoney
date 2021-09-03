import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content =  styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      margin-right: 5px;
    }
    p {
      color: var(--shape);
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`

