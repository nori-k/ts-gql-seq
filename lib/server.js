"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const db = __importStar(require("./db/conf"));
async function serve() {
    db.sequelize.sync({ force: false, alter: true }).catch(console.log);
    const schema = await type_graphql_1.buildSchema({
        resolvers: [__dirname + "/resolvers/**/*.js"]
    });
    const server = new apollo_server_1.ApolloServer({ schema, playground: true });
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}
serve().catch(console.log);
//# sourceMappingURL=server.js.map