import { useState } from "react";

export const usePost = <T>(url: string) => {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestPost = async (body: T, method: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          `An error occurred while fetching the data: ${response.statusText}`
        );
      }

      const jsonData = await response.json();

      setData(jsonData);
      return jsonData;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, err, loading, requestPost };
};
