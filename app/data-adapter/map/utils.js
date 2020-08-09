export default {
    /**
     * This function will convert API data to UI data that will be showed in browser
     * @param adapterMap: object contains data pair of API and UI with structure
     *                  { KEY_NAME: { value: <api-value>, text: <ui-value> }}
     * @param data: API data
     * @returns {*}: UI data
     */
    convertApiDataToUiData(adapterMap, data) {
      let result;
      const valuePairs = Object.values(adapterMap);
      const convertSingleData = function convertSingleData(singleData) {
        for (let i = 0; i < valuePairs.length; i++) {
          if (`${singleData}` === `${valuePairs[i].value}`) {
            return valuePairs[i].text;
          }
        }
        return singleData;
      };
      if (data !== null && data !== undefined) {
        if (data instanceof Array) {
          result = [];
          data.forEach((singleData) => {
            result.push(convertSingleData(singleData));
          });
        } else {
          result = convertSingleData(data);
        }
      }
  
      return result;
    },
  
  
    /**
     * This function will convert UI data to API data that will be sent to the web server
     * @param adapterMap: array of mapping data [[ 'API data', 'UI data' ], ...]
     * @param data: UI data
     * @returns {*}: API data
     */
    convertUiDataToApiData(adapterMap, data) {
      let result = data;
      const valuePairs = Object.values(adapterMap);
      const convertSingleData = function convertSingleData(singleData) {
        for (let i = 0; i < valuePairs.length; i++) {
          if (`${singleData}` === valuePairs[i].text) {
            return valuePairs[i].value;
          }
        }
        return singleData;
      };
      if (data) {
        if (data instanceof Array) {
          result = [];
          data.forEach((singleData) => {
            result.push(convertSingleData(singleData));
          });
        } else {
          result = convertSingleData(data);
        }
      }
      return result;
    },
  
    /**
     * get list of UI data part for field
     * @param adapterMap
     * @returns {Array}
     */
    getUiDataList(adapterMap) {
      const result = [];
      const valuePairs = Object.values(adapterMap);
      valuePairs.forEach((valuePair) => {
        result.push(valuePair.text);
      });
      return result;
    },
  };
  