import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">
            Recrutez sur la base du <span className="text-primary">talent, pas des préjugés</span>
          </h1>
          <p className="lead text-muted mb-4">
            Connectez-vous avec les meilleurs talents de manière anonyme. Concentrez-vous sur les compétences, 
            l'expérience et le potentiel – pas sur les préjugés. Transformez votre processus de recrutement 
            avec notre plateforme sans biais.
          </p>
          <div className="d-flex gap-3">
            <Link to="/talents" className="btn btn-primary btn-lg px-4">
              Trouver un Talent
            </Link>
            <Link to="/inscription" className="btn btn-outline-primary btn-lg px-4">
              Devenir Talent
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
            alt="Collaboration d'équipe"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
