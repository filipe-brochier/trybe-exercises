import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="flex justify-evenly py-8">
        { conteudos.map((item) => { 
            return (
              <div key={item.conteudo} className="py-4 border-dashed p-4 border-4 rounded">
                <h4 className="text-sm text-center">{`${item.conteudo}`}</h4>
                <p className="text-sm pt-2">{`Status: ${item.status}`}</p>
                <p className="text-sm pt-2">{`Bloco: ${item.bloco}`}</p>
              </div>
            )   
        })}  
      </div>
    )
  }
}

export default Content;

