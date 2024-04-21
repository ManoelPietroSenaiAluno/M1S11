import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { InteresseItem } from "./components/InteresseItem";

function PointsDisplay({ pontos }) {
  return <h3>🌟- {pontos}</h3>;
}

function App() {
  const dateKey = new Date().toLocaleDateString(); // Usando apenas a data, sem o horário
  const [interesses, setInteresses] = useState([]);
  const [inputTexto, setInputTexto] = useState('');
  const [pontos, setPontos] = useState(350);

  function getInteresses() {
    const interessesStorage = localStorage.getItem(dateKey); 
    if(interessesStorage) {
      const interessesConvertido = JSON.parse(interessesStorage);
      setInteresses(interessesConvertido);
    }
  }

  function adicionarInteresse() {
    if (inputTexto.trim() === "") {
      alert("Por favor, insira uma tarefa.");
      return;
    }
  
    setInteresses(prevInteresses => {
      var novaListaInteresses = [...prevInteresses, inputTexto];
      localStorage.setItem(dateKey, JSON.stringify(novaListaInteresses));
      return novaListaInteresses;
    });
    setInputTexto('');
  }

  function limparLista() {
    setInteresses([]);
    localStorage.removeItem(dateKey);
  }

  function onProcrastinate(posicao) {
    let points = parseInt(localStorage.getItem("pontos")) || 0; // Obtendo pontos do armazenamento local
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    if (points >= 300) {
      const currentDayLS = localStorage.getItem(today.toLocaleDateString()); 
      const currentDayInterests = currentDayLS ? JSON.parse(currentDayLS) : [];
  
      const itemToMove = currentDayInterests[posicao];
  
      const novosInteresses = currentDayInterests.filter((item, index) => index !== posicao);
  
      localStorage.setItem(tomorrow.toLocaleDateString(), JSON.stringify([...novosInteresses, itemToMove]));
      
      setInteresses(novosInteresses);
  
      // Remova o item apenas depois de ter feito a transferência para o próximo dia
      localStorage.setItem(today.toLocaleDateString(), JSON.stringify(novosInteresses));
    } else {
      alert("Você não tem pontos suficientes.");
      return;
    }
  
    // Deduzir 300 pontos ao procrastinar
    points -= 300;
    localStorage.setItem("pontos", points);
    setPontos(points); // Atualize os pontos no estado
  }

  function removerInteresse(posicao) {
    setInteresses(prevInteresses => {
      const novosInteresses = prevInteresses.filter((item, index) => index !== posicao);
      const points = localStorage.getItem("pontos") || 0;
      const newPoints = parseInt(points) + 25;
      localStorage.setItem("pontos", newPoints);
      setPontos(newPoints); // Atualize os pontos usando o estado
      localStorage.setItem(new Date().toLocaleDateString(), JSON.stringify(novosInteresses));
      return novosInteresses;
    });
  }

  useEffect(() => {
    getInteresses();
  }, []);

  useEffect(() => {
    // Verifica o localStorage para os pontos
    const pontosStorage = localStorage.getItem("pontos");
    if (pontosStorage) {
      setPontos(parseInt(pontosStorage));
    }
  }, []);

  return (
    <>
      <main className="container">
        <header>
          <h1 className="title"><strong className="PRO">Pro</strong>-castinator</h1>
          <h4>By MPietro</h4>
          <PointsDisplay pontos={pontos} /> {/* Renderize o componente PointsDisplay */}
        </header>

        <div className="form">
          <Input 
            placeholder="Digite alguma tarefa" 
            value={inputTexto} 
            onChange={event => setInputTexto(event.target.value)} 
          />
          <Button onClick={adicionarInteresse}>Adicionar</Button>
        </div>

        <div className="list">
          <div>
            <strong>Lista:</strong>
            <button className="button-clear" onClick={limparLista}>Limpar lista</button>
          </div>
          <ul>
            {
              interesses.map((interesse, index) => (
                <InteresseItem 
                  key={index} 
                  title={interesse} 
                  onRemove={() => removerInteresse(index)} 
                  onProcrastinate={() => onProcrastinate(index)} // Adicione a função onProcrastinate aqui
                />
              ))
            }
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
