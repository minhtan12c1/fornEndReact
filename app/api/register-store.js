import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  store_id: {
    name: 'store_id',
    label: 'store_id',
    index: true,
  },
  user_name: {
    name: 'user_name',
    label: 'user_name',
    sendOnModify: true,
  },
  password: {
    name: 'password',
    label: 'password',
    sendOnModify: true,
  },
  name_store: {
    name: 'name_store',
    label: 'name_store',
    sendOnModify: true,
  },
  email_store: {
    name: 'email_store',
    label: 'email_store',
    sendOnModify: true,
  },
  street_store: {
    name: 'street_store',
    label: 'street_store',
    sendOnModify: true,
  },
  phone_store: {
    name: 'phone_store',
    label: 'phone_store',
    sendOnModify: true,
  },

};

const TABLE_INFO = {
  urn: 'register-store',
  };

const MIB_INFO = Object.assign(TABLE_INFO, baseApi.buildMibInfoFromFieldNames(FIELD_NAMES));


export default {
  FIELD_NAMES,
  getAll(callback,start, limit) {
    return baseApi.getAll(MIB_INFO,start, limit,callback);
  },
  delete(values, callback) {
    return baseApi.delete(values, MIB_INFO, callback);
  },
  create(values, callback) {
    return baseApi.create(values, true, MIB_INFO, callback);
  },
  modify(value, callback) {
    return baseApi.modify(value, MIB_INFO, callback);
  },
  getAll(callback,config,start, limit) {
    return baseApi.getAll(MIB_INFO,config,start, limit,callback);
  },
  getTotal(config,callback) {
    return baseApi.getTotal(TABLE_INFO,config,callback);
  },
};
