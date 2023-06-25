var totalUsd = $response.body;
console.log(totalUsd);
$notification.post('通知', '余额', totalUsd.data.totalUsd);
$done({});