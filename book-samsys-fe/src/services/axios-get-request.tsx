import axios from "axios";
import { useState } from "react";
import Livro from "../book Data";

function useGetRequest() {
  const [data, setData] = useState<Array<Livro>>([]);
  const [updateData, setUpdateData] = useState(true)
  const getRequest = async () => {
    try {
      const response = await axios.get("https://localhost:7011/livro");
      const dataArray: any[] = response.data.obj.value;

      if (Array.isArray(dataArray)) {
        setData(dataArray);
      } else {
        console.error("Não há array de livros.", dataArray);
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição.", error);
    }
  };

  return { data, updateData, setUpdateData, getRequest };
}
export default useGetRequest;
