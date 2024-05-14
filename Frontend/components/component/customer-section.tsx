import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function CustomerSection() {
	const customers = [
		{
			id: 1,
			text: `The AI SRS beat some criminals. The AI SRS generator has been a game-changer for our team. The AI SRS beat some criminals. The AI SRS generator has been a game-changer for our team. It saves us so much time and ensures we never miss a requirement. Can't wait to beat some criminals.`,
			fullName: 'Bruce Wayne',
			credentials: 'BW',
			position: 'Product Manager',
			company: 'Gotham City d.o.o'
		},
		{
			id: 2,
			text: `The AI SRS generator has been a game-changer for our team. It saves us so much time and ensures we never miss a requirement. Can't wait to beat some criminals.`,
			fullName: 'Bruce Wayne',
			credentials: 'BW',
			position: 'Product Manager',
			company: 'Gotham City d.o.o'
		},
		{
			id: 3,
			text: `The AI SRS generator has been a game-changer for our team. It saves us so much time and ensures we never miss a requirement. Can't wait to beat some criminals.`,
			fullName: 'Bruce Wayne',
			credentials: 'BW',
			position: 'Product Manager',
			company: 'Gotham City d.o.o'
		},
		{
			id: 3,
			text: `The AI SRS generator has been a game-changer for our team. It saves us so much time and ensures we never miss a requirement. Can't wait to beat some criminals.`,
			fullName: 'Bruce Wayne',
			credentials: 'BW',
			position: 'Product Manager',
			company: 'Gotham City d.o.o'
		}
	]

  return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="fs-2xl md:fs-3xl font-bold mb-8">What Our Customers Say</h2>
				<Carousel className="w-full">
					<CarouselContent>
						{customers.map((customer) => (
							<CarouselItem key={customer.id} className="md:basis-1/2 lg:basis-1/3 flex">
								<div className="bg-white rounded-lg p-6 space-y-4 h-full overflow-hidden flex flex-col">
									<div className="flex items-center gap-4">
										<Avatar>
											<AvatarFallback>{customer.credentials}</AvatarFallback>
										</Avatar>
										<div>
											<h4 className="font-semibold">{customer.fullName}</h4>
											<p className="text-gray-500">{customer.position}, {customer.company}</p>
										</div>
									</div>
									<blockquote className="text-gray-700">
										&quot;{customer.text}&quot;
									</blockquote>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
  )
}
