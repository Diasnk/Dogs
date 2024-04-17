'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


export default async function Home() {
    const router = useRouter()
    return(
        <div>
            <div className="w-full flex h-screen justify-between pr-12 pt-240">
                <div className="pt-20">
                    <h1 className='pt-32 pl-10 font-bold text-4xl text-slate-500'>Future AI Chat Bot <br></br> Is a Flexible Solution </h1>
                        
                    <h1 className='pl-10 font-bold text-4xl text-slate-700'>For your dog's problems</h1>
                    <h1 className="pl-10 pt-4 font-semibold text-2xl text-slate-700">And view posts about them)</h1>
                    <div className="flex flex-col ">
                        <div>
                            <Button 
                                className='bg-[#6C63FF] text-white hover:bg-[#8881F1] w-24 ml-10 mt-10 mb-4 font-semibold' 
                                variant="secondary" 
                                onClick={() => {
                                    router.push("./specialist")
                            }}>Open Chat </Button>
                            <Button 
                                className='bg-[#6C63FF] text-white hover:bg-[#8881F1] w-24 ml-6 font-semibold' 
                                variant="secondary" 
                                onClick={() => {
                                    router.push("./dogs")
                            }}>Search</Button>
                        </div>
                        <Button 
                            className='bg-[#6C63FF] text-white hover:bg-[#8881F1] w-32 ml-10 mt-2 font-semibold' 
                            variant="secondary" 
                            onClick={() => {
                                router.push("./view")
                        }}>View all dogs</Button>
                    </div>
                </div>
                <img className="w-1/2" src="good_dog.svg"/>
            </div>

            
        </div>
        
    )
}
