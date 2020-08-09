/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import TableDemo from 'components/TableDemo';
import Dialog from 'components/Dialog';

import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import HeaderLink from './HeaderLink';
import ListItemTitle from './ListItemTitle';

export default function ProductPage() {
  return (
    <div>
      <Helmet>
        <title>Product Page</title>
        <meta
          name="description"
          content="product"
        />
      </Helmet>
      <TableDemo>
      </TableDemo>
      <HeaderLink to="/product1/1">aaaa </HeaderLink>
      <Dialog>
      </Dialog>
      
      
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
