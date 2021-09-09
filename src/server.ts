import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET  => Buscar uma informaçao
 * POST => inserir (Criar) uma informação
 * PUT  => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação especifica
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


