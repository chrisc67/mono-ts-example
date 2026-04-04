import { build } from "./app.js";
import { createTables } from "./database/createTables.js";

const app = build();

await createTables();

app.listen(
  { host: "0.0.0.0", port: Number(process.env.PORT) || 3000 },
  (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    console.log(app.printRoutes());
  },
);
