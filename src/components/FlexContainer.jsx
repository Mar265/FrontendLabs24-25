import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

function FlexContainer({ element: Element, data }) {
  return (
    <div className="row"> {/* Użycie row jako kontenera */}
      {data.map((item, index) => (
        <div className="col-12 col-md-6 col-lg-4 p-2" key={index}> {/* Kolumny wewnątrz row */}
          <Element {...item} />
        </div>
      ))}
    </div>
  );
}

FlexContainer.propTypes = {
  element: PropTypes.elementType.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FlexContainer;
