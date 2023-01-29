import RouteContainer from "src/routeContainer";
import { SubRouteList } from "src/components/exports";

const routes = [
  {
    title: "Password",
    path: "/generators/password",
  },
];

export default function Generators() {
  return (
    <RouteContainer>
      <SubRouteList routes={routes} />
    </RouteContainer>
  );
}
