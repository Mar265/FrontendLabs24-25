// DO ZMIANY JESZCZE 
import React, { useReducer, useEffect } from 'react';
import AppReducer from '../data/AppReducer';
import ProfileCard from './ProfileCard';
import PropTypes from 'prop-types';

function FlexContainer({ data }) {
    // Wczytaj początkowe dane z localStorage lub użyj `data`
    const initialData = JSON.parse(localStorage.getItem('items')) || data;
    const [items, dispatch] = useReducer(AppReducer, initialData);

    // Zapisuj `items` do localStorage przy każdej zmianie stanu
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <div className="row">
            {items.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4 p-2" key={index}>
                    <ProfileCard
                        name={item.name}
                        birth={item.birth}
                        eyes={item.eyes}
                        initialRating={item.rating || 0}
                        onEdit={(newName) => dispatch({ type: 'edit', id: item.id, payload: { name: newName } })}
                        onDelete={() => dispatch({ type: 'delete', id: item.id })}
                        onRate={() => dispatch({ type: 'rate', id: item.id, rating: (item.rating || 0) + 1 })}
                    />
                </div>
            ))}
        </div>
    );
}

FlexContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            birth: PropTypes.string.isRequired,
            eyes: PropTypes.string.isRequired,
            rating: PropTypes.number,
        })
    ).isRequired,
};

export default FlexContainer;
