import detailApi from '@/api/order-detail';

const FIELD_NAMES = detailApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.order_id,
        },
        {
          ...FIELD_NAMES.product_id,
        },
        {
          ...FIELD_NAMES.order_detail_status,

        },
        {
          ...FIELD_NAMES.order_detail_quantity,
        },
        {
          ...FIELD_NAMES.order_detail_price,
        },
      ],
    };
  },
  getTableProfile() {
    return {
      name: 'detail',
      api: detailApi,
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
