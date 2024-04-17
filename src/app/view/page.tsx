import Link from "next/link"


export default async function View(){

    async function viewDogs(){
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=25&api_key=live_cePBlx60AA2COc77LfA75pSPy4g28yjeF2n9vIq2xMNRHIoR7TwXQ8oX0oeIW8o7&has_breeds=1')
        const data = response.json()
        return data
    }

    const dogs = await viewDogs()
    return(
        <div className="flex flex-col gap-2 pt-20">
            {dogs.map((dog: any) => (
            <div key={dog.id} className="border border-slate-300 mx-2 rounded-md w-1/3 self-center">
                <img src={dog.url} className="h-80 w-full"></img>

                {dog.breeds.map((breed: any) => {
                return (
                    <div className="flex flex-col">
                    <h1 className="ml-1.5 font-semibold text-lg">{breed.name}</h1>
                    <p className="ml-1.5">Temperament: {breed.temperament}</p>
                    <p className="ml-1.5">ID: {breed.id}</p>
                    <Link className="font-semibold border w-fit m-2 p-1 rounded-md text-white bg-slate-300 hover:bg-slate-500" href="./specialist">Contact Specialist</Link>
                    </div>
                )
                })}

            </div>
            ))
            }
      </div>
    )
}