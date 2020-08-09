import dataTypeUtils from 'data-adapter/map/utils';

export default {
    convertApiData(fields, data) {
        if (!fields || (Array.isArray(fields) && !fields.length)) {
          return data
        }
        const result = Object.assign({}, data);
        fields.forEach((field) => {
          if (field.adapter && field.adapter.toUiData) {
            result[field.name] = field.adapter.toUiData(result[field.name], result);
          }
          if (field.adapterMap) {
            result[field.name] = dataTypeUtils.convertApiDataToUiData(field.adapterMap, result[field.name]);
          }
        })
        return result;
      },

    transformTableDataToUI(dataTableModel, data) {
        let result = data;
    
        result = this.convertApiData(dataTableModel.visibleDataHeader, result);
        result = this.convertApiData(dataTableModel.expandDataHeader, result);
    
        return result;
      },
    transformUiObjectToApi(object, objectDefinition) {
        let tmpObject = Object.assign({}, object);
        objectDefinition.fields.forEach((field) => {
            if (tmpObject[field.name] == null || tmpObject[field.name] == undefined) {
                return;
            }
            if (field.adapterMap) {
                tmpObject[field.name] = dataTypeUtils.convertUiDataToApiData(field.adapterMap, object[field.name]);
            }
            if (field.adapter && field.adapter.toApiData) {
                tmpObject[field.name] = field.adapter.toApiData(tmpObject[field.name], object);
            }
            if (!field.adapterMap && !field.adapter) {
                tmpObject[field.name] = object[field.name];
            }
        });
        if (objectDefinition.postDataTransform) {
            tmpObject = objectDefinition.postDataTransform(tmpObject);
        }
        return tmpObject;
    },
}
