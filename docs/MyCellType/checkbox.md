---
id: checkbox
title: checkbox
---

## **Mô tả**

 Hiển thị kiểu checkbox

![](/img/mycell_checkbox.png)

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
import {
  Input,
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import {CellHelper} from '../Helpers';

/**
 * Cell Type: checkbox.
 *
 * @class checkbox
 * @static
 * @namespace checkbox
 * @memberof CellType
 * 
 * @example
 * Url: /config-staff
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
      value:'',
    };
    if (cell!=null){
      // console.warn('typeof: ', typeof cell);
      this.state.value = cell;
      // if (typeof cell == 'boolean'){
      //   this.state.value = cell
      // }
      // if (typeof cell == 'string'){
      //   if (cell == "1" || cell == "true"){
      //     this.state.value = true
      //   }else{
      //     this.state.value = false;
      //   }
      // }
    }
  }

  componentWillReceiveProps(nextProps){
    const {cell,row} = nextProps;
    // if(row.Id=="559" || row.Id=="355"){
    //   console.warn('InputControl componentWillReceiveProps: ',row.Id,this.props.cell,this.state.value,' -> ',nextProps.cell);
    // }    
    // Da tung ko xu ly gi het, ko biet tai sao      
    //Neu cell = null thi khong thay doi trang thai checkbox
    if(cell!=null && this.props.cell !=null && cell!=this.props.cell){
      let _value = cell!=null?cell:false;
      // console.log('set value:',_value);
      this.setState({value:_value})
    }
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.checkbox
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
    let _className = classnames("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    let _fnList = CellHelper.getFnList({extra,row});
    let _styleInput = Object.assign({height:'100%'}, _style);
    let _disabled = !CellHelper.getCanEdit({extra,row});
    // console.warn('more: ', _more);
    // console.warn('fieldName: ', extra.fieldName);
    let _isChecked = (this.state.value==true||this.state.value=="1")?true:false;
    // if(row.Id=="559" || row.Id=="355"){
    //   console.warn('Checkbox render: ',this.state.value,this.props,_isChecked);
    // }     
    return (
      <div style={{display:'flex', justifyContent:'center'}} >
        <Input 
          className={`${_className} s_sm_xncb c-icheckbox`}
          data-id={row.Id}
          data-fieldname={extra.fieldName}
          style={_styleInput}
          type="checkbox"
          checked={ _isChecked } 
          disabled={_disabled}
          onChange={ (ev) => { 
            // console.warn('onChange:',this.state.value,ev.currentTarget.checked);
            let _newValue = ev.currentTarget.checked;
            this.setState(
            { 
              value: _newValue 
            },()=>
            {
              CellHelper.callRequestUpdate({extra,row,fieldName:extra.fieldName,newValue:_newValue});
              // this._onChange(ev, this.state.value);
            });
          }}>
        </Input>
      </div>
      )
  }
}

export default Z;
```

