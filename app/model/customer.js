import customerApi from '@/api/customer';


const FIELD_NAMES = customerApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      name: 'customer',
      fields: [
        {
          ...FIELD_NAMES.name,
        },
        
        {
          ...FIELD_NAMES.email,
        },
        
        {
          ...FIELD_NAMES.city,
        },
        {
          ...FIELD_NAMES.phone,
        },
      ],
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.customer_id,
        },
        {
          ...FIELD_NAMES.name,
        },
        
        {
          ...FIELD_NAMES.email,
        },
        {
          ...FIELD_NAMES.phone,
        },
        {
          ...FIELD_NAMES.city,
        },
      ],
    };
  },
  getTableProfile() {
    return {
      name: 'customer',
      api: customerApi,
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
