import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // entrada, rodando, fim
  const [estado, setEstado] = useState("ENTRADA");
  //Palpites da maquina de 0 a 300
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <p>
          Pense em um número entre {min} e {max} que vamos tentar advinhar!
        </p>
        <button onClick={iniciarJogo}>Jogar Agora!</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>Fim de Jogo!</p>
        <p>
          Acertei o número {palpite} com {numPalpites} palpite(s)
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hmm..</h1>
      <p> o seu número é: {palpite} ???</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
      <p>Lucas Fontes</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
