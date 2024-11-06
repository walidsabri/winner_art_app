import React, { useState, useEffect } from 'react';
import './ventes.css';

const ProductCard = ({ product, handleOpenModal }) => {
    return (
        <div className="product-card">
            <div className="product-info">
                <h3>{product.titre}</h3>
                <p className='desc'>{product.description}</p>
                <p className='prix'>{product.prix} DA</p>
            </div>
            <button className='btn' onClick={handleOpenModal}><span>Acheter</span></button>
        </div>
    );
};

const Ventes = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost/winner1/fetch_products.php')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/winner1/add_vente.php', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleCloseModal();
        })
        .catch(error => console.error('Error:', error));
    };
    


    return (
        <div className={`ventes-container ${isModalOpen ? 'modal-open' : ''}`}>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <ProductCard key={index} product={product} handleOpenModal={handleOpenModal} />
                ))
            ) : (
                <h1 className='nop'>Aucun instrument disponible</h1>
            )}
            {isModalOpen && (
            <div className="overlay">
                <div className="modal">
                    <button onClick={handleCloseModal}>X</button>
                    <form onSubmit={handleSubmit}>
                            <img src={require('../photos/winnercoloresvg.svg').default} alt="Logo Winner-Art" />
                            <input type="text" name="name" required  placeholder='Nom :'/>
                            <input type="text" name="prenom" required placeholder='Prenom :'/>
                            <input type="text" name="phone" required placeholder='Telephone :'/>
                            <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            )}
        </div>
    );
};

export default Ventes;