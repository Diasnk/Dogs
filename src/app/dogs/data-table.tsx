"use client"
import React from "react"
import DogSearch from "@/components/dog-search";


export default function DataDogs() {
  return (
    <div className="">
      {/* Search component */}
      <div className="flex justify-center w-full">
        <div className="mt-20 self-center w-2/3">
          <DogSearch />
        </div>
      </div>

      {/* Dogs part of the site */}
      {/* <div className="pt-8 flex flex-col gap-2">
        {dogs.map((dog: any) => (
          <div key={dog.id} className="border border-slate-300 mx-2 rounded-md w-1/3 self-center">
            <img src={dog.url} className="h-80 w-full"></img>

            {dog.breeds.map((breed: any) => {
              return (
                <div className="flex flex-col">
                  <h1 className="ml-1 font-semibold text-lg">{breed.name}</h1>
                  <p className="ml-1">Temperament: {breed.temperament}</p>
                  <p className="ml-1">ID: {breed.id}</p>
                  <Link href="./specialist">Contact Specialist</Link>
                </div>
              )
            })}

          </div>
        ))
        }
      </div> */}
    </div>
  );
}
