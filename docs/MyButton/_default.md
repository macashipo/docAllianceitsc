---
id: _default
title: _default
---


## **Mô tả**

Nếu không có giá trị sẽ render component này

***Kèm hình ảnh***

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |

## **Ví dụ**

Xem trong [test mybutton](http://localhost:8080/#/dev/mybutton) 

## **Code**

```javascript
import React from 'react'
import PropTypes from 'prop-types'
/**
 * MyButtonType: _default.
 *
 * @class _default
 * @static
 * @namespace _default
 * @memberof MyButtonTypes
 * 
 */
class Z extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    console.warn("MyButtonDefault:",this.props);
    return(
      <div>Default</div>
    )
  }
}

export default Z;
```

