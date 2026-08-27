# JOVI Smart Camera

Aplicacao em React que simula a interface de uma camera de celular inteligente.
O usuario pode tirar fotos normalmente e, quando quiser, pedir para a IA analisar
a cena e sugerir um modo de camera mais adequado. A IA apenas sugere; quem decide
ativar o modo e o usuario.

Este projeto faz parte do Challenge JOVI (migracao do prototipo para React - Sprint 3).

## Tecnologias utilizadas

- React 18 (componentes funcionais com Hooks: useState e useEffect)
- Vite 4 (ferramenta de build e servidor de desenvolvimento)
- JavaScript (ES6+)
- CSS3 (estilizacao e animacoes)
- localStorage (armazenamento de dados no navegador)

## Como instalar as dependencias

E necessario ter o Node.js instalado (versao 16 ou superior).

Dentro da pasta do projeto, rode:

```bash
npm install
```

## Como executar o projeto

Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

O terminal vai mostrar um endereco local.
Abra esse endereco no navegador para usar a aplicacao.

Para gerar a versao de producao:

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Usuarios e senhas para teste

Nao ha autenticacao neste projeto. A aplicacao abre direto na tela da camera,
sem necessidade de login. (Uma camera nao precisa de senha para ser usada.)

## Como usar a aplicacao

1. Ao abrir, aparece a tela da camera com uma foto de exemplo.
2. Botao branco central: tira a foto. Aparece o aviso "Foto capturada" e o
   contador de fotos aumenta (esse contador fica salvo no navegador).
3. Botao azul com o robozinho (canto inferior direito da parte principal da tela): pede para a IA
   analisar a cena. Aparece "Analisando cena...", depois a IA sugere um modo.
4. Na tela de sugestao voce pode Aceitar ou Recusar:
   - Aceitar: o modo é ativado (aparece um selo indicando o modo ativo e um
     leve ajuste visual na imagem) e voce volta para a camera.
   - Recusar: volta para a camera sem ativar nada.
5. Os botões "Trocar foto" (miniatura da galeria e botao de virar camera) trocam
   a foto de exemplo, permitindo testar diferentes cenarios (comida, documento,
   pessoa, noite, paisagem).

Os dois botoes (tirar foto e IA) sao independentes: a pessoa pode simplesmente
tirar a foto no modo normal, ou usar a IA para obter uma sugestao de modo antes.

## Estrutura de componentes (Cabecalho, Corpo e Footer)

A tela da camera segue a estrutura pedida de Cabecalho, Corpo e Footer, montada
com componentes funcionais e comunicacao de pai para filho por meio de props:

```
App  (componente pai - controla o fluxo entre telas e os dados)
 |
 +-- CameraScreen  (organiza a tela da camera)
 |    |
 |    +-- CameraHeader  (CABECALHO: flash, proporcao 4:3, configuracoes)
 |    +-- CameraBody    (CORPO: visor com a foto, selo do app e botao da IA)
 |    +-- CameraFooter  (FOOTER/RODAPE: contador, zoom, modos e botao de tirar foto)
 |
 +-- AnalysisScreen    (tela de "Analisando cena...")
 +-- SuggestionScreen  (tela de sugestao com Aceitar / Recusar)
```

O componente App e o pai: ele guarda o estado principal (tela atual, foto atual,
modo ativo e contador de fotos) e envia esses dados e as funcoes para os filhos.

## localStorage (armazenamento de dados)

A aplicacao guarda no localStorage a quantidade de fotos ja tiradas. Cada vez que
o usuario aperta o botao de tirar foto, o contador aumenta e o novo valor e salvo.
Ao fechar e reabrir a pagina, o numero continua o mesmo, provando a persistencia.

Trecho de codigo (em `src/App.jsx`):

```javascript
// Ao iniciar, le o contador salvo
useEffect(() => {
  const salvo = localStorage.getItem('jovi_fotos_tiradas');
  if (salvo !== null) {
    setPhotoCount(Number(salvo));
  }
}, []);

// Ao tirar uma foto, soma 1 e salva
const novoTotal = photoCount + 1;
setPhotoCount(novoTotal);
localStorage.setItem('jovi_fotos_tiradas', String(novoTotal));
```

## Operacoes Math

As operacoes matematicas sao usadas para sortear a foto de exemplo ao trocar de
foto (em `src/App.jsx`):

```javascript
const chaves = Object.keys(PHOTOS);
const sorteada = chaves[Math.floor(Math.random() * chaves.length)];
```

- `Math.random()` gera um numero aleatorio entre 0 e 1.
- `Math.floor()` arredonda para baixo, transformando esse numero em um indice
  valido da lista de fotos.

## Uso de IA no projeto

A IA foi utilizada de duas formas neste projeto:

1. Como ferramenta de apoio ao desenvolvimento: usamos um assistente de IA para
   auxiliar na migracao do prototipo para React, em como os componentes seriam organizados,
   na escrita de partes do codigo e ajudando a fazer o deploy no vercel. Todas as decisoes de produto e a
   revisao do resultado foram feitas pela equipe.

2. Como conceito central do produto: o JOVI Smart Camera representa uma camera que
   usa IA para analisar a cena e sugerir o modo de captura mais adequado. Nesta
   entrega, essa analise e uma simulacao: ao apertar o botao da IA, a aplicacao
   mostra uma animacao de "analise" e entao sugere um modo, aplicando um leve
   ajuste visual (filtro CSS) apenas para ilustrar o efeito. Nao ha processamento
   real de imagem nem chamada a um modelo de IA nesta versao..

## Link do repositorio (GitHub)

(adicionar o link do repositorio aqui)

## Link do Deploy na Vercel

https://sprint-3-webdev-debug-team.vercel.app

## Observacoes

- As fotos de exemplo sao carregadas a partir de URLs publicas, entao e
  necessario estar conectado a internet para que as imagens aparecam.
