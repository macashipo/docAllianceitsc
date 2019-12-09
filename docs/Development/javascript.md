---
id: javascript
title: Javascript
---

## **Callback of array methods**

Callback của một số method sau nên có lệnh return:

* Array.from
* Array.prototype.every
* Array.prototype.filter
* Array.prototype.find
* Array.prototype.findIndex
* Array.prototype.map
* Array.prototype.reduce
* Array.prototype.reduceRight
* Array.prototype.some
* Array.prototype.sort

Ví dụ:

Không nên viết:

```
var merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement
```

Cách giải quyết:

```
var merged = arr.reduce(function(a, b) {
  return a.concat(b);
});
```

## **Vòng lặp không nên vô hạn**

Mỗi vòng lặp nên có điều kiện kết thúc

Không nên viết:

```
for (;;) {  // Noncompliant; end condition omitted
  // ...
}

var j = 0;
while (true) { // Noncompliant; constant end condition
  j++;
}

var k;
var b = true;
while (b) { // Noncompliant; constant end condition
  k++;
}
```

Cách giải quyết:

```
while (true) { // break will potentially allow leaving the loop
  if (someCondition) {
    break;
  }
}

var k;
var b = true;
while (b) {
  k++;
  b = k < 10;
}

outer:
while(true) {
  while(true) {
    break outer;
  }
}
```

## **Hard-coded credentials are security-sensitive (chưa hiểu lắm - hỏi lại) **

Các thông tin đăng nhập không nên được hard-coded

Ví dụ:

Không nên viết:

```
const password = "asdasd";

let my_pwd;
my_pwd = "qwerewt";

login({ passwd: "zxvxcv"});

const url = "https://example.com?password=hl2OAIXXZ60";
```

Cách giải quyết:

```
const password = loadCredentials();
```

## **Kết quả trả về của hàm không nên là 1 giá trị bất biến**

Nếu hàm trả về là một kết quả bất biến sẽ khiến code của bạn xấu và có thể gây ra lỗi trong một số trường hợp

Ví dụ:

Không nên viết:

```
function foo(a) {  // Noncompliant
  let b = 12;
  if (a) {
    return b;
  }
  return b;
}
```

## **Các biến nên được khai báo rõ ràng**

Khi bạn sử dụng các biến trong hàm hoặc vòng for nên khai báo biến rõ ràng ( bằng let, const hoặc var)

Ví dụ:

Không nên viết:

```
function f(){
  i = 1;         // Noncompliant; i is global

  for (j = 0; j < array.length; j++) {  // Noncompliant; j is global now too
    // ...
  }
}
```

Cách giải quyết:

```
function f(){
  var i = 1;

  for (let j = 0; j < array.length; j++) {
    // ...
  }
}
```

## **"future reserved words" should not be used as identifiers**

* await
* class
* const
* enum
* export
* extends
* implements
* import
* interface
* let
* package
* private
* protected
* public
* static
* super
* yield

Ví dụ:

Không nên viết:

```
var package = document.getElementsByName("foo"); // Noncompliant
var someData = { package: true };                 // Compliant, as it is not us
```

Cách giải quyết:

```
var elements = document.getElementsByName("foo"); // Compliant
```

## **Giá trị bát phân không nên được sử dụng**

Ví dụ:

Không nên viết:

```
var myNumber = 010;   // Noncompliant. myNumber will hold 8, not 10 - was this really expected?
```

Cách giải quyết:

```
var myNumber = 8;
```

## **Switch case nên kết thúc bằng lệnh break**

Ví dụ:

Không nên viết:

```
switch (myVariable) {
  case 1:
    foo();
    break;
  case 2:  // Both 'doSomething()' and 'doSomethingElse()' will be executed. Is it on purpose ?
    doSomething();
  default:
    doSomethingElse();
    break;
}
```

Cách giải quyết:

```
switch (myVariable) {
  case 1:
    foo();
    break;
  case 2:
    doSomething();
    break;
  default:
    doSomethingElse();
    break;
}
```

## **Switch case nên kết thúc bằng lệnh break**

Ví dụ:

Không nên viết:

* Case 1

```
switch (day) {
  case MONDAY:
  case TUESDAY:
  WEDNESDAY:   // instead of "case WEDNESDAY"
    doSomething();
    break;
  ...
}
```

* Case 2:

```
switch (day) {
  case MONDAY:
    break;
  case TUESDAY:
    foo:for(i = 0 ; i < X ; i++) {
         /* ... */
        break foo;  // this break statement doesn't relate to the nesting case TUESDAY
         /* ... */
    }
    break;
    /* ... */
}
```

Cách giải quyết:

* Case 1:

```
switch (day) {
  case MONDAY:
  case TUESDAY:
  case WEDNESDAY:
    doSomething();
    break;
  ...
}
```

* Case 2:

```
switch (day) {
  case MONDAY:
    break;
  case TUESDAY:
    compute(args); // put the content of the labelled "for" statement in a dedicated method
    break;

    /* ... */
}
```

## **Getters and setters should access the expected fields**

* Một setter không cập nhật field với tên tương ứng.

* Một getter không truy cập vào field với tên tương ứng

Ví dụ: 

Không nên viết:

```
class A {
  private _x: number = 0;
  private y: number = 0;

  public get x() {  // Noncompliant: field 'x' is not used in the return value
    return this.y;
  }

  public setX(val: number) { // Noncompliant: field 'x' is not updated
    this.y = val;
  }

  public getY() { // Noncompliant: field 'y' is not used in the return value
    return this.x;
  }
}
```

Cách giải quyết

```
class A {
  private _x: number = 0;
  private y: number = 0;

  public get x() {
    return this._x;
  }

  public setX(val: number) {
    this.x = val;
  }

  public getY() {
    return this.y;
  }
}
```

## **"super()" nên được gọi một cách thích hợp**

* super(): phải được gọi trước this

* super(): chỉ có thể được gọi trong hàm tạo

* super(): không thể được gọi nhiều lần trong cùng 1 hàm


Ví dụ: 

Không nên viết:

```
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    super();         // Noncompliant
    super.doSomething();
  }
}
```

Cách giải quyết

```
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    super.doSomething();
  }
}
```

## **"Symbol" should not be used as a constructor**

Ví dụ: 

Không nên viết:

```
const sym = new Symbol("foo");   // Noncompliant
```

Cách giải quyết

```
const sym = Symbol("foo");
```

## **"in" and "instanceol"**

Không nên dùng toán tử so sánh (<, <=, >=, >) để so sánh chuỗi

Ví dụ: 

Không nên viết:

```
if (!"prop" in myObj) {  // Noncompliant;  "in" operator is checking property "false"
  doTheThing();  // this block will be never executed
}

if (!foo instanceof MyClass) {  // Noncompliant; "!foo" returns a boolean, which is not an instance of anything
  doTheOtherThing();  // this block is never executed
}
```

Cách giải quyết

```
if (!("prop" in myObj)) {
  doTheThing();
}

if (!(foo instanceof MyClass)) {
  doTheOtherThing();
}
```

## **"in**


Ví dụ: 

Không nên viết:

```
var x = "Foo";
"length" in x; // Noncompliant: TypeError
0 in x;        // Noncompliant: TypeError
```

Cách giải quyết

```
var x = new String("Foo");
"length" in x;    // true
0 in x;           // true
"foobar" in x;    // false
```

## **"lệnh nhảy không nên để trong finally"**

*finally* sẽ vẫn chạy dù bất cứ điều kiện gì xảy ra

Ví dụ: 

Không nên viết:

```
function foo() {
    try {
        return 1; // We expect 1 to be returned
    } catch(err) {
        return 2; // Or 2 in cases of error
    } finally {
        return 3; // Noncompliant: 3 is returned before 1, or 2, which we did not expect
    }
}
```

Cách giải quyết

```
function foo() {
    try {
        return 1; // We expect 1 to be returned
    } catch(err) {
        return 2; // Or 2 in cases of error
    }
}
```

## **Sử dụng command line**

Ví dụ:

```
// The process object is a global that provides information about, and control over, the current Node.js process
var param = process.argv[2]; // Sensitive: check how the argument is used
console.log('Param: ' + param);
```

## **Không sử dụng toán tử == và != trong vòng for**

Ví dụ:

Không viết:

```
for (var i = 1; i != 10; i += 2)  // Noncompliant. Infinite; i goes from 9 straight to 11.
{
  //...
}
```

Giải quyết:

```
for (var i = 1; i <= 10; i += 2)  // Compliant
{
  //...
}
```

## **"default" nên để ở cuối**

Ví dụ:

Không viết:

```
switch (param) {
  case 0:
    doSomething();
    break;
  default: // default clause should be the first or last one
    error();
    break;
  case 1:
    doSomethingElse();
    break;
}
```

Nên viết:

```
switch (param) {
  case 0:
    doSomething();
    break;
  case 1:
    doSomethingElse();
    break;
  default:
    error();
    break;
}
```

## **"default" nên để ở cuối**

Lệnh duy nhất có điều kiện nên thụt vào

Ví dụ:

Không viết:

```
if (condition)  // Noncompliant
doTheThing();

doTheOtherThing();
somethingElseEntirely();

foo();
```

Nên viết:

```
if (condition)
  doTheThing();

doTheOtherThing();
somethingElseEntirely();

foo();
```

## **"Array-mutating methods**

Lệnh duy nhất có điều kiện nên thụt vào

Ví dụ:

Không viết:

```
ar b = a.reverse(); // Noncompliant
var d = c.sort(); // Noncompliant
```

Nên viết:

```
var b = [...a].reverse();  // de-structure and create a new array, so reverse doesn't impact 'a'
a.reverse();

c.sort(); // this sorts array in place
```

## **"Error**

Ví dụ:

Không viết:

```
if (x < 0) {
  new Error("x must be nonnegative");
}
```

Nên viết:

```
if (x < 0) {
  throw new Error("x must be nonnegative");
}
```

## **"'=+,=-,=!**

Ví dụ:

Không viết:

```
let target =-5;
let num = 3;

target =- num;  // Noncompliant; target = -3. Is that really what's meant?
target =+ num; // Noncompliant; target = 3
```

Nên viết:

```
let target = -5;
let num = 3;

target = -num;  // Compliant; intent to assign inverse value of num is clear
target += num;
```

## **NaN không sử dụng trong phép so sánh**

Kiểm tra có phải NaN không: dùng hàm Number.isNaN(a - cần kiểm tra) => trả về true thì là NaN

Ví dụ:

Không viết:

```
var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}
```

Nên viết:

```
if (Number.isNaN(a)) {
  console.log("a is not a number");
}
if (!Number.isNaN(a)) {
  console.log("a is not NaN");
}
```

## **"null" and "underfined"**

Kiểm tra có phải NaN không: dùng hàm Number.isNaN(a - cần kiểm tra) => trả về true thì là NaN

Ví dụ:

Không viết:

```
var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}
```

Nên viết:

```
if (Number.isNaN(a)) {
  console.log("a is not a number");
}
if (!Number.isNaN(a)) {
  console.log("a is not NaN");
}
```

## **Special identifiers should not be bound or assigned**

* eval - evaluates a string as JavaScript code
* arguments - used to access function arguments through indexed properties.
* undefined - returned for values and properties that have not yet been assigned
* NaN - Not a Number; returned when math functions fail.
* Infinity - when a number exceeds the upper limit of the floating point numbers

Ví dụ:

Không viết:

```
eval = 17; // Noncompliant
arguments++; // Noncompliant
++eval; // Noncompliant
var obj = { set p(arguments) { } }; // Noncompliant
var eval; // Noncompliant
try { } catch (arguments) { } // Noncompliant
function x(eval) { } // Noncompliant
function arguments() { } // Noncompliant
var y = function eval() { }; // Noncompliant
var f = new Function("arguments", "return 17;"); // Noncompliant

function fun() {
  if (arguments.length == 0) { // Compliant
    // do something
  }
}
```

Nên viết:

```
result = 17;
args++;
++result;
var obj = { set p(arg) { } };
var result;
try { } catch (args) { }
function x(arg) { }
function args() { }
var y = function fun() { };
var f = new Function("args", "return 17;");

function fun() {
  if (arguments.length == 0) {
    // do something
  }
}
```

## **Internet Explorer's conditional comments should not be used**

Không nên dùng toán tử so sánh (<, <=, >=, >) để so sánh chuỗi

Ví dụ: 

```
/*@cc_on
  @if (@_jscript_version >= 5.5)
    document.write("You are using IE5.5 or newer");
  @else
    document.write("You are using IE5 or older");
  @end
  @*/
```
## **Toán tử so sánh**

Không nên dùng toán tử so sánh (<, <=, >=, >) để so sánh chuỗi

Ví dụ: 

Không nên viết:

```
var appleNumber = "123";
var orangeNumber = "45";
if (appleNumber < orangeNumber) {  // Noncompliant, this condition is true
  alert("There are more oranges");
}
```

Cách giải quyết

```
var appleNumber = "123";
var orangeNumber = "45";
if (Number(appleNumber) < Number(orangeNumber)) {
  alert("There are more oranges");
}
```

## **type của element**

Nên dùng "[type=...]"

Ví dụ:

Không nên viết

```
var input = $( "form input:radio" ); // Noncompliant
```

Cách giải quyết

```
var input = $( "form input[type=radio]" ); // Compliant
```

## **"find": tìm phần tử trong manrgbanwfg id** 

Ví dụ:

```
var $productIds = $("#products div.id"); // Noncompliant - a nested query for Sizzle selector engine
```

Nên viết:

```
var $productIds = $("#products").find("div.id"); // Compliant - #products is already selected by document.getElementById() so only div.id needs to go through Sizzle selector engine
```

## **Element type selectors should not be used with class selectors** 

Ví dụ:

```
var $products = $("div.products");    // Noncompliant - slow
```

Nên viết:

```
var $products = $(".products");    // Compliant - fast
```

## **"underfined" and "null"** 

Biến chưa được tạo: underfined
Giá trị được tạo nhưng không có giá trị: null

Ví dụ:

Không viết

```
var myObject = {};

// ...
myObject.fname = undefined;  // Noncompliant
// ...

if (myObject.lname == undefined) {
  // property not yet created
}
if (myObject.fname == undefined) {
  // no real way of knowing the true state of myObject.fname
}
```

Nên viết:

```
var myObject = {};

// ...
myObject.fname = null;
// ...

if (myObject.lname == undefined) {
  // property not yet created
}
if (myObject.fname == undefined) {
  // no real way of knowing the true state of myObject.fname
}
```