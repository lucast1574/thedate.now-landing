import ResourceLinks from "../resource-links";
import ProductShowcase from "../product-showcase";
import BrandEntrance from "../brand-entrance";
import WeddingHeader from "./header";
import WeddingHero from "./hero";
import WeddingFooter from "./footer";
import WeddingStory from "./story";
import MarketingFAQ from "../questions";
import MarketingSchema from "../schema";
export default function WeddingLanding() {
  return (
    <main className="site wedding wedding-atlas" id="inicio">
      <BrandEntrance wedding />
      <a className="marketing-skip" href="#contenido">
        Ir al contenido
      </a>
      <WeddingHeader />
      <div id="contenido">
        <WeddingHero />
      </div>
      <ProductShowcase wedding />
      <WeddingStory />
      <MarketingFAQ wedding />
      <WeddingFooter />
      <ResourceLinks wedding />
      <MarketingSchema wedding />
    </main>
  );
}
