import React from 'react';
import '../styles/SuggestionScreen.css';

const SuggestionScreen = ({ modo, onAccept, onReject }) => {
  return (
    <div className="suggestion-screen">
      <div className="suggestion-box">
        <span className="tag">Sugestao da IA</span>
        <p className="sub">Analisamos a cena e recomendamos:</p>

        <div className="mode-card">
          <h3>{modo.nome}</h3>
          <p>{modo.desc}</p>
        </div>

        <p className="pergunta">Deseja ativar este modo?</p>

        <div className="botoes">
          <button className="btn-aceitar" onClick={onAccept}>Aceitar</button>
          <button className="btn-recusar" onClick={onReject}>Recusar</button>
        </div>

        <small>Voce decide: a IA apenas sugere, quem ativa e voce.</small>
      </div>
    </div>
  );
};

export default SuggestionScreen;
