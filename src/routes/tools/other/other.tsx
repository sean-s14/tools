import RouteContainer from "src/routeContainer";
import { SubRouteList } from "src/components/exports";

const routes = [
  {
    title: "BMI",
    path: "/other/bmi",
  },
];

export default function Other() {
  return (
    <RouteContainer>
      <SubRouteList routes={routes} />
    </RouteContainer>
  );
}
