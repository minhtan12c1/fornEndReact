import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  order_id: {
    name: 'order_id',
    label: 'ID',
    index: true,
  },
  product_id: {
    name: 'product_id',
    label: 'product_id',
  },
  order_detail_status: {
    name: 'order_detail_status',
    label: 'order_detail_status',
  },
  order_detail_quantity: {
    name: 'order_detail_quantity',
    label: 'order_detail_quantity',
  },
  order_detail_price: {
    name: 'order_detail_price',
    label: 'order_detail_price',
  },
  order_total_price: {
    name: 'order_total_price',
    label: 'order_total_price',
  },
};

const TABLE_INFO = {
  urn: 'list-order-detail',
  };
const MIB_INFO = Object.assign(TABLE_INFO, baseApi.buildMibInfoFromFieldNames(FIELD_NAMES));


export default {
  FIELD_NAMES,
  getAll(requestStore, config, callback) {
    return baseApi.getAll(Object.assign(MIB_INFO, requestStore),config,0, 10,callback);
  },
  getTotal(requestStore,config,callback) {
    return baseApi.getTotal(TABLE_INFO,requestStore,config,callback);
  },
};
