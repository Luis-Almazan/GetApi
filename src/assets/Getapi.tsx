// src/components/Estudiantes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Estudiantes.css'; // Importar el archivo CSS
import Boton from './Button'

const Estudiantes = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEstudiante, setSelectedEstudiante] = useState(null);

  useEffect(() => {
    axios.get('/api/estudiantes')
      .then(response => {
        setData(response.data.Alumnos);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);

  
  const handleSearch = () => {
    const estudiante = data.find(est => est.Carnet.includes(searchTerm));
    setSelectedEstudiante(estudiante);
  };


  const handleClear = () => {
    setSearchTerm('');
    setSelectedEstudiante(null);
  };




  return (
    <div className="form-container">
      <h1>Consulta de alumnos</h1>
      <div className="form-group">
        <label>Carnet:</label>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Nombres:</label>
        <input 
          type="text" 
          value={selectedEstudiante ? selectedEstudiante.Estudiante : ''} 
          disabled 
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico:</label>
        <input 
          type="text" 
          value={selectedEstudiante ? selectedEstudiante.Email : ''} 
          disabled 
        />
      </div>
      <div className="form-group">
        <label>Sección:</label>
        <input 
          type="text" 
          value={selectedEstudiante ? selectedEstudiante.Seccion : ''} 
          disabled 
        />
      </div>
      <div className="button-group">
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear}>Limpiar</button>
        <button onClick={() => window.location.reload()}>Cancelar</button>
      </div>
    </div>
  );
};

export default Estudiantes;
