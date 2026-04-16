import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("visualizer/:id", "routes/visualizer.$id.tsx"),
  route("success", "routes/success.tsx"),
] satisfies RouteConfig;