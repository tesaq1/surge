$notification.post("通知","subtitle","你有一个通知");
const requrl = $request.url;
const TronLinkRegex = /^api\/v1\/wallet\/getLatestAPK\?address=[A-Za-z0-9]+&nonce=\d+&secretId=[A-Za-z0-9]+&signature=[A-Za-z0-9%]+$/;

///api/v1/wallet/getLatestAPK?address=TYtGyengaZQKkFU161uKCrRQQU2jJTNpv6&nonce=3691&secretId=ED151200DD0B3B52&signature=W5gBsApwNhp5GLgwA0Jho/77TbU%3D
// 测试 requrl 是否匹配正则表达式
if (TronLinkRegex.test(requrl)) {
    console.log("1111111111");
} else {
    console.log("222222222");
}
$done({});