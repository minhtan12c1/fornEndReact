import baseApi from '@/api/restApi';

const FIELD_NAMES = {
  product_id: {
    name: 'product_id',
    label: 'ID',
    index: true,
  },
  name: {
    name: 'name',
    label: 'Name Product',
    sendOnModify: true,
  },
  description: {
    name: 'description',
    label: 'description',
    sendOnModify: true,
  },
  brand_id: {
    name: 'brand_id',
    label: 'brand_id',
    sendOnModify: true,
    excludeGet: true,
  },
  brand: {
    name: 'brand',
    label: 'brand',
  },
  categories_id: {
    name: 'categories_id',
    label: 'categories_id',
    sendOnModify: true,
    excludeGet: true,
  },
  categories: {
    name: 'categories',
    label: 'Categories',
  },
  image_id: {
    name: 'image_id',
    label: 'image_id',
    sendOnModify: true,
    excludeGet: true,
  },
  image: {
    name: 'image',
    label: 'Image',
  },
  model_year: {
    name: 'model_year',
    label: 'Model Year',
    sendOnModify: true,
  },
  list_price: {
    name: 'list_price',
    label: 'price',
    sendOnModify: true,
  },
  store_id: {
    name: 'store_id',
    label: 'store_id',
    sendOnModify: true,
    sendOnDelete: true,
  },
  store: {
    name: 'store',
    label: 'Store',
  },
};

const TABLE_INFO = {
  urn: 'product-all',
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
  getProduct(callback,config,start, limit,queryData,brandSearch,categoriesSearch,storeSearch) {
    return baseApi.getAllProduct(MIB_INFO,config,start, limit,queryData,brandSearch,categoriesSearch,storeSearch,callback);
  },
  getTotalProduct(config,queryData,brandSearch,categoriesSearch,storeSearch,callback) {
    return baseApi.getTotal(TABLE_INFO,config,queryData,brandSearch,categoriesSearch,storeSearch,callback);
  },
};
