---
id: build
title: Build
---

## **Build để Debug (cần một server ảo để chạy)**

- Khi mới lấy sourve về, trong lần đầu cài đặt: chạy "npm install"

- Chạy "react-native run-android"

## **Build Release (không cần server ảo)**

***Tạo keystore***

1. Vào thư mục C:\Program Files\Java\jdkx.x.x\bin 

2. Mở cmd và chạy 

```
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

3. Trong source code mở file "gradle.properties"

4. Khi chạy lệnh cmd xong sẽ yêu cầu nhập password: Password đầu tiên: ta nhập APP_RELEASE_STORE_PASSWORD ("Passw0rd@123"); Password thứ 2: APP_RELEASE_KEY_PASSWORD ("Passw0rd@123")

> Lỗi: "Access is denied"

> **Cách sửa lỗi: Chạy với tuyền Admin**

>> - Click Start 

>> - Searh Command Prompt 

>> - Hiện lên biểu tượng Command Prompt trên thanh Start 

>> - Click phải chọn Run as Adminastrator 

>> - Hiện lên hộp thoại cmd chạy với tuyền admin

>> - "cd" đến thư mục muốn chạy với quyền admin: "cd C:\Program Files\Java\jdk1.8.0_221\bin" 

>> - Tạo keystore theo các bước như ở trên

***Build ra file apk - dùng để cài vô máy***

*Buld bằng Android Studio*

1. Mở thư mục Android của project bằng Android Studio

2. Click tab **Build**, chọn **Generate signed bundle / APK**

3. Select APK -> Click Next

4. Chọn Create New

5. Xuất hiện hộp thoại New Key Store

6. Key store path: Chọn thư mục muốn tạo file jks -> Đặt tên file

7. Nhập password: là password lúc tạo keystore, confirm password

8. Allias: "app_alias", password, confirm password giống keystore

9. Những cái còn lại nhập đại rồi => OK

10. File apk có trong F:\MOBILE_REACTNATIVE\TracNTrace\EzyClient-RN-T72019\android\app\release

*Build bằng command line*

1. Tạo keystore

2. Trong file /gradle.properties: thêm 

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=****
MYAPP_RELEASE_KEY_PASSWORD=****
```

3. Trong file app/build.gradle:

```
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

4. cd android và chạy gradlew assembleRelease

File apk sẽ được tìm thấy trong android/app/build/outputs/apk/app-release.apk

***Build ra file aab - dùng để up lên Google Store***

*Tham khảo: [](https://facebook.github.io/react-native/docs/signed-apk-android)*

5. Setting up Gradle variables

6. Adding signing config to your app's Gradle config

7. Generating the release APK

```
$ cd android
$ gradlew bundleRelease
```

*Đợi ... hơi bị lâu@@*