// Add the tables you will use in repo to avoid hardcoding and get the dependency graph and documentation benefits

const tables = [
  { name: "distribution_centers", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }
  ,{ name: "events", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }
  ,{ name: "order_items", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }
  ,{ name: "orders", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }
  ,{ name: "users", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }
  ,{ name: "products", database: "fit-crow-461418-s0",schema: "the_look_ecommerce_eu" }


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
