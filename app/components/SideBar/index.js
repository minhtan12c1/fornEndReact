import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import HeaderLink from './HeaderLink';
import messages from './messages';

function SideBar(props) {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem >
                    <HeaderLink to="/">
                        <FormattedMessage {...messages.dashboard} />
                    </HeaderLink>
                </MenuItem> 
            </Menu>
            <Menu iconShape="square">
                <MenuItem>
                    <HeaderLink to="/">
                        <FormattedMessage {...messages.home} />
                    </HeaderLink>
                </MenuItem>
                <MenuItem>
                    <HeaderLink to="/features">
                        <FormattedMessage {...messages.features} />
                    </HeaderLink>
                </MenuItem>
                <MenuItem>
                    <HeaderLink to="/product">
                        <FormattedMessage {...messages.product} />
                    </HeaderLink>
                </MenuItem>
             </Menu>
            {/* {React.Children.only(props.children)} */}
        </ProSidebar>
          );
        }
export default SideBar;