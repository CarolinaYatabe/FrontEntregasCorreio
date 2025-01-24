import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

interface FormData {
  origem: string;
  destino: string;
  peso: number;
  modalidade: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    origem: '',
    destino: '',
    peso: 0,
    modalidade: '',
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: name === 'peso' ? parseFloat(value) : value,
  //   }));
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const [frete, setFrete] = useState("");

  const calcularFrete = async () => {
    try {
      const response = await axios.get('https://localhost:7154/api/Frete/calcularFrete')
      setFrete(response.data)
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <form>
      <div>
        <label htmlFor="origem">CEP de Origem:</label>
        <input
          type="text"
          id="cepOrigem"
          name="cepOrigem"
          value={formData.origem}
          // onChange={handleChange}
          placeholder="XXXXXXXX"
          required
        />
      </div>

      <div>
        <label htmlFor="destino">CEP de Destino:</label>
        <input
          type="text"
          id="cepDestino"
          name="cepDestino"
          value={formData.destino}
          // onChange={handleChange}
          placeholder="XXXXXXXX"
          required
        />
      </div>

      <div>
        <label htmlFor="peso">Peso do Produto (kg):</label>
        <input className='input-number'
          type="number"
          id="psObjeto"
          name="psObjeto"
          value={formData.peso}
          // onChange={handleChange}
          min="0.1"
          step="0.1"
          required
        />
      </div>

      <div>
        <label htmlFor="modalidade">Modalidade:</label>
        <select
          id="servico"
          name="servico"
          value={formData.modalidade}
          // onChange={handleChange}
        >
          <option value="SEDEX">SEDEX</option>
          <option value="PAC">PAC</option>
        </select>
      </div>

      <button type="submit" onSubmit={handleSubmit}>Calcular Frete</button>
    </form>
  );
};

export default Form;

