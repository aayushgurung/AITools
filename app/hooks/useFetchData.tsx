import { useState } from "react";

const useFetchData = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string | any>("");
  const fetchData = async (
    apiUrl: string,
    body: Record<string, any>,
    contentType: string
  ) => {
    try {
      console.log('use fetch ')
      setIsLoading(true);
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": contentType,
        },
        body: JSON.stringify({
          ...body,
        }),
      });
      console.log('use fetch ')
      if (res.ok) {
        const output = await res.json();
        setIsLoading(false);
        setOutput(output.message);
      } else {
        const errorData = await res.json();
        setIsLoading(false);
        console.log('USE FETCH ERROR',errorData.message)
        throw new Error(errorData.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('THIS IS ERROR',error.message)
        throw error;
      }
    }
  };
  return { fetchData, isloading, output };
};

export default useFetchData;
