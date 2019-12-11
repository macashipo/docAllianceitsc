---
id: date
title: date
---

## **Mô tả**

 Hiển thị ngày tháng năm, nếu chưa có giá trị click vào sẽ hiển thị datepicker đển chọn ngày (chưa giải quyết được trường hợp edit)

![](/img/mycell_date.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| className | Object | class của component |
| prefixId | String | Prefix Id của date picker |
| dfDateInPicker | String | Ngày mặc định trong focus của DatePicker(milisecond), nếu không có giá trị thì lấy ngày hiện tại |
| isUsingControlerId | String | có thì sử dụng fnGetConfigController |
| isUsingControllerId | String | có thì sử dụng fnGetConfigController |
| isUsingRandomId | String | có thì sử dụng row._random |
| placeHolder | String | placeHolder của Input |

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
import Moment from "moment";
import {CellHelper} from '../Helpers';
import JQDatePicker from '../../JQDatePicker/JQDatePicker';

/**
 * Cell Type: date.
 *
 * @class date
 * @static
 * @namespace date
 * @memberof CellType
 * 
 * @example
 * Url: 
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
    if (cell){
      this.state.value = cell
    }
    // this._format = CellHelper.getFormatInMore({extra:extra,row:row}) || 'DD-MMMYY';
    // console.warn('Moment(cell).format(this._format): ', Moment(cell).format(this._format));
    // if(cell && cell>0){
    //   this.state.value = Moment(cell).format(this._format);
    // }
    // console.warn('_format', Moment(cell).format(this._format));
    // console.warn('value: ', this.state.value);
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.checkbox
   * @param {Object} [style] style của Component
   * @param {Object} [className] class của Component
   * @param {String} [prefixId] Prefix Id cua date picker
   * @param {String} [dfDateInPicker ] Ngày mặc định trong focus của DatePicker(milisecond), nếu không có giá trị thì lấy ngày hiện tại
   * @param {String} [isUsingControlerId] có thì sử dụng fnGetConfigController
   * @param {String} [isUsingControllerId] có thì sử dụng fnGetConfigController
   * @param {String} [isUsingRandomId] có thì sử dụng row._random
   * @param {String} [placeHolder] placeholer
   * 
  */
  more() {
  }
  componentDidMount(){
    // const {cell}=this.props;
    // // console.warn('componentDidMount: ',id,this);
    // this._initDatePicker(cell);
  }
  // componentWillReceiveProps(nextProps){
  //   // console.log('componentWillReceiveProps date input',nextProps,this.props);
  //   let _newValue = nextProps.cell || "";
  //   if(nextProps.row && this.props.row && nextProps.row.Id!=this.props.row.Id){
  //     this.setState({value:_newValue},()=>{
  //       this._initDatePicker(_newValue,true);
  //     })
  //   }
  //   else if(nextProps.cell!=this.props.cell){
  //     this.setState({value:_newValue},()=>{
  //       this._initDatePicker(_newValue);
  //     })
  //   }
  // }
  _getIdTrim=(props)=>{
    const {cell,row,extra} = props || this.props;
    let _fnList = CellHelper.getFnList({extra,row});      
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _prefixId = _more.prefixId || 'df';
    // console.warn(`_getIdTrim:`,_fnList,_more);
    if(_fnList && _fnList.fnGetConfigController){
      if(_more.isUsingControlerId || _more.isUsingControllerId){
        let _configController = _fnList.fnGetConfigController();
        // console.warn(`_getIdTrim _configController:`,_configController);
        if(_configController && _configController.Id){
          _prefixId = _configController.Id;
        }
      }
    }  
    if(_more.isUsingRandomId){
      if(row._random){
        _prefixId = row._random;
      }
      else{
        row._random = Math.floor(Math.random() * (1000000));
        _prefixId = row._random;
      }
    }
    let _rowId = row.Id || row.Value || 'noid';
    let _sourceId = '';
    if(extra.extraData && extra.extraData.SourceId){
      _sourceId = extra.extraData.SourceId;
    }
    let _id = `${_prefixId}_${_sourceId}_`+extra.fieldName+'_'+_rowId;;
    if(_id){
      _id = _id + "";
      _id = _id.replace(/[^a-zA-Z0-9]/g, '_');
    }
    this._currentTagId = _id;
    return _id;
  }
  // _onChangeDate=()=>{
  //   const {cell,row,extra} = this.props;
  //   console.log('_onChangeDate:',this.state.value,this._datePicker);
  //   // console.log('time: ',this._datePicker);
  //   // console.log(this._datePicker.val());
  //   // console.log(this._datePicker.datepicker( 'getDate' ));
  //   let _date = this._datePicker.datepicker( 'getDate' );
  //   if(_date!=null){
  //     let _milisecond = _date.getTime();
  //     // let _milisecond = _date.getTime() - (_date.getTimezoneOffset() * 60000);
  //     CellHelper.callRequestUpdate({extra,row,fieldName:extra.fieldName,newValue:_milisecond});
  //     // this._onChange(null,_milisecond);
  //   }
  // }
  // _initDatePicker=(milisecond,forceNew)=>{
  //   const {type,id,dateFormat}=this.props;
  //   let _dateFormat = dateFormat||'dd-My';
  //   // console.warn('_initDatePicker:',milisecond,id);
  //   if(this._datePicker==null || forceNew === true){
  //     // console.warn('_initDatePicker:',milisecond,id);
  //     if(forceNew==true && this._datePicker){
  //       // console.warn('forec',this._datePicker);
  //       this._datePicker.datepicker('destroy');
  //     }
  //     this._datePicker = jQuery('#'+this._getIdTrim()).datepicker({
  //       dateFormat: _dateFormat,
  //       changeMonth: true,
  //       changeYear: true,
  //       yearRange: '1950:2030',
  //       onSelect: (dateText) => {
  //         console.log("Selected date: " + dateText,id);
  //         // console.log(this);
  //         this.setState({value:dateText},()=>{
  //           this._onChangeDate();
  //         });
  //       }
  //     });
  //   }
    
  //   // this._datePicker.datepicker('setDate',new Date());
  //   // console.log('init date1:',id,milisecond);
  //   if(milisecond!=null && milisecond!=''){
  //     // console.log('init date:',id,milisecond);
  //     this._datePicker.datepicker('setDate',new Date(milisecond));
  //     let _value = this._datePicker.val();
  //     // console.warn('_value: ',_value,milisecond,this._datePicker);
  //     if(_value!=null){
  //       this.setState({value:_value});
  //     }
  //   }
  //   else{
  //     this.setState({value:''});
  //   }
  // }

  // _onChange=(ev, value)=>{
  //   const {cell,row,extra} = this.props;
  //   // let _fnList = CellHelper.getFnList({extra,row});
  //   // let _fnRequestUpdate = _fnList.fnRequestUpdate;
  //   // let _fieldName = extra.fieldName;
  //   // if (_fnRequestUpdate){
  //   //   _fnRequestUpdate(row, _fieldName, value);
  //   // }
  //   CellHelper.callRequestUpdate({extra,row,fieldName:extra.fieldName,newValue:value});
  // }

  render() {
    const {cell,row,extra} = this.props;
    // console.warn('celltype date this.props: ', this.props,cell);
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});
    let _className = classnames("idiv-ro has-wrap",CellHelper.getExtraClassName({extra:extra,row:row,more:_more}));
    let _placeHolder = _more.placeHolder;
    let _disabled = !CellHelper.getCanEdit({extra,row});
    // let _id = "typedate_"+row.Id;
    // console.warn('this.state.value: ', this.state.value);
    // let _styleInput = Object.assign({height:'100%'}, _style);
    let _dfDateInPicker = _more.dfDateInPicker;
    // console.warn('dfDate: ', _dfDate, _more.dfDate);
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        {
          CellHelper.renderClearBtn({disabled:_disabled,cell,extra,row,more:_more,fnClear:()=>{
          }})
        }
        {/* <Input 
          id={this._getIdTrim(this.props)}  
          // id = {_id}          
          className={_className + ' datepicker'}
          style={_styleInput}
          type="text"
          defaultValue = {this.state.value}
          // value={this.state.value}
          placeholder = { _placeHolder }
          disabled={_disabled} 
          onChange={ (ev)=>{
            console.warn('onChange:',ev.currentTarget.value);
            this.setState({value:ev.currentTarget.value});
          }}
          /> */}
        <JQDatePicker 
          value={cell}
          dfDateInPicker={_dfDateInPicker}
          tagId={this._getIdTrim()} 
          className={_className}
          placeHolder={_placeHolder}
          disabled={_disabled}
          style={_style}
          onChange={(mili)=>{
            if(mili){
              CellHelper.callRequestUpdate({extra,row,fieldName:extra.fieldName,newValue:mili});
            }
          }}
        />
      </div>
      )
  }
}

export default Z;
```

