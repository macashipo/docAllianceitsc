---
id: currency
title: currency
---

## **Mô tả**

 Hiển thị số theo dạng dấu chấm phân cách hàng nghìn

![](/img/mycell_currency.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |
| isNegative | Boolean | Cho phép nhập số âm hay không |
| round | Number | Làm tròn hay không |
| placeHolder | String | placeHolder của Input |

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/celltype](http://localhost:8080/#/dev/celltype) 

## **Code**

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
} from 'reactstrap';
import classnames from 'classnames';
import {CellHelper} from '../Helpers';
import * as H from '../Helpers';
import Global from '../../../helpers/Global';
import HNumber from '../../../helpers/Number';
import M from '../../../libs/M';

/**
 * Type: currency.
 * Nhập vào ở dạng số và hiển thị dạng currency
 * 
 * @class currency
 * @static
 * @namespace currency
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
    let _value = "";
    if (cell){
      _value = cell;
    }
    this.state={
      value: _value,
      maskValue: this.getMaskValue(_value||''),
    };
    this._mask = "c";
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.currency
   * @param {Object} [style] style của Component
   * @param {Object} [className] class của Component
   * @param {Boolean} isNegative Cho phep nhap số âm hay không
   * @param {Number} round Làm tròn hay không
   * @param {String} placeHolder placeHolder của input
  */
  more() {
  }
  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    const {cell,row} = nextProps;
    // if(nextProps.value!=this.props.value){
    //   if(this._mask!=null){
    //     this.setState({
    //       value:nextProps.value||'',
    //       maskValue: this.getMaskValue(nextProps.value||''),
    //     });
    //   }
    //   else{
    //     this.setState({value:nextProps.value||''});
    //   }
    // }
    if(cell!=null && cell!=this.props.cell){
      let _value = cell!=null?cell:false;
      this.setState({
        value:_value||'',
        maskValue: this.getMaskValue(_value||''),
      })
    }else if(cell==null && cell!=this.props.cell){
      this.setState({
        value:'',
        maskValue: this.getMaskValue(''),
      })
    }
  }
  getMaskValue=(value)=>{
    const {cell,row,extra} = this.props;
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _round = _more.round;
    let _value = value;
    if (_round!=null){
      _value = HNumber.round(value,_round);
      // console.warn(`_value`,_value);
    }else if(HNumber.isFloat(Number(_value))){
      _value = HNumber.round(_value,0);
      // console.warn(`_value isFloat`,_value);
    }
    // console.warn(`_value _round`,_value,HNumber.isFloat(_value),HNumber.isFloat(Number(_value)),_round);

    let mask = new M.InputMask({pattern: 'c'});
    let _ok = mask.input(_value);
    if(_ok){
      return mask.getValue(); 
    }
    else{
      return _value;
    }
  }
  getNewValueWithRegexDelete=(value,more)=>{
    var regexDelete="[^(\\d)]";
    if(more && more.isNegative==true){
      regexDelete = "[^(\\d-)]";
    }
    if(regexDelete!=null && value!=null){
      let regex = new RegExp(regexDelete,'ig');
      // console.log('getNewValueWithRegexDelete:',regex,value,regexDelete,more);
      let _newValue = value.replace(regex, '');
      // console.log('getNewValueWithRegexDelete:',_newValue);
      return _newValue;
    }
    return value;
  }
  
  render() {
    const {cell,row,extra} = this.props;
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});          
    let _className = classnames("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    let _styleInput = Object.assign({height:'100%',textAlign:'right'},_style);
    let _disabled = !CellHelper.getCanEdit({extra,row});
    let _placeHolder = _more.placeHolder;
    return (
      <div>
        <Input
          className={_className}
          style={_styleInput}
          type="text"
          value={this.state.maskValue} 
          disabled={_disabled}
          placeholder = {_placeHolder}
          onBlur={(ev)=>{
            // console.log('ev:',ev,ev.currentTarget.value);
            this.setState({
              maskValue: this.getMaskValue(ev.currentTarget.value)
            },()=>{
              CellHelper.callRequestUpdate({extra:extra,row:row,fieldName:extra.fieldName,newValue:this.state.value});
            })
          }}
          onMouseDown={(ev)=>{
            // console.log('onMouseDown:',ev,ev.currentTarget.value);
            this.setState({
              maskValue: this.state.value
            })
          }}
          onChange={ (ev) => { 
            let _newValue = this.getNewValueWithRegexDelete(ev.currentTarget.value,_more);            
            this.setState({ 
              value: _newValue,
              maskValue: _newValue
            });
          }}
          >
        </Input>
      </div>
    )
  }
}

export default Z;
```

