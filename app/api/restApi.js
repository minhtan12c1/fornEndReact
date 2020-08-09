import qs from 'qs';
import axios from 'axios';

export default {
  sendPost(queryObject, mibObjectParam,headers, callback) {
    // const postParms = qs.stringify(mibObjectParam);
    const promise = axios.post( queryObject.urn, mibObjectParam, headers);
    if (callback) {
        promise.then((response) => {
            callback(response);
        });
    }
    return promise;
  },
  sendPut(queryObject, mibObjectParam,headers, callback) {
    // const postParms = qs.stringify(mibObjectParam);
    const promise = axios.put( queryObject.urn, mibObjectParam, headers);
    if (callback) {
        promise.then((response) => {
            callback(response);
        });
    }
    return promise;
  },
  sendPostHeader(urn, body, config, callback) {
    const promise =  axios.post(urn, body, config);
    if (callback) {
      promise.then((response) => {
        callback(response);
      });
    }
    return promise;
  },
  sendDelete(queryObject, mibObjectParam,config, callback) {
    console.log(mibObjectParam)
    // const postParms = qs.stringify(mibObjectParam);
    const promise = axios.post( `${queryObject.urn}-delete`, mibObjectParam,config);
    if (callback) {
        promise.then((response) => {
            callback(response);
        });
    }
    return promise;
  },
  URL:  '?',
    sendGet(queryObject, urn, config, callback) {
        const query = qs.stringify(queryObject);
        const promise = axios.get(urn + this.URL + query, config);
        if (callback) {
          promise.then((response) => {
            callback(response);
          });
        }
        return promise;
      },
  // sendGet(urn, param, config, callback) {
  //   let uri = '';
  //   if (param) {
  //     uri = URL + qs.stringify(param);
  //   }
  //   const promise = axios.get(urn + uri, config);
  //   if (callback) {
  //     promise.then((response) => {
  //       callback(response);
  //     });
  //   }
  //   return promise;
  // },
  sendGetTable(queryObject, urn,config, callback) {

    return this.sendGet(queryObject, urn,config, callback);
},
getAll(mibInfo,config, start, limit,callback) {
    let paramObj = {};
    let urn = mibInfo.urn;
    paramObj = this.prepareMibParamForGetFields(mibInfo, start, limit);
    return this.sendGetTable(paramObj, urn,config, callback).then(response => {
        response.paramObj = paramObj;
        return Promise.resolve(response);
    });
},
prepareMibParamForGetFieldsProduct(mibInfo,start, limit,query,brandSearch, categoriesSearch,storeSearch) {
  let result = {};
  result['request']= 1;
  if (mibInfo.additionalGetQuery) {
      result = Object.assign(result, mibInfo.additionalGetQuery);
  }
  if (brandSearch) {
    result['brand-search']= brandSearch;
  }
  
  if (categoriesSearch) {
    result['categories-search']= categoriesSearch;
  }
  
  if (storeSearch) {
    console.log(storeSearch)
    console.log(storeSearch.join('%'))
    result['store-search']= storeSearch.join('%');
  }
  if (query) {
    result['query']= query;
}
  result['start']= start;
  result['limit']= limit;
  return result;
},
getAllProduct(mibInfo,config, start, limit,query, brandSearch,categoriesSearch, storeSearch,callback) {
  let paramObj = {};
  let urn = mibInfo.urn;
  paramObj = this.prepareMibParamForGetFieldsProduct(mibInfo, start, limit,query, brandSearch, categoriesSearch, storeSearch);
  return this.sendGet(paramObj, urn,config, callback).then(response => {
      response.paramObj = paramObj;
      return Promise.resolve(response);
  });
},
additionalGetQueryFields(mibInfo,query) {
  let result = {};
  if (mibInfo.additionalGetQuery) {
      result = Object.assign(result, mibInfo.additionalGetQuery);
  }
  if (query) {
    result['query']= query;
  }
  
  return result;
},
additionalGetQueryTotal(mibInfo,query,brandSearch,categoriesSearch, storeSearch,store_id) {
  let result = {};
  if (mibInfo.additionalGetQuery) {
      result = Object.assign(result, mibInfo.additionalGetQuery);
  }
  if (brandSearch) {
    result['brand-search']= brandSearch;
  }
  if (store_id) {
    result['store_id']= store_id;
  }
  if (categoriesSearch) {
    result['categories-search']= categoriesSearch;
  }
  
  if (storeSearch) {
    result['store-search']= storeSearch;
  }
  if (query) {
    result['query']= query;
  }
  return result;
},
getTotal(TABLE_INFO, config,query,brandSearch,categoriesSearch, storeSearch,callback) {
    let paramObj = {};
    paramObj = this.additionalGetQueryTotal(TABLE_INFO,query,brandSearch,categoriesSearch, storeSearch);
    let urn = `${TABLE_INFO.urn}-total`;
    return this.sendGet(paramObj, urn, config, callback).then(response => {
        response.paramObj = paramObj;
        return Promise.resolve(response);
    });
},
prepareMibParamForGetFields(mibInfo,start, limit,query,brandSearch) {
    let result = {};
    result['request']= 1;
    // let count = 0;
    // mibInfo.allFields.forEach((field) => {
    //     result[`${count}`] = field;
    //     count++ ;
    // });

    if (mibInfo.additionalGetQuery) {
        result = Object.assign(result, mibInfo.additionalGetQuery);
    }
    if (brandSearch) {
      result['brand-search']= brandSearch;
    }
    if (query) {
      result['query']= query;
  }
    result['start']= start;
    result['limit']= limit;
    return result;
},
create(object, supportRange, mibInfo,config, callback,) {
  const indexs = [];
  mibInfo.indexs.forEach((value) => {
      if (value instanceof String) {
          indexs.push(value);
      } else {
          indexs.push(value.name);
      }
  });
  let mibObject = {};
  mibObject = this.convertObjectToMibParamForAdding(object, mibInfo);
  return this.sendPost(this.generatePostQueryObject(mibInfo, 'create'), mibObject,config, callback);
},
createImage(object, supportRange, mibInfo, callback) {
  let token = ''
  let headers = new Headers({'Content-Type': 'multipart/form-data'});

    if(token !== '') {
        headers.append('TOKEN', this.$session.get(access_token));
      }
  const indexs = [];
  mibInfo.indexs.forEach((value) => {
      if (value instanceof String) {
          indexs.push(value);
      } else {
          indexs.push(value.name);
      }
  });
  let mibObject = {};
  mibObject = this.convertObjectToMibParamForAdding(object, mibInfo);
  return this.sendPost(this.generatePostQueryObject(mibInfo, 'create'), mibObject, callback, {headers});
},
modify(object, mibInfo,config, callback) {
    let mibObject = {};
    mibObject = this.convertObjectToMibParamForModifying(object, mibInfo);
    return this.sendPut(this.generatePostQueryObject(mibInfo, 'modify'), mibObject,config, callback);
},
delete(object, mibInfo, callback) {
    const mibObject = this.convertObjectToMibParamForDeleting(object, mibInfo);
    return this.sendDelete(this.generatePostQueryObject(mibInfo, 'delete'), mibObject, callback);
},
convertObjectToMibParamForAdding(object, mibInfo) {
    const mibObject = {};
    let count = 0;
    mibInfo.indexs.forEach((val) => {
      if (Array.isArray(object[val]) && object[val].length > count) {
        count = object[val].length;
      }
    });
    mibInfo.indexs.forEach((index) => {
      if ((!Array.isArray(object[index]) && count) || (Array.isArray(object[index]) && object[index].length < count)) {
        object[index] = this.formatIndexValue(object[index], count);
      } else if (Array.isArray(object[index]) && object[index].length === count) {
        let temp = '';
        for (let i = 0; i < count; i++) {
          if (i !== 0) {
            temp += `|${object[index][i]}`;
          } else {
            temp += object[index][i];
          }
        }
        object[index] = temp;
      }
    });
    const objectKeys = Object.keys(object);
    objectKeys.forEach((objectKey) => {
      const objectValue = (object[objectKey] !== null && object[objectKey] !== undefined) ? `${object[objectKey]}` : '';
      if (mibInfo.indexs.includes(objectKey)) {
         mibObject[`${objectKey}`] = `${objectValue}`;
      } else if (objectValue.length && objectValue.length > 0) {
        mibObject[`${objectKey}`] = `${objectValue}`;
      }
    });
    return mibObject;
},
convertObjectToMibParamForModifying(object, mibInfo) {
    const mibObject = {};
    mibInfo.indexs.forEach((index) => {
      if (object[index]) {
        mibObject[`${index}`] = `${object[index]}`;
      }
    });
    mibInfo.modifyFields.forEach((field) => {
      if (object[field] !== null && object[field] !== undefined && object[field] !== '') {
        mibObject[`${field}`] = `${object[field]}`;
      }
    });
    return mibObject
  },
convertObjectToMibParamForDeleting(objects, mibInfo) {
    const objectValue = {};
    for (let i = 0; i < mibInfo.indexs.length; i++) {
        const index = mibInfo.indexs[i];
        for (let j = 0; j < objects.length; j++) {
            objectValue[`${mibInfo.indexs[i]}`] = `${objects[j][index]}`;
        }

    }
    if (mibInfo.deleteFields && mibInfo.deleteFields instanceof Array) {
      for (let i = 0; i < mibInfo.deleteFields.length; i++) {
        const field = mibInfo.deleteFields[i];
        objectValue[`${field}`] = `${objects[i][field]}`;
      }
    }
    return objectValue
},

generatePostQueryObject(mibInfo, action) {
    let tableName = mibInfo.urn;
    let delim = '';
    if (action === 'create') {
        if (mibInfo.postRequestOrder) {
            tableName = '';
            const tables = Object.keys(mibInfo.postRequestOrder);
            tables.forEach((table) => {
                tableName += delim + mibInfo.postRequestOrder[table].urn;
                delim = '|';
            });
        }
    } else if (action === 'modify') {
        if (mibInfo.modifyUrn) {
            tableName = mibInfo.modifyUrn;
        }
    } else if (action === 'delete') {
        if (mibInfo.deleteRequest) {
            tableName = '';
            mibInfo.deleteRequest.forEach((table) => {
                tableName += delim + table.urn;
                delim = '|';
            });
        }
    }
    const retVal = {
        urn: tableName,
    };
    return retVal;
},
buildMibInfoFromFieldNames(fieldNames) {
    const mibInfo = {
        fieldNames,
        modifyFields: [],
        deleteFields: [],
        indexs: [],
        allFields: [],
    };
    const keys = Object.keys(fieldNames);
    keys.forEach((key) => {
        const field = fieldNames[key];
        // if (window.capabilityUtils.isCapableVariable(field)) {
        if (field.sendOnModify) {
            mibInfo.modifyFields.push(key);
        }
        if (field.sendOnDelete) {
            mibInfo.deleteFields.push(key);
        }
        if (field.index) {
            mibInfo.indexs.push(key);
        }
        if (!field.excludeGet) {
            mibInfo.allFields.push(key);
        }
        // }
    });
    return mibInfo;
},
};
