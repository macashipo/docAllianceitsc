---
id: textarea
title: textarea
---

## **Mô tả**

 Hiển thị text dạng có thể chỉnh sửa và xuống hàng

![](/img/mycell_textarea.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |
| placeHolder | String | placeHolder của Input |

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/celltype](http://localhost:8080/#/dev/celltype) 

## **Code**

```javascript
import React from 'react';
import {Input} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import {CellHelper} from '../Helpers';
/**
 * Cell Type: textarea.
 *
 * @class textarea
 * @static
 * @namespace textarea
 * @memberof CellType
 * 
 * @example 
 * Url: /config-staff
 * Col: FirstName    
 */
class Z extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    const {cell,row,extra} = this.props;
    this.state={
        value: ''
    };
    if (cell){
        this.state.value = cell;
    }
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.readonly
   * @param {Object} [style] style của Component
   * @param {Object} [className] class của Component
   * @param {String} [placeHolder] placeHolder của Input
   *
  */
  more() {
  }

  componentWillReceiveProps(nextProps){
    const {cell,row} = nextProps;
    // console.warn('celltype componentWillReceiveProps',nextProps,this.props);
    if(cell!=null && this.props.cell !=null && cell!=this.props.cell){
      let _value = cell!=null?cell:false;
      this.setState({value:_value})
    }
  }

  // _onChange=(ev, value)=>{
  //   const {cell,row,extra,placeholder,disabled} = this.props;
  //   let _fnList = CellHelper.getFnList({extra,row});
  //   let _fnRequestUpdate = _fnList.fnRequestUpdate;
  //   let _fieldName = extra.fieldName;
  //   if (_fnRequestUpdate){
  //     if (value!=cell && !(cell==null && value=="")){
  //       _fnRequestUpdate(row, _fieldName, value);
  //     }
  //   }
  // }

  render() {
    const {cell,row,extra,} = this.props;
    // console.warn('extra', extra);
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});
    let _className = classnames("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    let _fnList = CellHelper.getFnList({extra,row});
    let _styleInput = Object.assign({height:'100%',display:'flex', alignItems:'center'},_style);
    let _placeHolder = _more.placeHolder;
    let _disabled = !CellHelper.getCanEdit({extra,row});
    let _rowInput = _more.rows || 4;
    return (
      <div>
        <Input 
          className={_className}
          style={_styleInput}
          type='textarea'
          rows={_rowInput}
          value={this.state.value} 
          placeholder = { _placeHolder }
          disabled={_disabled}
          onBlur={ (ev) => {
            // this._onChange(ev, this.state.value)
            CellHelper.callRequestUpdate({extra:extra,row:row,fieldName:extra.fieldName,newValue:this.state.value});
          }
          }
          onChange={ (ev) => { 
            this.setState({ 
              value: ev.currentTarget.value 
            });
          }}>
        </Input>
      </div>
      )
  }
}

export default Z;
```

