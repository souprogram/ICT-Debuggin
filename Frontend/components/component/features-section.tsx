import AlignCenterHorizontalIcon from "../icons/align-center-horizontal"
import ClipboardListIcon from "../icons/clipboard-list"
import LightbulbIcon from "../icons/lightbulb"

export default function FeaturesSection() {
	const features = [
		{ id: 1,
			icon: <LightbulbIcon className="size-8 text-blue-500" />,
			title: 'AI-Powered Generation',
			text: "Our advanced AI algorithms generate comprehensive SRS documents tailored to your project's needs."
		},
		{ id: 2,
			icon: <AlignCenterHorizontalIcon className="size-8 text-blue-500" />,
			title: 'Customizable Templates',
			text: "Choose from a variety of pre-built templates or create your own custom SRS structure."
		},
		{ id: 2,
			icon: <ClipboardListIcon className="size-8 text-blue-500" />,
			title: 'Collaborative Workflow',
			text: "Invite team members to review, comment, and contribute to the SRS document in real-time."
		}
	]

  return (
		<section className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
				{features.map(feature => (
					<div key={feature.id} className="flex flex-col items-start gap-4">
						<LightbulbIcon className="size-8 text-blue-500" />
						<h3 className="fs-xl font-semibold">{feature.title}</h3>
						<p className="text-gray-600">{feature.text}</p>
					</div>
				))}
			</div>
		</section>
  )
}
