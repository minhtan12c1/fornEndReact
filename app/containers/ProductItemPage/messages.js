/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ProductPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'product',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'productproductproductproductproductproduct',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `product productproductproductproduct`,
  },
});
