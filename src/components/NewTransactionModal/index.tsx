import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setTransactionType('deposit')}}
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox
            type="button"
            onClick={() => {setTransactionType('withdraw')}}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" type="text" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}