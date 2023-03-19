import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-collapse">
          <Link className="navbar-brand" href="/">
            Home
          </Link>
          <Link className="navbar-brand" href="/LivroLista">
            Catálogo
          </Link>
          <Link className="navbar-brand" href="/LivroDados">
            Novo
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
