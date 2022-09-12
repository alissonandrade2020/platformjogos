import express from 'express'

const app = express()

app.get('/course', (request, response) => {
  return response.send([
    { id: 1, name: "Curso 1" },
    { id: 2, name: "Curso 2" },
    { id: 3, name: "Curso 3" },
    { id: 4, name: "Curso 4" },

  ])
});

app.get("/perfil", (request, response) => {
  const query = request.query;
  return response.json([
      " ----------------- < NLW > -----------------",
      " |                                         |",
      " |                 BACKEND                 |",
      " |                                         |",
      " ---------------- < Trilha > ---------------",
      " |                                         |",
      " |             API -> E-Sports             |",
      " |                                         |",
      " -------------- < Chapter I > --------------",
      "                                           ",
      "Nome: Alisson de Andrade Araújo",
      "Formação: Análise e Desenvolvimento de Sistemas",
      "Descrição: Desenvolvedor Back-end, Front-end e Mobile",
      "Site: http://alissondeandradearaujo.000webhostapp.com/",
      "CV: https://alissonandradesistema.000webhostapp.com/curriculo/",
      "Currículo Lattes: http://lattes.cnpq.br/7594653859194302/",
      "Github: https://github.com/alissonandrade2020", 
      "Rocketseat: https://app.rocketseat.com.br/me/alissondeandradearaujo", 
      "Linkedin: https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/"])
});

app.listen(3333, () => {
  console.log('🚀 Server started ON port 3333!... pode rodar o Frontend ! =]');
});