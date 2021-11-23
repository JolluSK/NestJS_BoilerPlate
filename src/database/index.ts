import { createConnection, getConnectionOptions } from "typeorm";

// read connection options from ormconfig file (or ENV variables)
const connectionOptions = getConnectionOptions();
