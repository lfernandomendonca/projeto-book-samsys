import axios from "axios";
import { useState } from "react";
import Livro from "../../Livro";

interface GetResponse {
  obj: {
    value: Livro[];
  };
}

interface GetHook {
  data: Livro[];
  setData: React.Dispatch<React.SetStateAction<Livro[]>>;
  getRequest: () => Promise<void>;
  changePage: (newPage: number) => void;
  itemsPerPage: (itemsPerPage: number) => void;
}

export default function Get(): GetHook {
  const [data, setData] = useState<Array<Livro>>([]);
  const [page, setPage] = useState<number>(1);
  const [content, setContent] = useState<number>(5);

  const getRequest = async () => {
    try {
      const response = await axios.get<GetResponse>(
        `https://localhost:7011/Livro/Paginado?page=${page}&perPage=${content}`
      );
      const dataArray : Livro[] = response.data.obj.value;

      if (Array.isArray(dataArray)) {
        setData(dataArray);
      } else {
        console.error("Não há array de livros.", dataArray);
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição.", error);
    }
  };

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const itemsPerPage = (itemsPerPage: number) => {
    setContent(itemsPerPage);
  };

  return { data, setData, getRequest, changePage, itemsPerPage };
}
