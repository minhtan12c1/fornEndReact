import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  order_id: {
    name: 'order_id',
    label: 'ID',
    index: true,
  },
  customer: {
    name: 'customer',
    label: 'customer_name',
  },
  order_status: {
    name: 'order_status',
    label: 'order_status',
  },
  required_date: {
    name: 'required_date',
    label: 'required_date',
  },
  shipped_date: {
    name: 'shipped_date',
    label: 'shipped_date',
  },
  order_total_price: {
    name: 'order_total_price',
    label: 'order_total_price',
  },
  payment_type: {
    name: 'payment_type',
    label: 'payment_type',
  },
  staff: {
    name: 'staff',
    label: 'staff_name',
  },
  store: {
    name: 'store',
    label: 'store_name',
  },
  store_id: {
    name: 'store_id',
    label: 'store_id',
  },
};

const TABLE_INFO = {
  urn: 'list-order',
  additionalGetQuery: {
    request: 1,
    store_id: `${$cookies.get('staff').store_id}`,
    },
  };
const MIB_INFO = Object.assign(TABLE_INFO, baseApi.buildMibInfoFromFieldNames(FIELD_NAMES));


export default {
  FIELD_NAMES,
  delete(values,config, callback) {
    return baseApi.delete(values, MIB_INFO,config, callback);
  },
  create(values,config, callback) {
    return baseApi.create(values, true, MIB_INFO,config, callback);
  },
  modify(value,config, callback) {
    return baseApi.modify(value, MIB_INFO,config, callback);
  },
  getAll(callback,config,start, limit) {
    return baseApi.getAll(MIB_INFO,config,start, limit,callback);
  },
  getTotal(config,callback) {
    return baseApi.getTotal(TABLE_INFO,config,callback);
  },
};
