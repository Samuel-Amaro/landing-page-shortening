import { rest } from "msw";

const BASEAPI = "https://api.shrtco.de/v2/shorten/"

export const handlers = [
  //handles a GET para servidor de terceiros
  rest.get(BASEAPI, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: "Neaysb",
        full_short_link: "https://shrtco.de/Neaysb",
        original_link: req.url.searchParams.get("url")
      })
    );
  }),
];