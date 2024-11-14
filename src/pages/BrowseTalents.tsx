import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function BrowseTalents() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Filtres</h5>
              
              <div className="mb-4">
                <label className="form-label">Compétences</label>
                <input type="text" className="form-control" placeholder="ex: React, Node.js" />
              </div>

              <div className="mb-4">
                <label className="form-label">Expérience</label>
                <select className="form-select">
                  <option>Tous niveaux</option>
                  <option>0-2 ans</option>
                  <option>3-5 ans</option>
                  <option>5+ ans</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Fourchette salariale</label>
                <div className="d-flex gap-2">
                  <input type="number" className="form-control" placeholder="Min" />
                  <input type="number" className="form-control" placeholder="Max" />
                </div>
              </div>

              <button className="btn btn-primary w-100">
                <Filter size={18} className="me-2" />
                Appliquer les filtres
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Talents disponibles</h2>
            <div className="input-group" style={{ maxWidth: '300px' }}>
              <input type="text" className="form-control" placeholder="Rechercher..." />
              <button className="btn btn-outline-secondary">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((talent) => (
              <div key={talent} className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="card-title">Talent #{talent}</h5>
                      <span className="badge bg-primary">5 ans d'exp.</span>
                    </div>
                    <p className="text-muted mb-3">
                      Développeur Full Stack passionné par les technologies web modernes.
                    </p>
                    <div className="mb-3">
                      <h6 className="mb-2">Compétences principales:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark">React</span>
                        <span className="badge bg-light text-dark">Node.js</span>
                        <span className="badge bg-light text-dark">TypeScript</span>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary w-100">
                      Voir le profil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
