---
id: test
title: Create file test
---

1. Tạo file test trong: src/modules/TNT/_Test

2. Cẩu hình cho lần render đầu tiên sẽ là màn hình test (không phải màn hình Home)

- Trong file: src/modules/TNT/_Router: import file test trên

- Thêm màn hình đó trong createStackNavigator

- Đổi initialRouteName là tên import của file test đó

*Bây giờ thì reload lại trang màn hình test sẽ hiện lên đầu tiên*