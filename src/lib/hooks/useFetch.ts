export const useFetch = <T, R>(query: string) => {
  const fetchData = async ( varialbles: T): Promise<any> => {
  
    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables: { ...varialbles },
      }),
    });

    return await response.json();
  };

  return { fetchData };
};
