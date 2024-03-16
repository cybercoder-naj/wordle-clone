import { Elysia, t } from "elysia";
import authRoutes from "@routes/auth";
import moment from "moment-timezone";

const api = new Elysia({ prefix: '/api' })
  .get('/word', ({ query: { timezone }}) => {
    const date = moment().tz(timezone).format('DD-MM-YYYY');
    return "GREAT";
  }, {
    query: t.Object({
      timezone: t.String()
    })
  })
  .use(authRoutes);

export default api;
