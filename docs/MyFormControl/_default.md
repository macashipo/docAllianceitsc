---
id: _default
title: _default
---


## **Mô tả**

Nếu không có giá trị sẽ render component này

## **Ví dụ**

Xem trong [test myform-controltype](http://localhost:8080/#/dev/myform-controltype) 

## **Code**

```javascript
import React, { Component } from 'react';

class MyFormType_Default extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>MyFormType_Default</div>
    )
  }
}

export default MyFormType_Default;
```

