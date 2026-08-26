import React from 'react';

const ZOOMS = ['0,5x', '1x', '2x', '5x', '10x'];
const MODOS = ['Pro', 'Video', 'Foto', 'Retrato', 'Food'];

// RODAPE da camera: contador de fotos, zoom, modos e o botao de tirar foto (shutter).
// Recebe do pai os estados e as funcoes de captura e troca de foto.
const CameraFooter = ({
  photoCount,
  photo,
  zoomAtivo,
  onZoom,
  modoAtivo,
  onModo,
  onCapture,
  onChangePhoto
}) => {
  return (
    <footer className="bottom-area">
      {/* Contador de fotos tiradas (vem do localStorage) */}
      <div className="counter-row">
        <span className="contador">Fotos tiradas: {photoCount}</span>
      </div>

      {/* Zoom */}
      <div className="zoom-row">
        {ZOOMS.map((z) => (
          <button
            key={z}
            className={`zoom-btn ${zoomAtivo === z ? 'zoom-active' : ''}`}
            onClick={() => onZoom(z)}
          >
            {z}
          </button>
        ))}
      </div>

      {/* Modos */}
      <div className="modes-row">
        {MODOS.map((m) => (
          <button
            key={m}
            className={`mode-tab ${modoAtivo === m ? 'mode-active' : ''}`}
            onClick={() => onModo(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Linha do shutter */}
      <div className="shutter-row">
        <button className="gallery-thumb" onClick={onChangePhoto} title="Trocar foto">
          <img src={photo.url} alt="galeria" />
        </button>

        <button className="shutter" onClick={onCapture} title="Capturar foto">
          <span className="shutter-inner" />
        </button>

        <button className="flip-btn" onClick={onChangePhoto} title="Trocar foto">
          O
        </button>
      </div>
    </footer>
  );
};

export default CameraFooter;
