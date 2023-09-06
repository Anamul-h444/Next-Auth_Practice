import { CheckCookieAuth } from "./app/utility/middlewareUtility";

export const middleware = async (req) => {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckCookieAuth(req);
  }
};
