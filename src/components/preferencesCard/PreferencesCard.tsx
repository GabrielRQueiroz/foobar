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
			<div className="card w-full card-compact card-bordered bg-base-100 text-base-content">
				<div className="card-body">
					<div className="flex flex-row flex-wrap gap-4 justify-between mb-4">
						<h1 className="card-title lg:mx-0 mx-auto">Minhas Preferências</h1>
						<button className="btn lg:mx-0 mx-auto normal-case btn-neutral">
							<Link href="/registro">Editar preferências</Link>
						</button>
					</div>
					<div className="flex h-fit">
						<div className="flex justify-center w-full flex-row flex-wrap gap-y-8 gap-x-4 ">
							{preferences.map((value, index) => (
								<div key={`${value}-${index}`} className="card aspect-square flex-1 justify-start border-2 border-gray-100 bg-base-100 shadow basis-1/3 sm:basis-1/4 md:basis-1/6" />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default PreferencesCard
