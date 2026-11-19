import { useTranslator } from "@/lib/i18n/react";
import ResourceLinks from "../resource-links";
import ProductShowcase from "../product-showcase";
import MobileApp from "../mobile-app";
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
  const i18n = useTranslator();

  return (
    <main className="party-site festival-site">
      <BrandEntrance />
      <a className="marketing-skip" href="#contenido">
        {i18n("Ir al contenido")}
      </a>
      <GeneralHeader />
      <GeneralHero />
      <MobileApp />
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
