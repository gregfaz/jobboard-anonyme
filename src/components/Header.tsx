import React from 'react';
import { Menu, Search, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Building2 className="text-primary" size={32} />
          <span className="ms-2 fw-bold">TalentBlind</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu size={24} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/talents' ? 'active' : ''}`} to="/talents">
                Parcourir les Talents
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/entreprises' ? 'active' : ''}`} to="/entreprises">
                Pour les Entreprises
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/fonctionnement' ? 'active' : ''}`} to="/fonctionnement">
                Comment ça marche
              </Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-dark">
              <Search size={20} />
            </button>
            <Link to="/connexion" className="btn btn-primary">Connexion</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
