import { useEffect, useState } from "react";

export function createRouteHelpers({ navItems, getUniversityByPath }) {
  const normalisePath = (pathname) => {
    const clean = pathname.replace(/\/$/, "") || "/";
    if (getUniversityByPath(clean)) return clean;
    return navItems.some(([, path]) => path === clean) ? clean : "/";
  };

  return function useRoute() {
    const [path, setPath] = useState(() => normalisePath(window.location.pathname));

    useEffect(() => {
      const syncRoute = () => setPath(normalisePath(window.location.pathname));
      window.addEventListener("popstate", syncRoute);
      return () => window.removeEventListener("popstate", syncRoute);
    }, []);

    const navigate = (to) => {
      const next = normalisePath(to);
      if (next !== path) {
        window.history.pushState({}, "", next);
        setPath(next);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return { path, navigate };
  };
}
