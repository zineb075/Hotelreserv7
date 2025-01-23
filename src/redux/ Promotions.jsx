import React from 'react';
import './Promotions.css'; 
function Promotions() {
  return (
    <> 
    <div className="container mt-5">
      <h4 className="text-left">Nos Promotions:</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img1.jpeg" className="card-img-top" alt="Petit Déjeuner" />
            <div className="card-body">
              <h5 className="card-title">Petit Déjeuner Gratuit</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img2.jpeg" className="card-img-top" alt="Réduction" />
            <div className="card-body">
              <h5 className="card-title">-30% pour la 1ère Réservation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img3.jpeg" className="card-img-top" alt="Offres Week-End" />
            <div className="card-body">
              <h5 className="card-title">Offres Spéciales Chaque Week-End</h5>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container mt-5">
      <h4 className="text-left">Recomandation:</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img4.jpeg" className="card-img-top" alt="Petit Déjeuner" />
            <div className="card-body">
              <h5 className="card-title">Petit Déjeuner Gratuit</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img5.jpeg" className="card-img-top" alt="Réduction" />
            <div className="card-body">
              <h5 className="card-title">-30% pour la 1ère Réservation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/public/img6.jpeg" className="card-img-top" alt="Offres Week-End" />
            <div className="card-body">
              <h5 className="card-title">Offres Spéciales Chaque Week-End</h5>
            </div>
          </div>
        </div>
      </div>
    </div>




    </>
  );
}

export default Promotions;
