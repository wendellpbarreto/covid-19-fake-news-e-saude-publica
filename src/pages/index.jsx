import React, { useEffect } from "react";
import _ from "lodash";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const Home = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("home-page");
    document.querySelector("body").classList.add("home-page");

    return () => {
      document.querySelector("html").classList.remove("home-page");
      document.querySelector("body").classList.remove("home-page");
    };
  }, []);

  const students = _.sortBy(
    [
      {
        name: "Wendell P. Barreto, Engenheiro de Software",
        lattes: "http://lattes.cnpq.br/6507543072006940",
      },
      {
        name: "Russiana C. S. da Silva, Professora de Língua Portuguesa",
        lattes: "http://lattes.cnpq.br/2289046034565039",
      },
      {
        name: "Raíza de Araújo Domingos Soares, Professora de Química",
        lattes: "http://lattes.cnpq.br/3768644861934814",
      },
      {
        name: "Milena Alves Teixeira, Pedagoga",
        lattes: "http://lattes.cnpq.br/3021328065597391",
      },
      {
        name: "Ronilson Fernandes da Silva, Professor de Geografia",
        lattes: "http://lattes.cnpq.br/1863930085492453",
      },
      {
        name: "Ozineide Onofre da Silva, Professora de Língua Portuguesa ",
        lattes: "http://lattes.cnpq.br/1480064142220022",
      },
      {
        name: "Mariel Wágner Holanda Lima",
        lattes:
          "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4498357Y2",
      },
    ],
    "name"
  );

  const timeLineItems = [
    {
      slug: "problematica",
      subtitle: "Problemática",
      disableHeader: true,
      children: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultricies leo in blandit imperdiet. Nunc lacus dolor, ullamcorper
            vitae pharetra sit amet, fermentum id nisi. Sed egestas volutpat
            suscipit. Mauris gravida elit nec turpis suscipit interdum. Nam
            maximus orci tortor, eu volutpat sem fermentum ut.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/fake-news2.png" alt="" />
        </>
      ),
    },
    {
      slug: "sequencia-didatica",
      subtitle: "Sequência didática",
      link: "/sequencia-didatica",
      disableHeader: true,
      children: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultricies leo in blandit imperdiet. Nunc lacus dolor, ullamcorper
            vitae pharetra sit amet, fermentum id nisi. Sed egestas volutpat
            suscipit. Mauris gravida elit nec turpis suscipit interdum. Nam
            maximus orci tortor, eu volutpat sem fermentum ut.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/following-teaching.png" alt="" />
        </>
      ),
    },
    {
      slug: "ferramentas-de-checagem",
      subtitle: "Ferramentas de Checagem",
      link: "/ferramentas-de-checagem",
      disableHeader: true,
      children: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultricies leo in blandit imperdiet. Nunc lacus dolor, ullamcorper
            vitae pharetra sit amet, fermentum id nisi. Sed egestas volutpat
            suscipit. Mauris gravida elit nec turpis suscipit interdum. Nam
            maximus orci tortor, eu volutpat sem fermentum ut.
          </p>
        </>
      ),
      media: (
        <>
          <img src="/fake-news.png" alt="" />
        </>
      ),
    },
    {
      slug: "o-projeto",
      subtitle: "O PROJETO",
      disableHeader: true,
      children: (
        <>
          <p>
            Trabalho desenvolvido durante a disciplina de Fundamentos das
            Tecnologias Educacionais do Mestrado Profissional em Inovação em
            Tecnologias Educacionais do PPgITE - IMD / UFRN no ano de 2021.
          </p>
          <p>Clique para saber mais sobre os orientadores e criadores.</p>
        </>
      ),
      media: (
        <>
          <img src="/students2.png" alt="" />
        </>
      ),
      details: {
        title: "O Projeto",
        subtitle: "Orientadores e criadores",
        children: (
          <>
            <p>
              <strong class="d-block">Orientadores</strong>
              <u>
                <li>
                  <a
                    href="http://www.google.com/url?q=http%3A%2F%2Flattes.cnpq.br%2F0601161335088804&sa=D&sntz=1&usg=AFQjCNG8mSPOuWSwc94_S5oF20ZzhVorog"
                    target="_blank"
                  >
                    Profª. Drª Apuena Vieira Gomes
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.google.com/url?q=http%3A%2F%2Flattes.cnpq.br%2F1795893092260432&sa=D&sntz=1&usg=AFQjCNHrItOxEOVhOuoDTQSgvTNSkx_Gpw"
                    target="_blank"
                  >
                    Profª. Drª Cibelle Amorim Martins
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.google.com/url?q=http%3A%2F%2Flattes.cnpq.br%2F4047293288281493&sa=D&sntz=1&usg=AFQjCNGYSd3SKVJYrYVsbzZESmM-VNOSjQ"
                    target="_blank"
                  >
                    Prof. Dr. Dennys Leite Maia
                  </a>
                </li>
              </u>
            </p>
            <p>
              <strong class="d-block">Criadores</strong>
              <ul>
                {students.map(({ name, lattes }) => (
                  <li key={lattes}>
                    <a href={lattes} target="_blank">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </p>
          </>
        ),
      },
    },
  ];

  return (
    <>
      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle="Lorem ipsum dolor sit amet"
      />

      <TimeLine items={timeLineItems} variant="1" />
    </>
  );
};

export default Home;
