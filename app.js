const axios = require('axios');

const url = 'https://open.bigmodel.cn/api/paas/v3/model-api/chatglm_bosch_demo_0921_2/invoke';  
const token = 'eyJhbGciOiJIUzI1NiIsInNpZ25fdHlwZSI6IlNJR04iLCJ0eXAiOiJKV1QifQ.eyJhcGlfa2V5IjoiNjZlYTA2YmVmNDhkN2E1MDFiOGZhZDdhMTQ5ZTY5ZDgiLCJleHAiOjE3MDA0NzA4NzU5MTYsInRpbWVzdGFtcCI6MTY5NDQyMjg3NTkxNn0.SaT9IWmCYLTRVEJentKsuGXZxLhI9kkNnNg8WsFrdkw';
const requestData = {
    prompt: [{"role": "user", "content": "\n你是一个自然语言转SQL的生成器，根据自然语言直接输出SQL语句，不需要解释。\n表名和表字段如下：CREATE TABLE table_bosch (process VARCHAR COMMENT '工艺类型，包含dispensing,screwing,forming,welding四种', projectId VARCHAR COMMENT '项目id', sap VARCHAR COMMENT 'sap 编号', productSizeLength INT COMMENT '产品尺寸（长度）, productSizeWidth INT COMMENT '产品尺寸（宽度）, productSizeHeight INT COMMENT '产品尺寸（高度）, description VARCHAR COMMENT '项目描述') \n输入自然语言: 我们已经完成了多少个dispensing项目\n输出SQL:\n"}],

};


const axiosConfig = {
    method: 'POST', 
    url: url,
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json', 
    },
    data: requestData, 
  };
  


  axios(axiosConfig)
  .then(response => {
    // Handle the data from the successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Request failed:', error);
  });


