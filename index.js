const dgraph = require("dgraph-js-http");

const clientStub = new dgraph.DgraphClientStub(
    // addr: optional, default: "http://localhost:8080"
    "http://localhost:8080",
    // legacyApi: optional, default: false. Set to true when connecting to Dgraph v1.0.x
    false,
);
const dgraphClient = new dgraph.DgraphClient(clientStub);


async function main() {
	const schema = `SCHEMA_HERE`
	await dgraphClient.alter({ schema: schema });
}
main();