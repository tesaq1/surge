$notification.post("通知","subtitle","你有一个通知");
const requrl = $request.url;
const headers = $request.headers;
console.log(headers);
console.log($request.headers['User-Agent']);
const type = ['TronLink/1 CFNetwork/1408.0.4 Darwin/22.5.0','1']
// 获取 User-Agent 字符串
const userAgent = headers['User-Agent'];

// 检查 User-Agent 字符串是否包含 type 数组中的任何值
const isValueInUserAgent = type.some(value => userAgent.includes(value));

if (isValueInUserAgent) {
    // 如果 User-Agent 包含 type 数组中的任何值，则在此处执行相应的操作
    console.log('User-Agent contains a value from the type array.');
} else {
    console.log('User-Agent does not contain any values from the type array.');
}

$done({});