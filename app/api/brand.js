import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  brand_id: {
    name: 'brand_id',
    label: 'brand_id',
    index: true,
  },
  brand_name: {
    name: 'brand_name',
    label: 'brand_name',
    sendOnModify: true,
  },
};

const TABLE_INFO = {
  urn: 'brand',
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
