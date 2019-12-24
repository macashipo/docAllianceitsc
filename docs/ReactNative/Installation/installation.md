---
id: installation
title: Installation
---

## **Các bước cài đặt**

1. Lấy source về máy

Dùng link git: link git của project TracNTrace là http://git.allianceitsc.com:8080/EzyClient-RN-T72019.git

Sử dụng câu lệnh "git clone"

2. Chạy project

- Mở máy ảo 

- Vào thư mục (có file android): chạy “npm install”

- Chạy "react-native run-android"

- Nếu xảy ra lỗi => Sửa lỗi:

***Các lỗi thường gặp và cách xử lí***: 

* Để tiện xem lỗi: mở project bằng Android Studio → run app (nút mũi tên ở góc trên bên phải) → Hiện ra lỗi → Xem lỗi ở đâu. Thông thường có các lỗi:

* Lỗi ở fire base

* Lỗi thiếu file **keystore** → Tự tạo file keystore debug (bấm mã lệnh hoặc lấy một file keystore có sẵn (có thể copy keystore ở project đã chạy được)

* Run lại trên Android Studio (trước hết phải kiểm tra máy ảo có kết nối internet được không)

* Update Android Studio (Help → Check for Update) → Cài đặt lại cấu hình

* Nếu build vẫn lỗi → Xóa file build cũ (app → build → Select all file → Delete(EzyClient_RN_T72019 → android → app → build)

* Nếu máy ảo nãy không được thì thử máy ảo khác

* Chạy lại react-native run-android → react-native start → reload (Ctrl + M để mở menu nếu debug bằng máy ảo trên máy tính) → Nếu chưa được reload tiếp → Tắt app mở lại nhiều lần

* Nếu khi mở máy ảo Genymotion rồi chạy "react-native run-android" mà bị lỗi thì mở Android Studio -> Chọn run app -> App sẽ được cài đặt trên Genymotion -> Có thể tắt Android Studio rồi chạy bình thường bằng command line

***Lỗi phải sửa ở trong code***

- Trong file EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\analytics\RNFirebaseAnalyticsPackage.java

Đổi:

```
import android.support.annotation.RequiresPermission;
```

thành:

> import androidx.annotation.RequiresPermission;

- Trong file: EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\messaging\RNFirebaseMessaging.java

+ Đổi 

```
import android.support.v4.app.NotificationManagerCompat;
```

thành:

> import androidx.core.app.NotificationManagerCompat;

+ Đổi 

```
import android.support.v4.app.NotificationManagerCompat;
```

thành:

> import androidx.core.app.NotificationManagerCompat;

- Trong flie: EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\notifications\RNFirebaseNotifications.java

Đổi:

```
import android.support.v4.app.RemoteInput;
import android.support.v4.content.LocalBroadcastManager;
```

thành:

>import androidx.core.app.RemoteInput;
>
>import androidx.localbroadcastmanager.content.LocalBroadcastManager;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\messaging\RNFirebaseMessagingService.java

Đổi:

```
import android.support.v4.content.LocalBroadcastManager;
```

thành

> import androidx.localbroadcastmanager.content.LocalBroadcastManager;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\notifications\DisplayNotificationTask.java

Đổi:

```
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.RemoteInput;
```

thành:

> import androidx.core.app.NotificationCompat;
>
> import androidx.core.app.RemoteInput;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\notifications\RNFirebaseBackgroundNotificationActionReceiver.java

Đổi:

```
import android.support.v4.app.RemoteInput;
```

thành:

> import androidx.core.app.RemoteInput;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\notifications\RNFirebaseNotificationManager.java

Đổi:

```
import android.support.annotation.RequiresApi;
import android.support.v4.content.LocalBroadcastManager;
```

thành:

> import androidx.annotation.RequiresApi;
>
> import androidx.localbroadcastmanager.content.LocalBroadcastManager;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\ReactNativeFirebaseAppRegistrar.java

Đổi:

```
import android.support.annotation.Keep;
```

thành:

> import androidx.annotation.Keep;

- EzyClient-RN-T72019\node_modules\react-native-firebase\android\src\main\java\io\invertase\firebase\storage\RNFirebaseStoragePackage.java

```
import android.support.annotation.RequiresPermission;
```

=> 

> import androidx.annotation.RequiresPermission;

- EzyClient-RN-T72019\node_modules\react-native-gesture-handler\android\src\main\java\com\swmansion\gesturehandler\react\RNGestureHandlerEvent.java

Đổi:

```
import android.support.v4.util.Pools
```

thành:

> import androidx.core.util.Pools;

- EzyClient-RN-T72019\node_modules\react-native-gesture-handler\android\src\main\java\com\swmansion\gesturehandler\react\RNGestureHandlerStateChangeEvent.java

Đổi:

```
import android.support.v4.util.Pools;
```

thành:

> import androidx.core.util.Pools;

