import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
		<section className="bg-gray-900 text-white flex items-center py-16 md:py-24">
			<div className="container h-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="max-w-md space-y-4 basis-2/3">
					<h1 className="fs-3xl md:fs-5xl font-bold">Generate AI-powered SRS with ease</h1>
					<p className="text-gray-300">
						Our AI-driven SRS generator takes the hassle out of creating software requirements specifications. Get
						started in minutes.
					</p>
					<Link
						className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
						href="#"
					>
						Get Started
					</Link>
				</div>
				<Image
					alt="Di je slika?"
					className="basis-1/3 rounded-lg shadow-lg w-fit h-auto"
					width={100}
					height={75}
					src="/hero-image.jpeg"
					style={{
						aspectRatio: "4/3",
						objectFit: "cover",
					}}
				/>
			</div>
		</section>
  )
}
