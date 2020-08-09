import productApi from '@/api/list-order';
import componentName from '@/components/component-name';

const FIELD_NAMES = productApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      name: 'product',
      fields: [
        {
          ...FIELD_NAMES.order_id,
        },
        {
          ...FIELD_NAMES.store_id,
        },
        {
          ...FIELD_NAMES.customer,
        },
        {
          ...FIELD_NAMES.order_status,
        },
        {
          ...FIELD_NAMES.order_date,
        },
        {
          ...FIELD_NAMES.order_total_price,
        },
        {
          ...FIELD_NAMES.playment_type,
        },
        {
          ...FIELD_NAMES.staff,
        },
      ],
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.order_id,
        },
        {
          ...FIELD_NAMES.customer,
        },
        {
          ...FIELD_NAMES.order_status,

        },
        {
          ...FIELD_NAMES.required_date,
        },
        {
          ...FIELD_NAMES.shipped_date,
        },
        {
          ...FIELD_NAMES.order_total_price,
        },
        {
          ...FIELD_NAMES.payment_type,
        },
        {
          ...FIELD_NAMES.staff,
        },
        {
          ...FIELD_NAMES.store,
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
          enable: false,
        },
        add: {
          enable: false,
        },
      },
      rowAction: {
        delete: {
          enable: false,
        },
        modify: {
          enable: true,
        },
      },
      customObjectDialog: componentName.ORDER_DETAIL,
      customTable: componentName.EL_DATA_TABLE_ORDER,
    };
  },
};

export default { dataModel };
