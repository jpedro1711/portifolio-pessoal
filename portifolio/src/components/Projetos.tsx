import React from 'react';
import Card from './Card';

const Projetos = () => {
  return (
    <div>
      <div className="bg-gray-800 flex items-start py-32 px-2">
        <div className="container mx-auto flex-col justify-center items-center">
          <h1 className="text-4xl text-white py-4" id="projetos">
            Projetos Pessoais
          </h1>
          <div className="flex flex-wrap mt-4">
            <Card
              title={'Jogo de xadrez'}
              imgSrc={
                'https://raw.githubusercontent.com/jpedro1711/chess-system-java/main/assets/interface.png'
              }
              text={
                'Esse é um projeto desenvolvido com o objetivo de fixar os conceitos de POO em um sistema de jogo de xadrez'
              }
              link={'https://github.com/jpedro1711/chess-system-java'}
              tecnologias={['Java']}
            />
            <Card
              title={'Web services com Spring Boot'}
              imgSrc={
                'https://raw.githubusercontent.com/jpedro1711/web-springboot/main/assets/Captura%20de%20tela%202023-06-07%20193758.png'
              }
              text={
                'Esse é um projeto desenvolvido com Java e Spring boot que simula uma API com as entidades Pedido, Cliente, Pagamento, etc.'
              }
              link={'https://github.com/jpedro1711/web-springboot'}
              tecnologias={[
                'Java',
                'Spring boot',
                'Banco de dados H2',
                'Maven',
              ]}
            />
            <Card
              title={'API de países com React'}
              imgSrc={
                'https://raw.githubusercontent.com/jpedro1711/react-countries/main/assets/tela_principal.png'
              }
              text={
                'É uma aplicação react que realiza o uso da API rest countries e exibe informações de países (população, moeda, bandeira, etc)'
              }
              link={'https://github.com/jpedro1711/react-countries'}
              tecnologias={['React', 'JavaScript', 'Axios']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
