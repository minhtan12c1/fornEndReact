import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  image_id: {
    name: 'image_id',
    label: 'image_id',
    index: true,
  },
  image_name: {
    name: 'image_name',
    label: 'image_name',
    sendOnModify: true,
  },
  image_url: {
    name: 'image_url',
    label: 'image_url',
    sendOnModify: true,
  },
};

const TABLE_INFO = {
  urn: 'image',
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
