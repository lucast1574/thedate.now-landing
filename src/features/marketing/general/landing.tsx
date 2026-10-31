import ResourceLinks from "../resource-links";
import ProductShowcase from "../product-showcase";
import BrandEntrance from "../brand-entrance";
import MarketingFAQ from "../questions";
import MarketingSchema from "../schema";
import GeneralHeader from "./header";
import GeneralHero from "./hero";
import GeneralMarquee from "./marquee";
import GeneralOccasions from "./occasions";
import GeneralHow from "./how";
import GeneralFooter from "./footer";
export default function GeneralLanding() {
  return (
    <main className="party-site festival-site">
      <BrandEntrance />
      <a className="marketing-skip" href="#contenido">
        Ir al contenido
      </a>
      <GeneralHeader />
      <GeneralHero />
      <GeneralMarquee />
      <GeneralOccasions />
      <ProductShowcase />
      <GeneralHow />
      <MarketingFAQ />
      <GeneralFooter />
      <ResourceLinks />
      <MarketingSchema />
    </main>
  );
}
