declare var context: AppServicesContext;

type AppServicesContext = {
  app: AppMetadata;
  functions: AppFunctions;
  environment: AppEnvironment;
  http: AppHttpClient;
  request: AppRequest;
  services: AppServices;
  user: AppUser;
  values: AppValues;
};

/**
 * Access metadata about the app running the function.
 * @prop {string} id - string object ref
 */
type AppMetadata = {
  /** The unique internal ID of the App that contains the Function.
   * @example"60c8e59866b0c33d14ee634a"
   */
  id: string;
  /** The unique Client App ID for the App that contains the Function.
   * @example "myapp-abcde"
   */
  clientAppId: string;
  /** The name of the App that contains the Function.
   * @example "myapp"
   */
  name: string;
  /** The ID of the Atlas Project/Group that contains the App.
   * @example "5e1ec444970199272441a214"
   */
  projectId: string;
  /** An object that describes the App's deployment model and region. */
  deployment: {
    /** Deployment model of the App.
     * @example "LOCAL"
     */
    model: "LOCAL" | "GLOBAL";
    /** App Services Region where the App is deployed.
     * @example "aws-us-east-1"
     */
    providerRegion: string;
  };
  /** The date and time that the Atlas App was last deployed, formatted as an ISODate string.
   * @example "2022-10-31T12:00:00.000Z"
   */
  lastDeployed: string;
  /** If static hosting is enabled, this value is the base URL for hosted assets.
   * @example "myapp-abcde.mongodbstitch.com"
   */
  hostingUri: string;
};

/** You can call any Function in your application through the `context.functions` interface. */
type AppFunctions = {
  /** Calls a specific function and returns the result.
   * @param {string} functionName - The name of the Function.
   * @param {...any} args - A variadic list of arguments to pass to the function. Each function parameter maps to a separate, comma-separated argument.
   * @example
   *   // difference: subtracts b from a using the sum function
   *   exports = function(a, b) {
   *     return context.functions.execute("sum", a, -1 * b);
   *   };
   */
  execute(functionName: string, ...args): Promise<any>;
};

/**
 * Access environment values and the current environment tag.
 */
type AppEnvironment = {
  /** The name of the app's current environment as a string. */
  tag: "" | "development" | "testing" | "qa" | "production";
  /** An object where each field maps the name of an environment value to its value in the current environment.
   * @example
   * // Gets the `baseUrl` environment value in the given environment.
   * exports = async function() {
   *   const baseUrl = context.environment.values.baseUrl
   * };
   */
  values: object;
};

/**
 * A client object that calls your app's functions.
 */
type AppHttpClient = {
  /** Sends an HTTP GET request to the specified URL using the Atlas App Services HTTP Service. */
  get(request: AppHttpGetArg): Promise<AppHttpGetReturnValue>;

  // TODO: other methods
};

// TODO: there's some funky either/or logic here with using `url` vs. building out
// the URL. for more info, see https://docs-atlas-staging.mongodb.com/atlas-app-services/docsworker-xlarge/DOCSP-15344/services/http-actions/http.get/#alternative-url-parameters
interface AppHttpGetArg {
  /** If you need to specify the individual components of the request's target URL,
   * omit the `url` field and specify the components as root-level fields
   * like in the following example:
   *
   * `<scheme>://<host>/<path>?<query>#<fragment>`
   */
  url: string;
  headers?: object;
  cookies?: string;
  digestAuth?: boolean;
  authUrl?: string;
  followRedirects?: boolean;
  /**
   * The URL scheme.
   * @default "http"
   * @example
   * // https://www.example.com/
   * { host: "www.example.com" }
   */
  scheme?: "https" | "http";
  /**
   * The hostname of the target resource.
   * @example
   * // https://www.example.com/
   * { host: "www.example.com" }
   */
  host?: string;
  /**
   * The path of the target resource.
   * @example
   * // https://www.example.com/api/v1/users
   * { path: "/api/v1/users" }
   */
  path?: string;
  /**
   * A document where each field maps to a parameter in the URL query string.
   * The value of each field is an array of strings that contains all arguments
   * for the parameter.
   * @example
   * // https://www.example.com/?id=8675309&color=red&color=blue
   * {
   *   query: {
   *     "id": ["8675309"],
   *     "color": ["red", "blue"]
   *   }
   * }
   */
  query?: { [key: string]: string[] };
  /**
   * The URL fragment. This portion of the URL includes everything
   * after the hash (`#`) symbol.
   * @example
   * // https://www.example.com/?id=8675309#someFragment
   * { fragment: "someFragment" }
   */
  fragment: string;
  /**
   * The username with which to authenticate the request.
   * Typically, users utilize this argument with the `password` argument.
   */
  username?: string;
  /**
   * The password with which to authenticate the request.
   * The password should correspond to the user specified in the `username` argument.
   */
  password?: string;
}

interface AppHttpGetReturnValue {
  /** The HTTP Request status message. */
  status: string;
  /** The HTTP Request status code. */
  statusCode: number;
  /** The number of bytes returned in the response `body`. */
  contentLength: number;
  headers: AppHttpHeader;
  cookies: AppHttpCookies;
  /** The binary-encoded body of the HTTP response  */
  body: BinaryData;
}

/**
 * A document where each field name corresponds to a type of HTTP header
 * and each field value is an array of one or more string values for that header.
 * @example
 * {
 *    "Content-Type": [ "application/json" ]
 * }
 * */
interface AppHttpHeader {
  [key: string]: string[];
}

/**
 * A document where each field name corresponds to a cookie name,
 * and each field value is that cookie's string value.
 * @example
 * {
 *   "favoriteTeam": "Chicago Cubs"
 * }
 */
interface AppHttpCookies {
  [key: string]: string;
}

/**
 * Describes the incoming request that triggered a function call.
 */
type AppRequest = {
  // TODO
};

/**
 * Exposes client objects that can access data sources and services.
 */
type AppServices = {
  // TODO
};
/**
 * Describes the authenticated user that initiated the request.
 */
type AppUser = {
  // TODO
};

/**
 * Contains static global values.
 */
type AppValues = {
  // TODO
};