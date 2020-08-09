import brandApi from '@/api/brand';


const FIELD_NAMES = brandApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      name: 'brand',
      fields: [
        {
          ...FIELD_NAMES.brand_name,
        },
      ],
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.brand_id,
        },
        {
          ...FIELD_NAMES.brand_name,
        },
      ],
    };
  },
  getTableProfile() {
    return {
      name: 'brand',
      api: brandApi,
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
