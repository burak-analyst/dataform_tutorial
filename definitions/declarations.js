// Add the tables you will use in repo to avoid hardcoding and get the dependency graph and documentation benefits

const tables = [
  { name: "distribution_centers", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }
  ,{ name: "events", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }
  ,{ name: "order_items", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }
  ,{ name: "orders", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }
  ,{ name: "users", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }
  ,{ name: "products", database: "the_look_ecommerce_eu",schema: "fit-crow-461418-s0" }


];

// Function to generate and apply table declarations
function generateTableDeclarations() {
  tables.forEach(table => {
    declare({
      type: "declaration",
      schema: table.schema,
      name: table.name,
      database: table.database
    });
  });
}

// Call the function to generate the declarations
generateTableDeclarations();
