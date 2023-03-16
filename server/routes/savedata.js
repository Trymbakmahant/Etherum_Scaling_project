const router = require("express").Router();
import { Polybase } from "@polybase/client";
const db = new Polybase({ defaultNamespace: "your-namespace" });

router.route("/").post(async (req, res) => {
  try {
    // your-namespace is optional if you have defined a default namespace

    await db.collection("City").create(["ney-york", "Ney York"]);
  } catch (e) {
    console.log(e);
  }
});

router.route("/update").post(async (req, res) => {
  try {
    await db.collection("City").call("setCountry", ["USA"]);
  } catch (e) {
    console.log(e);
  }
});

router.route("./read").post(async (req, res) => {
  const data = await db.collection("City").record("new-york").get();
});

module.exports = router;

// Based on the collection code above, "new-york" is the `id` of the new record.
// The `id` "new-york" must be unique (not already exist in the collection)

// new-york is the `id`, New York is the `name`
