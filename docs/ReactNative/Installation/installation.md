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

***Cách sửa lỗi thưởng sử dụng***: 

* Để tiện xem lỗi: mở project bằng Android Studio → run app (nút mũi tên ở góc trên bên phải) → Hiện ra lỗi → Xem lỗi ở đâu. Thông thường có các lỗi:

* Lỗi ở fire base

* Lỗi thiếu file **keystore** → Tự tạo file keystore debug (bấm mã lệnh hoặc lấy một file keystore có sẵn (có thể copy keystore ở project đã chạy được)

* Run lại trên Android Studio (trước hết phải kiểm tra máy ảo có kết nối internet được không)

* Update Android Studio (Help → Check for Update) → Cài đặt lại cấu hình

* Nếu build vẫn lỗi → Xóa file build cũ (app → build → Select all file → Delete(EzyClient_RN_T72019 → android → app → build)

* Nếu máy ảo nãy không được thì thử máy ảo khác

* Chạy lại react-native run-android → react-native start → reload (Ctrl + M để mở menu nếu debug bằng máy ảo trên máy tính) → Nếu chưa được reload tiếp → Tắt app mở lại nhiều lần

* Nếu khi mở máy ảo Genymotion rồi chạy "react-native run-android" mà bị lỗi thì mở Android Studio -> Chọn run app -> App sẽ được cài đặt trên Genymotion -> Có thể tắt Android Studio rồi chạy bình thường bằng command line
