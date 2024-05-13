import CustomerSection from "@/components/component/customer-section"
import FeaturesSection from "@/components/component/features-section"
import HeroSection from "@/components/component/hero-section"

export default function HomePage() {
  return (
    <main className="flex flex-col">
			<HeroSection />
      <FeaturesSection />
      <CustomerSection />
    </main>
  )
}
