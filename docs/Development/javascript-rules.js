## Các phương thức của Array

Các phương thức:
- Array.from
- Array.prototype.every
- Array.prototype.filter
- Array.prototype.find
- Array.prototype.findIndex
- Array.prototype.map
- Array.prototype.reduce
- Array.prototype.reduceRight
- Array.prototype.some
- Array.prototype.sort

Hàm bên trong cần phải có trả về
Ví dụ:
```
var merged = arr.reduce(function(a, b) {
  return a.concat(b);
});
```

## Sử dụng try ... catch

Ví dụ:
```
function foo() {
    try {
        return 1; // We expect 1 to be returned
    } catch(err) {
        return 2; // Or 2 in cases of error
    }
}
```
## Sử dụng if

Dùng if phải luôn ở dòng mới, tránh trường hợp:
```
if (condition1) {
  // ...
} if (condition2) {  // Noncompliant
  //...
}
```
## Sử dụng new

Chỉ sử dụng new với function

Ví dụ:
```
/**
 * @constructor
 */
function MyClass() {
  this.foo = 'bar';
}

var someClass = function(){
  this.prop = 1;
}

var obj1 = new someClass;  // Compliant
var obj2 = new MyClass();  // Compliant regardless of considerJSDoc value
```

