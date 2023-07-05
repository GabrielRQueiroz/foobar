import Image from 'next/image'

const LandingPage = () => {
	return (
		<>
			<div className="absolute left-0 top-0 h-full w-full">
				<Image fill src="/background-LandingPage.jpg" alt="background" />
			</div>
			<div className="card m-auto flex h-5/6 w-11/12 flex-row border-8 bg-base-100 text-base-content ">
				<div className="flex w-7/12 flex-col justify-between border-8 py-8 pl-14">
					<div className="flex flex-col justify-start gap-y-5">
						<Image src="/Rematch-logo.webp" width={160} height={100} alt="Subaru Login" />
						<h1 className="w-8/12 font-sans text-7xl font-semibold">Ache sua história</h1>
						<p className="w-10/12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum nulla egestas lacus iaculis,
							commodo tempor enim posuere. Aliquam nec ante varius, pulvinar ipsum at, faucibus justo.
						</p>
						<div className="flex w-10/12 flex-row items-center gap-10">
							<button className="btn w-40 rounded-full text-lg normal-case">Cadastre-se</button>
							<div className="w-auto">
								<Image src="/icones.png" width={120} height={0} alt="icons" />
							</div>
							<p className="font-semibold">+ de 1 milhão de séries, livros e filmes onde e quando você quiser!</p>
						</div>
					</div>
					<div className="flex flex-col justify-start gap-y-8">
						<p className="w-11/12">Métodos de Programação - 01/2023</p>
					</div>
				</div>
				<div className="flex w-5/12 rounded-lg p-8">
					<div className="relative h-full w-full">
						<Image className="object-cover" fill src="/Emilia-LandingPage.png" alt="Emilia Landing" />
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage;
