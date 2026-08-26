import React, { useState, useEffect } from 'react';
import '../styles/AnalysisScreen.css';

const TEXTOS = [
  'Analisando cena...',
  'Detectando elementos...',
  'Avaliando iluminacao...',
  'Identificando contexto...',
  'Gerando sugestao...'
];

const AnalysisScreen = () => {
  const [texto, setTexto] = useState(TEXTOS[0]);

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      i = (i + 1) % TEXTOS.length;
      setTexto(TEXTOS[i]);
    }, 500);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="analysis-screen">
      <div className="analysis-box">
        <div className="analysis-robot">
          <span className="robot-head big">
            <span className="robot-eye" />
            <span className="robot-eye" />
          </span>
        </div>

        <h1>JOVI Smart Assist</h1>

        <div className="spinner" />

        <p className="analysis-text">{texto}</p>

        <div className="bar">
          <div className="bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default AnalysisScreen;
