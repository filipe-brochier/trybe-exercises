import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  beforeEach(() => {
    const digimon = {
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    };
    render(<Digimon digimon={ digimon } />)
  });

  it('should have a heading', () => {
    const heading = screen.getByRole('heading', { name: 'Agumon', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('should have level info', () => {
    const level = screen.getByText(/level: rookie/i)
    expect(level).toBeInTheDocument();
  });
  it('should have an image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/agumon.jpg');
  });
});
