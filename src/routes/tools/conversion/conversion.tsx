import RouteContainer from "src/routeContainer";
import { SubRouteList } from "src/components/exports";

const routes = [
  {
    title: "Temperature",
    path: "/conversion/temperature",
  },
];

export default function Conversion() {
  return (
    <RouteContainer>
      <SubRouteList routes={routes} />
    </RouteContainer>
  );
}
