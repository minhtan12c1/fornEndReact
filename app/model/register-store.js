import productApi from '@/api/register-store';
import componentName from '@/components/component-name';
import { sha256 } from 'js-sha256';

const FIELD_NAMES = productApi.FIELD_NAMES;

const dataModel = {
  grid: [
    {
      title: 'product',
      component: componentName.REGISTER_STORE,
      componentProps: {
        dataModel: {
          getObjectModel() {
            return {
              name: 'register store',
              fields: [
                {
                  ...FIELD_NAMES.user_name,
                },
                {
                  ...FIELD_NAMES.password,
                  component: componentName.MY_TEXT_FIELD_PASSWORD,
                },
                {
                  ...FIELD_NAMES.name_store,
                },
                {
                  ...FIELD_NAMES.email_store,
                },
                
                {
                  ...FIELD_NAMES.street_store,
                },
                {
                  ...FIELD_NAMES.phone_store,
                }
              ],
              postDataTransform: (data) => {
                data.password = sha256(data.password)
                return data;
              },
            };
          },
          getTableProfile() {
            return {
              name: 'product',
              api: productApi,
            }
          }
        }
      }
    },
  ],
};

export default { dataModel };
