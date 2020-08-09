/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';



export default function ProductItemPage(props) {
  return (
    <div>
      <Helmet>
        <title>Product Item Page</title>
        <meta
          name="description"
          content="product"
        />
      </Helmet>
      {parseInt(props.match.params.id, 10)}
    </div>
  );
}
