import React, { useState, useEffect } from "react";
import axios from "axios";
import bookDataType from "../API/livro-response";

interface apiRequestHook {
  data: bookDataType[];
}



const useApiRequest = (): apiRequestHook => {
  const baseUrl = "https://localhost:7011/Livro";
  const [data, dataSet] = useState<bookDataType[]>([]);

  const getRequest = async () => {
    try {
      const response = await axios.get<bookDataType[]>(baseUrl, { withCredentials: true });
      dataSet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return { data };
};

export default useApiRequest;
