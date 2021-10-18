import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

describe('Testes do Exercício 2', () => {
  test('Cada elemento de um array será uma tarefa, simule a adição de todas e depois verifique se eles estão aparecendo.', () => {
    const tasks = ['Estudar React', 'Estudar RTL', 'Estudar Redux'];
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    tasks.forEach((task, index) => {
        userEvent.type(input, task);
        userEvent.click(button);
      
        const listItem = screen.getAllByRole('listitem')[index];
      
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveTextContent(task);
    });
  });
  test('Teste apenas o componente Item, ao passar uma string ela precisa aparecer na tela.', () => {
    render(<Item content={'Tarefa que deve aparecer na tela'} />);
    
    const listItem = screen.getByText('Tarefa que deve aparecer na tela');
    expect(listItem).toBeInTheDocument();
  });
});