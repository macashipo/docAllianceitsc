---
id: textareafull
title: textareafull
---

## **Mô tả**

 Hiển thị text mà độ cao của cell tăng theo số hàng của text

![](/img/mycell_textareafull.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/celltype](http://localhost:8080/#/dev/celltype) 

## **Code**

```javascript
import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types'
import {CellHelper} from '../Helpers';
import * as H from '../Helpers';
import TextareaAutosize from '../../../libs/ReactTextareaAutosize';

/**
 * Cell Type: textareafull.
 *
 * @class textareafull
 * @static
 * @namespace textareafull
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
    const {cell,row,extra} = this.props;
    this.state={
      value:''
    };
    if (cell){
      this.state.value = cell;
    }
  }

  /**
   * Thuộc tính sử dụng trong more:
   * Kiểu textarea khi hơn 2 dòng sẽ tự động tăng chiều cao của ô cho vừa
   * @method more
   * @memberof CellType.textareafull
   * @param {Object} [style] style của Component
   * @param {Object} [className] class của Component
   * 
  */
  more() {
  }
  componentWillReceiveProps(nextProps){
    const {cell,row} = nextProps;
    // console.warn('celltype textareafull componentWillReceiveProps',nextProps,this.props,cell,this.props.cell);
    // if(cell!=null && this.props.cell !=null && cell!=this.props.cell){
    if(cell!=null && cell!=this.props.cell){
      let _value = cell;      
      // console.warn('celltype textareafull componentWillReceiveProps 111',_value);
      this.setState({value:_value})
    }else if(cell==null && cell!=this.props.cell){
      this.setState({value:""})
    }
  }

  render() {
    const {cell,row,extra} = this.props;
    // console.warn('celltype textareafull render',this.props);
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});
    let _className = classnames("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    let _styleInput = Object.assign({width:'100%',height:'50px',minHeight:'100%',border:'0px solid',display:'flex', alignItems:'center'},_style);
    let _placeHolder = _more.placeHolder | "";
    let _disabled = !CellHelper.getCanEdit({extra,row});
    // return <div className={_className} style={_style}>{cell}</div>
    return(
      <TextareaAutosize 
        useCacheForDOMMeasurements
        disabled={_disabled}
        className={_className}
        style={_styleInput}
        value={this.state.value}
        placeholder = {_placeHolder}
        // defaultValue={this.state.value}
        onBlur={ (ev) => {
          // this._onChange(ev, this.state.value)
          CellHelper.callRequestUpdate({extra:extra,row:row,fieldName:extra.fieldName,newValue:this.state.value});
        }}
        onChange={ (ev) => { 
          // console.warn('onChange value: ', ev.currentTarget.value);
          this.setState({ 
            value: ev.currentTarget.value 
          });
        }}
      />
    )
  }
}

export default Z;
```

