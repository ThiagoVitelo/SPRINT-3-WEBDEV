import React from 'react';

// CORPO da camera: o visor com a foto simulada, o selo do app,
// o selo de modo ativo (se houver) e o botao da IA no canto inferior direito.
const CameraBody = ({ photo, activeMode, filtro, onStartIA }) => {
  return (
    <div className="viewport">
      <img
        src={photo.url}
        alt={photo.nome}
        className="photo"
        style={{ filter: filtro }}
      />

      {/* Selo do app */}
      <div className="app-badge">JOVI Smart Assist</div>

      {/* Selo de modo ativo (aparece so quando o usuario aceita a sugestao) */}
      {activeMode && (
        <div className="mode-active-badge">{activeMode.nome} ativo</div>
      )}

      {/* Botao IA (canto inferior direito do visor) */}
      <button className="ia-button" onClick={onStartIA} title="Analisar com IA">
        <span className="robot-head">
          <span className="robot-eye" />
          <span className="robot-eye" />
        </span>
      </button>
    </div>
  );
};

export default CameraBody;
