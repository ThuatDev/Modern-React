import { useState, useEffect } from "react";

interface FetchProps {
  url: any;
}

const useFetch = ({ url }: FetchProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
