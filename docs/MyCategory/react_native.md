---
id: alert
title: Alert
---

## Cài đặt React Native

- Chạy npm install

- Chạy react-native run-android

- Xảy ra lỗi

***Cách sửa lỗi: ***

- Trong file: F:\TNT\EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\analytics\RNFirebaseAnalyticsPackage.java

Đổi

```
import android.support.annotation.RequiresPermission;
```

thành:

```
import androidx.annotation.RequiresPermission;
```

- Trong file: F:\TNT\EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\messaging\RNFirebaseMessaging.java

Đổi

```
import android.support.v4.app.NotificationManagerCompat;
```

thành:

```
import androidx.core.app.NotificationManagerCompat;
```
