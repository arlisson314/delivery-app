import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function Provider({ children }) {
  const contextValue = useMemo(() => { 'teste'; }, []);

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
