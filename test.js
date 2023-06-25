let totalUsd = $response.body;
console.log(totalUsd);
$notification.post('通知', '标题', '内容');
$done({});