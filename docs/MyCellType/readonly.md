---
id: readonly
title: readonly
---


## **Mô tả**

 Hiển thị text dạng chỉ đọc

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |

## **Ví dụ**

Xem trong [test celltype](http://localhost:8080/#/dev/celltype) 

## **Code**

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import {CellHelper} from '../Helpers';
import * as H from '../Helpers';
import Global from '../../../helpers/Global';
/**
 * Cell Type: readonly.
 *
 * @class readonly
 * @static
 * @namespace readonly
 * @memberof CellType
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

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.readonly
   * @param {Object} [style] style của Component
   * @param {Object} [className] class của Component
   * 
  */
  more() {
  }

  render() {
    const {cell,row,extra} = this.props;
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});
    let _className = Global.ClassName("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    if(typeof cell == 'object' && cell!=null){
      return <div className={_className} style={_style}>{"[object]"}</div> 
    }
    return <div className={_className} style={_style}>{cell}</div>
  }
}

export default Z;
```

