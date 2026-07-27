import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Plearn Path", short_name: "Plearn Path", description: "Adaptive learning for Thai learners", start_url: "/", display: "standalone", background_color: "#0b1220", theme_color: "#2456A6", icons: [] };
}
