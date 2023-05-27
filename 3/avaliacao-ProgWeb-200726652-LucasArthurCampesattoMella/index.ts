import app from "./app";


function main(){
try {
  app.listen(3000, "localhost", () => {
    console.log("Deu certo");
  });
  return "Deu certo";
} catch (err) {
  console.log("Nao deu certo");
  return "Nao deu certo";
}
}
main();

export default main;