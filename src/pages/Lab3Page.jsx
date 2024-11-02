import React from 'react';
import FlexContainer from '../components/FlexContainer';
import Item, { data } from '../components/Item';

const Lab3Page = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Laboratorium 3</h1>
      <p>Komponenty, właściwości i stan</p>
      <FlexContainer element={Item} data={data} />
    </div>
  );
};

export default Lab3Page;
