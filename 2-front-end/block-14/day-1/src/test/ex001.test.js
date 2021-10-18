import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testes do Exercício 1', () => {
  test('É necessário um botão para adicionar a tarefa', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('O botão precisa conter o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Adicionar');
  });
  test('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva', () => {
    render(<App />)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    
    userEvent.type(input, 'Ir ao mercado');
    userEvent.click(button);

    const listItem = screen.getByRole('listitem');
    
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent('Ir ao mercado');
  });
});