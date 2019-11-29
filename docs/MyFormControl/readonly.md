---
id: readonly
title: readonly
---


## **Mô tả**

Hiển thị text dạng chỉ đọc

## **Ví dụ**

Xem trong [test myform-controltype](http://localhost:8080/#/dev/myform-controltype) 

## **Code**

```javascript
import React, { Component } from 'react';
import MyFormType_Control from './_control';
import MyFormHelpers from '../MyFormHelpers';
class MyFormType_Readonly extends MyFormType_Control {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount(){
  }

  render() {
    const {config,opts} = this.props;
    return (
      <div>
        <div>{MyFormHelpers.getDefaultValue(config,opts)}</div>
      </div>
    )
  }
}

export default MyFormType_Readonly;
```

