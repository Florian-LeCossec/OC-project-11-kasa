import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mockData from '@/mock.json';
import DataContext from './dataContext';

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setData(mockData);
        } catch (error) {
          console.error('Erreur lors du chargement du fichier JSON:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};