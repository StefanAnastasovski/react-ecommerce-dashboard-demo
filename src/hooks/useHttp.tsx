import { useState, useCallback } from "react";

import { fetchData } from "../lib/fetchData";

interface ErrorType {
  message?: string;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any, transformData: any) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchData(requestConfig);

        const { data } = response;

        if (data.status !== "ok") {
          throw new Error("Something went wrong!");
        }

        const transformedData = transformData(data) || data;
        applyData(transformedData);
      } catch (error: any) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
