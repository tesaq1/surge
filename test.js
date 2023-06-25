var responseJson = JSON.parse($response.body);
var totalUsd = responseJson.data.totalUsd;
console.log(totalUsd);
$notification.post('通知', '余额', totalUsd);
$done({});