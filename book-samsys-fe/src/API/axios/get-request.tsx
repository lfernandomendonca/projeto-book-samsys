import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Livro from '../../book Data/livro';

const useGetRequest = () => {
  const [data, setData] = useState<Array<Livro>>([]);

  const getRequest = async () => {
    try {
      const response = await axios.get('https://localhost:7011/livro');
      const dataArray: any[] = response.data.obj.value;

      if (Array.isArray(dataArray)) {
        setData(dataArray);
      } else {
        console.error('Não há array de livros.', dataArray);
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição.', error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []); // This ensures that the getRequest function is called when the component mounts

  return { data, getRequest };
};

export default useGetRequest;
