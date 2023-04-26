import axios from "axios";
import { BASEURL } from "../common/apiName";

export default function multipartService(url,formData) {
  return new Promise((resolve, reject) => {
    fetch({
      method: "post",
      url: BASEURL + url,
      data: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     accept: "application/json",
    //     // Authorization: `Bearer ${global.authToken}`
    //   }
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}
