import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const [dataFetched, setDataFetched] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();

    const fetchData = async (controller) => {
      try {
        const signal = controller.signal;

        const response = await fetch(url, { signal });
        const data = await response.json();
        setDataFetched(data);

        setLoading(false);
      } catch (error) {
        if (error !== "ABORT") {
          console.log(error);
        }
      }
    };

    setTimeout(() => {
      fetchData(controller);
    }, 1000);

    return () => {
      controller.abort("ABORT");
    };
  }, [url]);

  return { dataFetched, loading, error };
};

export default useFetch;
