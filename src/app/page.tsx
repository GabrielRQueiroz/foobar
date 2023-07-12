import Image from 'next/image'
import Link from 'next/link'

const LandingPage = () => {
	return (
		<>
			<div data-cy="LP" className="absolute left-0 top-0 h-full w-full">
				<Image fill src="/background-LandingPage.jpg" alt="background" />
				<div className="left-0 top-0 mt-auto flex h-full w-full">
					<div className="card m-auto flex h-5/6 w-11/12 flex-row rounded-3xl bg-base-100 text-base-content">
						<div className="flex w-7/12 flex-col justify-between py-8 pl-14 ">
							<div data-cy="Image-Primary" className="flex flex-col justify-start gap-y-8">
								<Image
									priority
									className="hidden [[data-theme=fantasy]_&]:block"
									src="/Rematch-logo.webp"
									width={160}
									height={100}
									alt="Logo Form"
								/>
								<Image
									priority
									className="hidden [[data-theme=dark]_&]:block "
									src="/Rematch-lg-white.webp"
									width={160}
									height={100}
									alt="Logo Form"
								/>
								<h1 className="w-8/12 font-sans text-7xl font-semibold">Ache sua história</h1>
								<p data-cy="Text-Primary" className="w-10/12">
									Explore novas e emocionantes experiências cinematográficas, televisivas e literárias com nosso site de
									match especializado em filmes, séries e livros. Descubra histórias que se encaixam perfeitamente ao
									seu gosto e mergulhe em um universo de entretenimento personalizado.
								</p>
								<div data-cy="button" className="flex w-10/12 flex-row items-center gap-10">
									<button className="btn w-40 rounded-full text-lg normal-case">
										<Link href="/registro">Cadastre-se</Link>
									</button>
									<div className="w-auto">
										<Image
											className="hidden [[data-theme=fantasy]_&]:block"
											src="/icones.png"
											width={120}
											height={0}
											alt="icons"
										/>
										<Image
											className="hidden [[data-theme=dark]_&]:block"
											src="/iconesbranco.png"
											width={120}
											height={0}
											alt="icons"
										/>
									</div>
									<p data-cy="Text-Secondary" className="font-semibold">+ de 1 milhão de séries, livros e filmes onde e quando você quiser!</p>
								</div>
							</div>
							<div className="flex justify-start">
								<p data-cy="Text-Secondary-2" className="w-11/12">Métodos de Programação - 01/2023</p>
							</div>
						</div>
						<div data-cy="Emilia-LP" className="flex w-5/12 pl-0">
							<div className="relative h-full w-full">
								<Image className="rounded-2xl object-cover" fill src="/Emilia-LandingPage.jpg" alt="Emilia Landing" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
