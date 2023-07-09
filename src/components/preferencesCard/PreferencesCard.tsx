import Link from 'next/link'

type PreferencesTypes ={
    title: string,
    gender: string,
    image: string,
}

type PreferencesCardTypes = {
    preferences : Array<PreferencesTypes>;
}

const PreferencesCard = ({ preferences }: PreferencesCardTypes) => {
	return (
		<>
			<div className="card h-full w-full justify-start overflow-auto border-2 border-gray-100 bg-base-100 drop-shadow-xl ">
				<div className="flex flex-col gap-y-8 p-8">
					<div className="flex flex-row justify-between">
						<h1 className="text-xl">Minhas Preferências</h1>
						<div className="flex w-2/12">
							<button className="btn w-[10vw] rounded-lg text-[0.8vw] normal-case">
								<Link href="/registro">Editar preferências</Link>
							</button>
						</div>
					</div>
					<div className="flex h-fit justify-center">
						<div className="flex h-fit w-[90%] flex-row flex-wrap justify-start gap-y-8 ">
							{preferences.map((value, index) => (
								<div key={index} className="mx-2 justify-start ">
									{/* trocar a linha abaixo pelo componente de preferencias */}
									<div className="card h-32 w-32 justify-start border-2 border-gray-100 bg-base-100 drop-shadow-xl"/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default PreferencesCard
