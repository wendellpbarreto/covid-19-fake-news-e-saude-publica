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
            <i>fake news</i>
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
            <p>
              <strong class="d-block">Objetivo</strong>
              Identificar o conteúdo científico e sua relação com as fake news
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
      slug: "descobrir",
      pretitle,
      title: "02",
      subtitle: "descobrir",
      children: (
        <>
          <strong>O quê?</strong>
          <p>
            Padrões que caracterizam <i>fake news</i>
          </p>
          <strong>Como?</strong>
          <p>
            Identificar conteúdo científico e sua relação com as{" "}
            <i>fake news</i>; realizar experimento do repolho roxo
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
            <p>
              <strong class="d-block">Links úteis</strong>
              <a href="/ferramentas-de-checagem" target="_blank">
                <i className="fal fa-link mr-2"></i>
                Ferramentas de checagem
              </a>
            </p>
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
            a disseminação de <i>fake news</i> no espaço de vivência
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
            Material direcionado a comunidade com informações sobre as{" "}
            <i>fake news</i> e o impacto na saúde pública
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
