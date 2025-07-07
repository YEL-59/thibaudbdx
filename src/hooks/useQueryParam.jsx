// hooks/useQueryParam.js

import { useLocation } from "react-router";

const useQueryParam = (key) => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(key);
};

export default useQueryParam;
