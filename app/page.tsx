import { AdaptiveLoop } from "../components/landing/adaptive-loop";
import { AisEcosystem } from "../components/landing/ais-ecosystem";
import { Architecture } from "../components/landing/architecture";
import { FeatureHighlights } from "../components/landing/feature-highlights";
import { FooterCta } from "../components/landing/footer-cta";
import { Hero } from "../components/landing/hero";
import { LandingHeader } from "../components/landing/landing-header";
import { PainPoint } from "../components/landing/pain-point";
import { ScrollAnimations } from "../components/ui/scroll-animations";

export default function Home() {
  return <main><ScrollAnimations /><LandingHeader /><Hero /><PainPoint /><AdaptiveLoop /><FeatureHighlights /><Architecture /><AisEcosystem /><FooterCta /></main>;
}
