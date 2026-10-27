import BrandEntrance from "../brand-entrance";
import GeneralExperience from "./experience";
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
      <GeneralExperience />
      <GeneralHow />
      <MarketingFAQ />
      <GeneralFooter />
      <MarketingSchema />
    </main>
  );
}
