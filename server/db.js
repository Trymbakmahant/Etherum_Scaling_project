import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "your-namespace",
});

module.exports = db;
