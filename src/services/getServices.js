import axios from 'axios';
import { BASEURL } from '../common/apiName';
export const getService = async (urlAction, getParams) => {
  let ServiceUrl = BASEURL + urlAction;
  // let headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  //   Token: Token,
  // };

  return new Promise(function (resolve, reject) {
    fetch({
      method: 'get',
      url: ServiceUrl,
      timeout: 1000 * 60,
      params: getParams,
      // headers: headers,
    })
      .then(async (reponse) => {
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
