import React from 'react';

// CABECALHO da camera: flash, proporcao 4:3 e configuracoes.
// Recebe do componente pai (CameraScreen) o estado do flash e a funcao para liga-lo/desliga-lo.
const CameraHeader = ({ flashOn, onToggleFlash }) => {
  return (
    <header className="top-bar">
      <button
        className={`top-btn flash ${flashOn ? 'flash-on' : ''}`}
        onClick={onToggleFlash}
        title="Flash"
      >
        <span className="flash-symbol">A</span>
      </button>

      <div className="top-center">
        <button className="ratio-btn">4:3</button>
        <button className="chevron-btn">v</button>
      </div>

      <button className="top-btn settings" title="Configuracoes">
        =
      </button>
    </header>
  );
};

export default CameraHeader;
