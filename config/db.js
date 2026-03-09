import {neon} from "@neondatabase/serverless";

import "dotenv/config";


// creates a sql connection with our db
export const sql = neon(process.env.DATABASE_URL);