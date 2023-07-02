$notification.post("通知","subtitle","你有一个通知");
const requrl = $request.url;
const headers = $request.headers;
console.log(headers);
console.log($request.headers['User-Agent']);
$done({});
const type = ['TronLink/1 CFNetwork/1408.0.4 Darwin/22.5.0','122']
// 检查 headers 对象中是否包含 type 数组中的任何值
const foundValue = type.find(value => {
    // 检查每个 header 的值是否包含 type 数组中的值
    return Object.values(headers).some(headerValue => headerValue.includes(value));
});

if (foundValue) {
    // 如果找到匹配的值，则在此处返回或处理它
    console.log(`Found value: ${foundValue}`);
} else {
    console.log('No matching values found.');
}

function GetType() {
    
    
}