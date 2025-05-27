import { useLocation } from "react-router";

export function useHasNestedRoute() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  return pathSegments.length > 1;
}

export const useIsProspectDetails = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  return lastSegment === "customer-details";
};
