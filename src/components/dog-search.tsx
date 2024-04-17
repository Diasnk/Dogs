import React, { useState, useEffect } from "react";

interface BreedData {
  breeds: {
    name: string;
    temperament: string;
  }[];
  url: string;
}

const DogSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [breedsData, setBreedsData] = useState<BreedData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch dog breed data based on search term
  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?q=${searchTerm}&has_breeds=1&limit=3&api_key=live_cePBlx60AA2COc77LfA75pSPy4g28yjeF2n9vIq2xMNRHIoR7TwXQ8oX0oeIW8o7");
        const data: BreedData[] = await response.json();

        if (data.length === 0) {
          setError("No breed found for that search term");
        } else {
          setBreedsData(data);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Dog Breed Search</h1>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Enter dog breed" />
      <br />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {breedsData && breedsData.map(breedData => (
        <div>
          <h2>{breedData.breeds[0].name}</h2>
          <img src={breedData.url} alt={`${breedData.breeds[0].name} dog`} />
          <p>{breedData.breeds[0].temperament}</p>
        </div>
      ))}
    </div>
  );
};

export default DogSearch;
