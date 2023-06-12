import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <header>
      <body>
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button onClick={handleClick}>MODO ESCURO</button>
      
   

        <h1>Artigo cientigico</h1>
<div> <h2>Papel da tecnologia em meio a pandemia</h2>
<div>Estamos passando por um tempo difícil, onde sofremos com o vírus (COVID-19) que se deu início na província de Wuhan, e se espalhou por todo o planeta, assustando todos com a rapidez do contágio e taxa alta de mortalidade.

Devido a esta pandemia os profissionais da área da tecnologia, vem oferecendo soluções para o combate ao novo coronavírus. Alguns já conseguiram desenvolver um sistema com a capacidade de rastrear pessoas que foram diagnosticadas com o vírus (COVID-19), através de georreferenciamento, localizando exatamente onde estiveram e com quem mantiveram contato. Assim é possível testar pessoas em estágio contagioso.

Nos aeroportos foram instalados equipamentos com a capacidade de medir a temperatura corporal de indivíduos, permitindo identificar, em meio a uma grande quantidade de pessoas, quem está com febre e logo testa-la, evitando ao máximo a propagação do coronavírus.

A empresa canadense Blue Dot tem um sistema de IA (inteligência artificial), que agrupa informações de notícias, dados demográficos de vários países, dados globais de tráfego aéreo e comunicados de fontes oficiais. Logo em seguida essas informações passam por uma análise de especialistas em epidemiologia associados à empresa.

Assim, a tecnologia antecipa quando um país ou região pode ser afetado pelo surto de uma doença, e emite alertas para instituições governamentais e organismos oficiais de saúde evitando maior discriminação do vírus.</div>
</div>

        </div>
      </body>
    </header>
  )
}

export default App
