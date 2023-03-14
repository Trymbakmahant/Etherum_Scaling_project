import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "your-namespace",
});

await db.applySchema(
  `
  @public
  collection City {
    id: string;
    name: string;
    country?: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }

    setCountry (country: string) {
      this.country = country;
    }
  }

  @public
  collection Country {
    id: string;
    name: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }
`,
  "your-namespace"
); // your-namespace is optional if you have defined a default namespace
