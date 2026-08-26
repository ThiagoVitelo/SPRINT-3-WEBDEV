import React, { useState } from 'react';
import CameraHeader from './CameraHeader';
import CameraBody from './CameraBody';
import CameraFooter from './CameraFooter';
import '../styles/CameraScreen.css';

// CameraScreen e o componente pai da tela de camera.
// Ele organiza a estrutura em tres filhos: Cabecalho (CameraHeader),
// Corpo (CameraBody) e Rodape (CameraFooter), passando dados e funcoes por props.
const CameraScreen = ({
  photo,
  activeMode,
  photoCount,
  onCapture,
  onChangePhoto,
  onStartIA
}) => {
  const [flashOn, setFlashOn] = useState(false);
  const [zoomAtivo, setZoomAtivo] = useState('1x');
  const [modoAtivo, setModoAtivo] = useState('Foto');
  const [aviso, setAviso] = useState(false);

  // Captura: mostra "Foto capturada" por 1,5s e avisa o App para somar no contador
  const capturar = () => {
    onCapture();
    setAviso(true);
    setTimeout(() => setAviso(false), 1500);
  };

  // Se um modo foi aceito, aplica o filtro CSS dele (simulacao visual)
  const filtro = activeMode ? activeMode.filtro : 'none';

  return (
    <div className="camera-screen">
      {/* CABECALHO */}
      <CameraHeader flashOn={flashOn} onToggleFlash={() => setFlashOn(!flashOn)} />

      {/* CORPO */}
      <CameraBody
        photo={photo}
        activeMode={activeMode}
        filtro={filtro}
        onStartIA={onStartIA}
      />

      {/* Aviso de foto capturada (fica sobre o corpo) */}
      {aviso && <div className="capture-toast">Foto capturada</div>}

      {/* RODAPE */}
      <CameraFooter
        photoCount={photoCount}
        photo={photo}
        zoomAtivo={zoomAtivo}
        onZoom={setZoomAtivo}
        modoAtivo={modoAtivo}
        onModo={setModoAtivo}
        onCapture={capturar}
        onChangePhoto={onChangePhoto}
      />
    </div>
  );
};

export default CameraScreen;
