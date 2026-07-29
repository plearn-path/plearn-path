import { AdaptiveHintFeature } from "./adaptive-hint-feature";
import { TeacherDashboardFeature } from "./teacher-dashboard-feature";

export function FeatureHighlights() {
  return <section id="features" className="bg-white py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 lg:grid-cols-2"><AdaptiveHintFeature /><TeacherDashboardFeature /></div></div></section>;
}
