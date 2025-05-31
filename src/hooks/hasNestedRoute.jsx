import { useLocation } from "react-router";

export function useHasNestedRoute() {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments.length > 1;
}

export const useIsProspectDetails = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isCustomerDetails = pathSegments[pathSegments.length - 1] === "customer-details";

  return isCustomerDetails;
};
