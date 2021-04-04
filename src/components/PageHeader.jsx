import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto">
          <i className="fal fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link href="/">
              <Nav.Link as="a" href="/">
                Início
              </Nav.Link>
            </Link>
            <Link href="/sequencia-didatica">
              <Nav.Link as="a" href="/sequencia-didatica">
                Sequência Didática
              </Nav.Link>
            </Link>
            <Link href="/ferramentas-de-checagem">
              <Nav.Link as="a" href="/ferramentas-de-checagem">
                Ferramentas de Checagem
              </Nav.Link>
            </Link>
            <Link href="/referencias">
              <Nav.Link as="a" href="/referencias">
                Referências
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header className="page-header">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1 className="page-title font-weight-bold text-center">{title}</h1>
          {subtitle && (
            <h4 className="page-subtitle text-center">{subtitle}</h4>
          )}
        </div>
      </header>
    </>
  );
};

export default PageHeader;
