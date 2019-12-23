---
id: _myform
title: My Form
---

## **Mô tả**

Sơ lược về MyForm

## **Props**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| title | String | title của Button |
| color | String | màu của Button |
| outline | String | outline của Button |
| styleBtn | Object | style của Button |
| config | Object | config của Button |

***config***

| Tên | Type | Mô tả |
| --- | ---- |------ |
| APIName | String | tên của api |
| Code | String | (primary,success,danger) |
| Color_BG | String | (KO XAI) |
| ConfirmMsg | String | ConfirmMsg |
| Form | Object | config form của Button Form |
| Icon | String | icon của Button Form |
| MethodType | String | GET/POST |
| Name | String | tên của Button |
| NeedReload | Boolean | location.reload(): tải lại trang hiện tại|
| NeedReloadList | Boolean | reload table |
| OpenMode | String | (dùng cho kiểu Button Link) ="NewWindow" thì mở tab mới |
| RequestData | Object | (dùng cho kiểu Button Api và Upload) data truyền cho hàm gọi api|
| Type | String | type của Button |
| Url | String | api controller |
| More | Object | More của Config |

 ***More***

 | Tên | Type | Mô tả |
| --- | ---- |------ |
| color | String | color của Button |
| outline | String | outline của Button |
| title | String | title của Button |
| style  | String | style của Button |
| modal  | Object | config modal của Button |
| source  | String | source của Button |
| fQuery | String | field Query của data truyền lên khi gọi api |

## **Sử dụng**

```javascript
<MyButton title="My Button"/>
```

