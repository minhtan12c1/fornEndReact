import categoriesApi from '@/api/categories';


const FIELD_NAMES = categoriesApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      name: 'categories',
      fields: [
        {
          ...FIELD_NAMES.categories_name,
        },
      ],
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.categories_id,
        },
        {
          ...FIELD_NAMES.categories_name,
        },
      ],
    };
  },
  getTableProfile() {
    return {
      name: 'categories',
      api: categoriesApi,
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
