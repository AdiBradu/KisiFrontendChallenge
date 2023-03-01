import React from 'react';
// components
import { Layout } from '../../layouts/Layout';
import { Tile } from '../../components/Tile/Tile';

export const MosaicPage: React.FC = () => {
  return (
    <Layout>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Layout>
  );
};
