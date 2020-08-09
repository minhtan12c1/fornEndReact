import baseApi from './restApi';

const FIELD_NAMES = {
  product_id: {
    dataKey: 'product_id',
    header: 'ID',
    sortKey: 'product_id',
    index: true,
  },
  name: {
    dataKey: 'name',
    header: 'Name',
    sortKey: 'name',
    sendOnModify: true,
  },
  description: {
    dataKey: 'description',
    header: 'description',
    sortKey: 'description',
    optional: true,
    sendOnModify: true,
  },
  brand_id: {
    dataKey: 'brand_id',
    header: 'brand_id',
    sortKey: 'brand_id',
    sendOnModify: true,
    excludeGet: true,
  },
  brand: {
    dataKey: 'brand',
    header: 'brand',
    sortKey: 'brand',
  },
  categories_id: {
    dataKey: 'categories_id',
    header: 'categories_id',
    sortKey: 'brand',
    sendOnModify: true,
    excludeGet: true,
  },
  categories: {
    dataKey: 'categories',
    header: 'Categories',
    sortKey: 'categories',
  },
  image_id: {
    dataKey: 'image_id',
    header: 'image_id',
    sortKey: 'image_id',
    sendOnModify: true,
    excludeGet: true,
  },
  image: {
    dataKey: 'image',
    header: 'Image',
    sortKey: 'Image',
  },
  model_year: {
    dataKey: 'model_year',
    header: 'Model Year',
    sortKey: 'model_year',
    sendOnModify: true,
  },
  list_price: {
    dataKey: 'list_price',
    header: 'price',
    sortKey: 'list_price',
    sendOnModify: true,
  },
  store_id: {
    dataKey: 'store_id',
    header: 'store_id',
    sortKey: 'store_id',
    sendOnModify: true,
    sendOnDelete: true,
  },
  store: {
    dataKey: 'store',
    header: 'Store',
    sortKey: 'store',
  },
};

const TABLE_INFO = {
  urn: 'product',
  };
const MIB_INFO = Object.assign(TABLE_INFO, baseApi.buildMibInfoFromFieldNames(FIELD_NAMES));


export default {
  FIELD_NAMES,
  // delete(values,config, callback) {
  //   return baseApi.delete(values, MIB_INFO,config, callback);
  // },
  // create(values,config, callback) {
  //   return baseApi.create(values, true, MIB_INFO,config, callback);
  // },
  // modify(value,config, callback) {
  //   return baseApi.modify(value, MIB_INFO,config, callback);
  // },
  // getAll(callback,config,start, limit) {
  //   return baseApi.getAll(MIB_INFO,config,start, limit,callback);
  // },
  // getTotal(config,callback) {
  //   return baseApi.getTotal(TABLE_INFO,config,callback);
  // },
};
