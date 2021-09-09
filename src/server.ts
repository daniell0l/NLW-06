
import "reflect-metadata";
import express, { request, response } from "express";

import "./database";

const app = express();

/**
 * GET  => Buscar uma informaçao
 * POST => inserir (Criar) uma informação
 * PUT  => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
 */

/**
 * tipos de parametros
 * Routes params => http://localhost:3000/produtos/78347583458345
 * Query Params => http;//localhost:3000/produtos?name=teclado&description=tecladobom&
 * 
 * Body Params => {
 *  "name": "teclado",
 * "description": "teclado bom"
 * }
 */
app.get("/test", (request, response) => {
// Request => e tudo que esta Entrando
// Response => e tudo que esta Saindo
 return response.send("Ola valoriza");

})

app.post("/test-post", (request, response) => {
    return response.send("ola Valoriza metodo ")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));


