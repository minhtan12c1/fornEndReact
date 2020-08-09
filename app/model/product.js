import productApi from 'api/product';


const FIELD_NAMES = productApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
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
          ...FIELD_NAMES.description,

        },
        {
          ...FIELD_NAMES.store,
        },
        {
          ...FIELD_NAMES.brand,
        },
        {
          ...FIELD_NAMES.categories,
        },
        
        {
          ...FIELD_NAMES.image,
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
    };
  },
};

export default { dataModel };
