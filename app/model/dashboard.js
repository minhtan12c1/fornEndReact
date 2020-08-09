import productApi from '@/api/product-all';

import componentName from '@/components/component-name';

const FIELD_NAMES = productApi.FIELD_NAMES;

const dataModel = {
  grid: [
    {
      title: 'product',
      component: componentName.CUSTOM_VIEW_CONTENT,
      componentProps: {
        dataModel: {
          getObjectModel() {
            return {
              name: 'product',
              fields: [
              ],
            };
          },
          getDataTableModel() {
            return {
              visibleDataHeader: [
                {
                  ...FIELD_NAMES.product_id,
                },
                {
                  ...FIELD_NAMES.name,
                },
                {
                  ...FIELD_NAMES.brand_id,
                },
                {
                  ...FIELD_NAMES.categories_id,
                },
                
                {
                  ...FIELD_NAMES.image_id,
                },
                {
                  ...FIELD_NAMES.model_year,
                },
                {
                  ...FIELD_NAMES.list_price,
                },
              ],
            };
          },
          getTableProfile() {
            return {
              name: 'product',
              api: productApi,
              tableToolbar: {
                deleteSelected: {
                  enable: true,
                },
                add: {
                  enable: true,
                },
              },
              rowAction: {
                delete: {
                  enable: true,
                },
                modify: {
                  enable: true,
                },
              },
            }
          }
        }
      }
    },
  ],
};

export default { dataModel };
