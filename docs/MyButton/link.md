---
id: link
title: link
---


## **Mô tả**

Button click vào sẽ render một link trong cửa sổ hiện tại hoặc trong cửa sổ mới

![](/img/btn_link.png)

Click button sẽ ra màn hình này:

![](/img/btn_link2.png)


## **More**

Không có More

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/mybutton](http://localhost:8080/#/dev/mybutton) 

## **Code**

```javascript
import React from 'react'
import {
    Row,Col,
    Card,CardHeader,CardBody,CardFooter,CardTitle,
    Button
  } from 'reactstrap';
import PropTypes from 'prop-types'
import Global from '../../../helpers/Global';
import MyButtonHelpers from '../MyButtonHelpers';
/**
 * MyButtonType: link.
 *
 * @class link
 * @static
 * @namespace link
 * @memberof MyButtonTypes
 * 
 */
class MyButton_Link extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state={
    };
  }
  _onClick=()=>{
    const {type,title,color,typeProps} = this.props;
    let _isShowNewWindow = typeProps.isShowNewWindow;
    Global.History.push(typeProps.url,_isShowNewWindow);
  }
  render() {
    return(
      <Button 
        onClick={()=>{
          this._onClick();
        }}
        {...MyButtonHelpers.getMoreProps(this.props,null,null)}
      >
      {
        MyButtonHelpers.getTitle(this.props)
      }
      </Button>
    )
  }
}

export default MyButton_Link;
```

