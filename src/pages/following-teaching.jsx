import React, { useEffect } from "react";
import Head from "next/head";

import PageHeader from "../components/PageHeader";
import TimeLine from "../components/TimeLine";

const FollowingTeachingPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("following-teaching-page");
    document.querySelector("body").classList.add("following-teaching-page");

    return () => {
      document
        .querySelector("html")
        .classList.remove("following-teaching-page");
      document
        .querySelector("body")
        .classList.remove("following-teaching-page");
    };
  }, []);

  const pretitle = "Atividade";
  const timeLineItems = [
    {
      slug: "investigar",
      pretitle,
      title: "01",
      subtitle: "investigar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Materiais compartilhados via redes sociais</p>
          <strong>Como?</strong>
          <p>
            Roda de conversa; exploração da problemática; provocações; quiz de{" "}
            Fake News
          </p>
        </>
      ),
      media: (
        <>
          <img src="/social-networks.png" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 01 - Investigar",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>Identificar o que é fato e o que é fake;</li>
              <li>
                Despertar os conhecimentos prévios dos alunos sobre a temática.
              </li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 1h/a</p>
            <p>Momento 1: Roda de conversa</p>
            <ul>
              <li>
                Discutir Fake News no contexto da pandemia, partindo da notícia
                falsa do limão alcalino (1).
              </li>
            </ul>
            <p>Momento 2: Quiz das Fake News</p>
            <ul>
              <li>
                Realizar um jogo de perguntas e respostas através do aplicativo
                Quizizz (2), para que o aluno possa identificar, com base nos
                seus conhecimentos prévios, quais daquelas notícias são reais ou
                falsas.
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LP40 - Analisar o fenômeno da pós-verdade – discutindo as
              condições e os mecanismos de disseminação de Fake News e também
              exemplos, causas e consequências desse fenômeno e da prevalência
              de crenças e opiniões sobre fatos –, de forma a adotar atitude
              crítica em relação ao fenômeno e desenvolver uma postura flexível
              que permita rever crenças e opiniões quando fatos apurados as
              contradisserem.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (1) Fake do limão:{" "}
                <a
                  href="http://bit.ly/3mlPxPgFakedolimão"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3mlPxPgFakedolimão
                </a>
              </li>
              <li>
                (2) Quizizz:{" "}
                <a
                  href="http://bit.ly/2Pyqe0gQuiz"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/2Pyqe0gQuiz
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "descobrir",
      pretitle,
      title: "02",
      subtitle: "descobrir",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Padrões que caracterizam Fake News</p>
          <strong>Como?</strong>
          <p>
            Identificar conteúdo científico e sua relação com as Fake News;
            realizar experimento do repolho roxo
          </p>
        </>
      ),
      media: (
        <>
          <img src="/discover.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 02 - Descobrir",
        children: (
          <>
            <h5 class="font-weight-bold">Objetivo</h5>
            <ul>
              <li>Conhecer as características de uma Fake News;</li>
              <li>
                Utilizar fontes confiáveis de informação científica durante a
                prática de pesquisa de dados e informações (agravos, doenças e
                saúde pública);
              </li>
              <li>
                Reconhecer as Tecnologias mais utilizadas para disseminação de
                Fake News;
              </li>
              <li>Conhecer as Tecnologias de validação de Fake News;</li>
              <li>Conceituar substâncias ácidas e básicas, escala de pH.</li>
            </ul>
            <h5 class="font-weight-bold">Descrição da Atividade</h5>
            <p>Tempo estimado: 2h/a</p>
            <p>Momento 1: Desvendando as Fake News</p>
            <ul>
              <li>
                Discutir os padrões que caracterizam as fakes news (retomar o
                quiz e a notícia falsa do limão), e refletir sobre os critérios
                dos alunos para definir as notícias como falsas ou verdadeiras;
              </li>
              <li>
                Estimular os estudantes a buscar, por meio de seus próprios
                dispositivos, ferramentas de pesquisa online que possibilitem a
                identificação da veracidade das notícias do quiz (3).
              </li>
            </ul>
            <p>Momento 2: Experimento</p>
            <ul>
              <li>
                Identificar, através de uma experiência científica, as
                propriedades químicas do limão (4);
              </li>
              <li>
                Refletir acerca dos possíveis danos à saúde pública que a fake
                news do limão pode causar - brainstorm com ferramenta online
                (Answer Garden ou Mentimeter) (5);
              </li>
            </ul>
            <h5 class="font-weight-bold">Habilidades</h5>
            <p>
              EM13LGG702 - Avaliar o impacto das tecnologias digitais da
              informação e comunicação (TDIC) na formação do sujeito e em suas
              práticas sociais, para fazer uso crítico dessa mídia em práticas
              de seleção, compreensão e produção de discursos em ambiente
              digital.
            </p>
            <p>
              EM13LGG704 - Apropriar-se criticamente de processos de pesquisa e
              busca de informação, por meio de ferramentas e dos novos formatos
              de produção e distribuição do conhecimento na cultura de rede.
            </p>
            <p>
              EM13CNT205 - Interpretar resultados e realizar previsões sobre
              atividades experimentais, fenômenos naturais e processos
              tecnológicos, com base nas noções de probabilidade e incerteza,
              reconhecendo os limites explicativos das ciências.
            </p>
            <h5 class="font-weight-bold">Links úteis</h5>
            <ul style={{ listStyle: "none" }}>
              <li>
                (3) Sites de checagem:{" "}
                <a
                  href="http://bit.ly/3fCLTzcChecagem"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3fCLTzcChecagem
                </a>
              </li>
              <li>
                (4) Experimento:{" "}
                <a
                  href="http://bit.ly/3cNJOhUExperimento"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3cNJOhUExperimento
                </a>
              </li>
              <li>
                (5) Ferramentas de braistorm online:{" "}
                <a
                  href="http://bit.ly/3fFzTwHBraistorm"
                  target="_blank"
                  className="font-weight-bold"
                >
                  http://bit.ly/3fFzTwHBraistorm
                </a>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      slug: "conectar",
      pretitle,
      title: "03",
      subtitle: "conectar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Pessoas, pensamentos, cultura</p>
          <strong>Como?</strong>
          <p>
            Montar grupos; discutir e pensar em soluções criativas para diminuir
            a disseminação de Fake News no espaço de vivência
          </p>
        </>
      ),
      media: (
        <>
          <img src="/connect.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 03 - Conectar",
        children: (
          <>
            <p>
              <strong class="d-block">Objetivo</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Atividade</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Habilidades</strong>
              texto texto
            </p>
          </>
        ),
      },
    },
    {
      slug: "criar",
      pretitle,
      title: "04",
      subtitle: "criar",
      children: (
        <>
          <strong>O quê?</strong>
          <p>
            Material direcionado a comunidade com informações sobre as Fake News
            e o impacto na saúde pública
          </p>
          <strong>Como?</strong>
          <p>
            Em colaboração; adquirir conhecimento sobre os métodos tecnológicos
            de produção de podcasts, vídeos, infográficos, publicações em redes
            sociais, etc
          </p>
        </>
      ),
      media: (
        <>
          <img src="/create.svg" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 04 - Criar",
        children: (
          <>
            <p>
              <strong class="d-block">Objetivo</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Atividade</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Habilidades</strong>
              texto texto
            </p>
          </>
        ),
      },
    },
    {
      slug: "refletir",
      pretitle,
      title: "05",
      subtitle: "refletir",
      children: (
        <>
          <strong>O quê?</strong>
          <p>Os impactos das ações realizadas</p>
          <strong>Como?</strong>
          <p>
            Relatos dos alunos sobre resultados das produções no seu contexto e
            comunidade; rubrica
          </p>
        </>
      ),
      media: (
        <>
          <img src="/students.png" alt="" />
        </>
      ),
      details: {
        title: "Sequência didática",
        subtitle: "Atividade 05 - Refletir",
        children: (
          <>
            <p>
              <strong class="d-block">Objetivo</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Atividade</strong>
              texto texto
            </p>
            <p>
              <strong class="d-block">Habilidades</strong>
              texto texto
            </p>
          </>
        ),
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Sequência didática | COVID-19: Fake News e Saúde Pública</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader
        title="COVID-19: Fake News e Saúde Pública"
        subtitle={
          <>
            Sequência didática com metodologia STEAM
            <a href="#" target="_blank" className="anchor ml-2">
              [baixar]
            </a>
          </>
        }
      />

      <TimeLine items={timeLineItems} />
    </>
  );
};

export default FollowingTeachingPage;
