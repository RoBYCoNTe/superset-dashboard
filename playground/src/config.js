import { DefaultDataProvider } from "superset-dashboard";

export const SUPERSET_DOMAIN = "http://localhost:8088";
export const SUPERSET_ENDPOINT = SUPERSET_DOMAIN;
export const SUPERSET_GUEST_USER = "guest";
export const SUPERSET_GUEST_PASS = "guest";

export const dataProvider = new DefaultDataProvider(SUPERSET_ENDPOINT, {
  username: SUPERSET_GUEST_USER,
  password: SUPERSET_GUEST_PASS,
});
