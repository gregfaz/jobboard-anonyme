import React from 'react';
import { Shield, Sparkles, Users } from 'lucide-react';

const features = [
  {
    name: 'Profils Anonymes',
    description: 'Concentrez-vous sur l\'essentiel - compétences, expérience et potentiel. Sans biais, sans préjugés.',
    icon: Shield,
  },
  {
    name: 'Compétences Vérifiées',
    description: 'Chaque compétence et certification est validée par notre processus de vérification approfondi.',
    icon: Sparkles,
  },
  {
    name: 'Connexions Directes',
    description: 'Connectez-vous directement avec les entreprises ou les talents après un intérêt mutuel.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold">Fonctionnalités</h6>
          <h2 className="display-5 fw-bold mb-3">Une meilleure façon de recruter</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Notre plateforme élimine les biais inconscients du processus de recrutement, 
            vous permettant de vous concentrer sur ce qui compte vraiment.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.name} className="col-md-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-3 p-3 mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="card-title mb-3">{feature.name}</h4>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
