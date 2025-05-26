import { useLocation } from "react-router";

export function useHasNestedRoute() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  return pathSegments.length > 1;
}
