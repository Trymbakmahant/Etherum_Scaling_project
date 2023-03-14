const router = require("express").Router();
import { Polybase } from "@polybase/client";
const db = new Polybase({ defaultNamespace: "your-namespace" });

await db.collection("City").create(["new-york", "New York"]);

router.route("/").post(async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

// Based on the collection code above, "new-york" is the `id` of the new record.
// The `id` "new-york" must be unique (not already exist in the collection)

// new-york is the `id`, New York is the `name`
