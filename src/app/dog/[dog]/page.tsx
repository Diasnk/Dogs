export default function DogProfile({params}: any) {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen pt-20 py-2">
				<h1>Profile</h1>
                <hr/>
                <p className="text-4xl">Profile page {params.id}</p>
                
			</div>
		</>
	)
}