---
id: debug_on_chrome
title: Debug On Chrome
---

***Những phương pháp debug thường sử dụng để phát triển Javascript***

1. Hàm Console.log — “lệnh bài” để debug

2. Hiển thị icon/color khi debug bằng console

## console.error

Khi bắt lỗi trong error handling:

```
console.error('get error');
```

Kết quả:

![console_error, the Linux mascot](/img/console_error.png)

## console.warn

```
console.warn('get warn');
```

Kết quả:

![console_warn, the Linux mascot](/img/console_warn.png)

## console.info

Sử dụng khi muốn vẽ chung line với console.log

Khi muốn nắm bắt những thay đổi của value trong các method dài, tôi sẽ sử dụng nó vào các point phải nhấn mạnh.

```
console.info('get info');
```

Kết quả:

![console_info, the Linux mascot](/img/console_info.png)

Được sử dụng để không làm sót các value phải xem đầu tiên trong khi đang thực hiện.

(VD với trường hợp nội dung value 3 là cái cần chú ý nhất)

![console_info2, the Linux mascot](/img/console_info2.png)

## Tạo array dễ nhìn thấy console.table

Ví dụ có array:

```
sample.js
var array=[{
  key1:'value1',
  key2:'value2',
  key3:'value3',
}];
```

console.log phần nội dung giữa của array:

```
console.log(array);
```

Kết quả:

![console_info2, the Linux mascot](/img/console_log2.png)

Hơi khó nhìn.

Giải quyết: dùng console.table

```
console.table(array);
```

Kết quả:

![](/img/console_table.png)

## Đo lường thời gian thực hiện

Đo lường tốc độ xử lí chương trình.

```
console.time('timer');
// Viết process bạn muốn đo lường thời gian
console.timeEnd('timer');
```

Kết quả:

![](/img/console_time.png)

## Điều tra nguồn gọi ra Argument

Sử dụng console.trace

```
function saba() {
  function aji() {
    function maguro() {
      //run console.trace
      console.trace();
    }
    maguro();
  }
  aji();
}
// run saba() function
saba();
```

Kết quả:

![](/img/console_trace.png)

3. Sử dụng Breakpoint

Restart, tạm ngưng,... trong khi đang thực hiện program.

Mở tab SOURCE của [Developer Tools] ra, click vào hàng bạn muốn thực hiện breakpoint.

![](/img/breakpoint.png)

Khi reload page trong trạng thái trên, những xử lý bằng breakpoint đã setting sẽ ngưng lại, có thể thực hiện step.

## Refresh xử lý từ breakpoint

Trường hợp refresh lại các xử lý từ breakpoint, nó sẽ hiện ra một loạt button giống như dưới đây, ở phía tay phải của tab SOURCE đã set breakpoint. Việc bạn cần làm chính là thực hiện từ chỗ này !

![](/img/breakpoint_2.png)

- Refresh xử lý

Khi ấn vào button này thì phần thực hiện sẽ tự động restart.

- Step over

Dù trong trường hợp gọi ra function đi nữa thì nó vẫn không di chuyển xử lý đến argument mà vẫn tiến hành đến hàng tiếp theo.

- Step in

Trong trường hợp gọi ra function, thì sẽ di chuyển xử lý đến function đó, rồi tiến hành xử lý trong function đã di chuyển đến.

- Step out

Thực hiện đến khi kết thúc function và exit function đó.

- Thao tác trên screen

Trường hợp đã setting breakpoint thì không chỉ [developer tools] mà trên screen cũng sẽ hiển thị button step over và restart xử lý, vậy nên ta có thể từ đó và thao tác tiếp.

![](/img/breakpoint_3.png)

## Thay đổi giá trị trong lúc thực hiện

![](/img/change_value.png)

Trên sampleArray của Scope bên phía tay phải Developer Tools:

```
Array[4]
0:1
1:2
2:3
3:4
```

Khi set như trên sẽ có thể xác nhận được:

![](/img/change_value2.png)

Trong Scope này, thử thay đổi sampleArray thành [100,2000,300,400]

![](/img/change_value3.png)

Kết quả trong tab Sources sẽ trở thành [100,200,300,400]

![](/img/change_value4.png)

Kết quả xử lý của tab Console:

![](/img/change_value5.png)

=> Bạn có thể thay đổi được giá trị ngay cả khi đang thực hiện step.

4. Check thông tin trong Network

Thông tin HTTP nào có thể truyền đi được?

Các status code hay response có bị gửi trả lại không? — Khi bạn muốn thử xác nhận việc đó, hãy tận dụng tab Network

Lấy ví dụ: thử access vào http://qiita.com/ xem nào.

Ta thấy ở đây “200 OK” được trả về

![](/img/network.png)

Mở Tab Headers trong Default ra rồi mở tab Response, bạn sẽ thấy file HTML được hiển thị giống như dưới đây:

![](/img/network2.png)

5. Cookie: Edit This Cookie

Browsing & Manipulating cookie đang sử dụng là EditThisCookie.

Link install: [https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ja](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ja) 

***Cách dùng***

Nếu Install thành công, sẽ hiện icon của cookie ở phía trên bên phải của Chrome. Hãy click vào đó.

![](/img/cookies.png)

Khi click vào, sẽ hiện ra list của cookie của website đó.

Trong lúc debug, thử thay đổi giá trị hay xóa giá trị!

![](/img/cookies2.png)

6. Thao tác Local Storage

![](/img/local_storage.png)