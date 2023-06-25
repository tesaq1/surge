var responseJson = JSON.parse($response.body);

console.log(responseJson); // 输出整个响应体以检查其结构

if (responseJson && responseJson.data && responseJson.data.hasOwnProperty('totalUsd')) {
    var totalUsd = responseJson.data.totalUsd;
    console.log(totalUsd); // 输出 totalUsd 的值
} else {
    console.log('data or totalUsd property not found in the response');
}

$notification.post('通知', '余额', totalUsd);
$done({});