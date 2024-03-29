async function myFunction() {
  // LOOK_AT_ME:
  // ESLint gets mad about this import even though it's valid Node.js
  const v8 = require("v8");
  // LOOK_AT_ME:
  // context object is accepted by ESLint
  // AND has type ahead capability gracias a TypeScript
  const appId = context.functions.execute("foo");
  await context.functions.execute("foo");
  const val = context.values.get("myVal");

  return appId;
}

exports = myFunction;
