import { useTranslator } from "@/lib/i18n/react";
import ResourceLinks from "../resource-links";
import ProductShowcase from "../product-showcase";
import MobileApp from "../mobile-app";
import BrandEntrance from "../brand-entrance";
import WeddingHeader from "./header";
import WeddingHero from "./hero";
import WeddingFooter from "./footer";
import WeddingStory from "./story";
import MarketingFAQ from "../questions";
import MarketingSchema from "../schema";
export default function WeddingLanding() {
  const i18n = useTranslator();

  return (
    <main className="site wedding wedding-atlas" id="inicio">
      <BrandEntrance wedding />
      <a className="marketing-skip" href="#contenido">
        {i18n("Ir al contenido")}
      </a>
      <WeddingHeader />
      <div id="contenido">
        <WeddingHero />
      </div>
      <ProductShowcase wedding />
      <WeddingStory />
      <MobileApp wedding />
      <MarketingFAQ wedding />
      <WeddingFooter />
      <ResourceLinks wedding />
      <MarketingSchema wedding />
    </main>
  );
}
