import React, { useState, useEffect } from 'react';
import CameraScreen from './components/CameraScreen';
import AnalysisScreen from './components/AnalysisScreen';
import SuggestionScreen from './components/SuggestionScreen';
import './App.css';

// Fotos pre-setadas. Cada uma tem um filtro CSS simples que simula o "modo".
// IMPORTANTE: o filtro e apenas visual (simulacao), nao processa a imagem de verdade.
const PHOTOS = {
  documento: {
    nome: 'Documento',
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=800&fit=crop',
    modo: { nome: 'Modo Estudo', desc: 'Ideal para lousas e documentos', filtro: 'contrast(1.3) brightness(1.05)' }
  },
  comida: {
    nome: 'Comida',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=800&fit=crop',
    modo: { nome: 'Modo Food', desc: 'Realca cores e detalhes de alimentos', filtro: 'saturate(1.5)' }
  },
  pessoa: {
    nome: 'Pessoa',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    modo: { nome: 'Modo Retrato', desc: 'Destaca a pessoa no primeiro plano', filtro: 'brightness(1.08) saturate(1.1)' }
  },
  noite: {
    nome: 'Noite',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=800&fit=crop',
    modo: { nome: 'Modo Noite', desc: 'Otimizado para ambientes escuros', filtro: 'brightness(1.35) contrast(1.15)' }
  },
  paisagem: {
    nome: 'Paisagem',
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=800&fit=crop',
    modo: { nome: 'Modo Foto', desc: 'Modo padrao para o dia a dia', filtro: 'none' }
  }
};

function App() {
  const [screen, setScreen] = useState('camera'); // camera | analysis | suggestion
  const [photoKey, setPhotoKey] = useState('documento');
  const [activeMode, setActiveMode] = useState(null); // modo aceito e ativo
  const [photoCount, setPhotoCount] = useState(0); // contador persistido no localStorage

  // Ao iniciar, le o contador salvo no localStorage
  useEffect(() => {
    const salvo = localStorage.getItem('jovi_fotos_tiradas');
    if (salvo !== null) {
      setPhotoCount(Number(salvo));
    }
  }, []);

  // Captura: soma 1 no contador e persiste. Independente da IA.
  const handleCapture = () => {
    const novoTotal = photoCount + 1;
    setPhotoCount(novoTotal);
    localStorage.setItem('jovi_fotos_tiradas', String(novoTotal));
  };

  // Troca de foto (usa Math.floor + Math.random). Reseta o modo ativo.
  const handleChangePhoto = () => {
    const chaves = Object.keys(PHOTOS);
    const sorteada = chaves[Math.floor(Math.random() * chaves.length)];
    setPhotoKey(sorteada);
    setActiveMode(null);
  };

  // Botao IA: dispara a analise manual
  const handleStartIA = () => {
    setScreen('analysis');
    setTimeout(() => {
      setScreen('suggestion');
    }, 2500);
  };

  // Aceita a sugestao: ativa o modo (aplica filtro) e volta pra camera
  const handleAccept = () => {
    setActiveMode(PHOTOS[photoKey].modo);
    setScreen('camera');
  };

  // Recusa: volta pra camera sem ativar nada
  const handleReject = () => {
    setScreen('camera');
  };

  const photo = PHOTOS[photoKey];

  return (
    <div className="app">
      {screen === 'camera' && (
        <CameraScreen
          photo={photo}
          activeMode={activeMode}
          photoCount={photoCount}
          onCapture={handleCapture}
          onChangePhoto={handleChangePhoto}
          onStartIA={handleStartIA}
        />
      )}

      {screen === 'analysis' && <AnalysisScreen />}

      {screen === 'suggestion' && (
        <SuggestionScreen
          modo={photo.modo}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
}

export default App;
