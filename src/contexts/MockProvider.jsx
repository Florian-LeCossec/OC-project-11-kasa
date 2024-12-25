import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './dataContext';

export const DataProvider = ({ children, dataFiles }) => {
    const [data, setData] = useState({});

    useEffect(() => {
      console.log(dataFiles);
      const fetchData = async () => {
        try {
          setData(dataFiles);
        } catch (error) {
          console.error('Erreur lors du chargement des données:', error);
        }
      };
      fetchData();
    }, [dataFiles]);
  
    return (
      <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
    dataFiles: PropTypes.object.isRequired,
};