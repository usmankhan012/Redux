import axios from 'axios';
import { BASEURL } from '../common/apiName';
export const postService = async (urlAction, params) => {
  let ServiceUrl = BASEURL + urlAction;
  var data = JSON.stringify(params);
  let headers = {
    'Content-Type': 'application/json',
     'Authorization': '',};

   {console.log("toooookkkkkknnnnnn.......",params)}
   {console.log("headerssssss.......",headers)}
   {console.log("ServiceUrl.......",ServiceUrl)}

   var config = {
    method: 'post',
    url: 'https://wofich.herokuapp.com/api/user/change-password',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY2ODAwMDY4MSwiZXhwIjoxNjY4MDg3MDgxfQ.TGlOgwB2aIzNcYS0QuIechat2SR6kigolOVt9f9gr6Q', 
      'Content-Type': 'application/json'
    },
    data : data
  };

  return new Promise(function (resolve, reject) {
    fetch(config)
      .then(async (reponse) => {
        console.log("reponse.......",reponse)
        resolve(reponse);
      })
      .catch((error) => {
        console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrr",error);
        reject(error);
      });
  });
};
