import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    const { getByTestId, getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');
    userEvent.type(inputTask, 'Exercitar')
    userEvent.click(btnAdd);
    const btnRemove = getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove).toHaveTextContent('Remover');
    expect(btnRemove.disabled).toBe(true);
  });

  test('Testando a seleção de elemento', () => {
    const { getByLabelText, getByText, queryByText, getAllByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } })
    fireEvent.click(btnAdd);
    fireEvent.change(inputTask, { target: { value: 'Estudar' } })
    fireEvent.click(btnAdd);
    const selectTask = getByText('Exercitar');
    expect(selectTask).toBeInTheDocument();
    fireEvent.click(selectTask);
    const btnRemove = getAllByText('Remover')[0];
    expect(btnRemove.disabled).toBe(false);
    fireEvent.click(btnRemove);
    expect(btnRemove.disabled).toBe(true);
    expect(queryByText('Exercitar')).not.toBeInTheDocument();
  })
});