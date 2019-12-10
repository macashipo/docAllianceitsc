---
id: action
title: action
---


## **Mô tả**

Button click vào sẽ expand hoặc collapse detail

![](/img/btn_action.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| type | String | style của button (toggle,expand,collapse,reloadPage,reloadTable,switchColumn) |
| custom | String | Chuỗi các key của màn hình detail được phép expand, ngăn cách bằng dấu phẩy |
| nameWhenExpand | String | Tên hiển thị trên button khi đang expand |
| nameWhenCollapse | String | Tên hiển thị trên button khi đang collapse |

## **Ví dụ**

Xem trong [http://localhost:8080/#/project/project-report-weekly-issue/TEST_COPY_FILE](http://localhost:8080/#/project/project-report-weekly-issue/TEST_COPY_FILE) 

## **Code**

```javascript
import React from 'react'
import {
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import MyButtonHelpers from '../MyButtonHelpers';

/**
 * MyButtonType: action.
 *
 * @class action
 * @static
 * @namespace action
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
      status:1, //toggle
      isToggle:false,
      indexSwitch:0,
    };

    this._typeAction = {
      expand:(more)=>{
        this.setState({status:2},()=>{
          this._action(more);
        })
      },
      collapse:(more)=>{
        this.setState({status:3},()=>{
          this._action(more);
        })
      },
      reloadPage:(more)=>{
        MyButtonHelpers.needReloadOrNot(this.props);
      },
      reloadTable:(more)=>{
        MyButtonHelpers.needReloadTableOrnot(this.props);
      },
      switchColumn:(more)=>{
        this._switchColumn(more);
      }
    }
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof MyButton.action
   * @param {String} type type của Action
   * @param {String} custom chuoi cac key cua man hinh detail duoc phep expand, ngan cach bang dau phay
   * @param {String} nameWhenExpand Tên hiển thị trên button khi đang expand
   * @param {String} nameWhenCollapse Tên hiển thị trên button khi đang collapse
   * 
  */
  more() {
  }

  _switchColumn=(more)=>{
    const {getExtraDataTable,getRefTable} = MyButtonHelpers.getFnList(this.props);
    let _indexSwitch = this.state.indexSwitch;
    let _cols = more.cols;
    if (getExtraDataTable && _cols && _cols.length>0){
      let _extraDataTable = getExtraDataTable();
      let _columns = _extraDataTable.Columns;
      _indexSwitch++;
      // console.warn('_indexSwitch:',_indexSwitch,_cols);
      if(_indexSwitch>=_cols.length){
        _indexSwitch = 0;
      }
      for (let i=0;i<_cols.length;i++){
        let _item = _cols[i];
        // console.warn('item', _item);
        if (i==_indexSwitch){
          _columns[_item].CanShow = true
        }else{
          _columns[_item].CanShow = false;
        }
      }
      // console.warn('columns', _columns);      
      if (getRefTable){
        let _refTable = getRefTable();
        if (_refTable!=null && _refTable.reBuildTableWithExtraData){
          _refTable.reBuildTableWithExtraData(_extraDataTable);
          this.state.indexSwitch = _indexSwitch;
        }
      }
    }
  }

  _action=(more)=>{
    const {getDataTable,getRefTable} = MyButtonHelpers.getFnList(this.props);
    const {status, isToggle} = this.state;
    // let _numFirstCol = more.numFirstCol;
    // console.warn('action', this.props, getDataTable(),MyButtonHelpers.getFnList(this.props));
    if (getDataTable){
      let _dataTable = getDataTable();
      if (_dataTable && _dataTable.length>0){        
        for (let i=0;i<_dataTable.length;i++){
          let _row = _dataTable[i];
          if(_row['_isExpandMulti']){
            let _keys = Object.keys(_row['_isExpandMulti']);
            if(_keys && _keys.length>0){
              for(let k of _keys){
                let _isSet = true;
                if(more.custom && typeof more.custom=='string'){
                  let _customs = more.custom.split(',');
                  if(_customs.indexOf(k)==-1){
                    _isSet = false;
                  }
                }
                if(_isSet==true){
                  if (status==1){ //toggle
                    _row['_isExpandMulti'][k] = isToggle;
                  } else if (status==2){ //expand all
                    _row['_isExpandMulti'][k] = true;
                  } else if (status==3){ //collapse all
                    _row['_isExpandMulti'][k] = false;
                  }
                }                
              }
            }
          }          
        }
        if (getRefTable){
          let _refTable = getRefTable();
          // console.warn('ref', _refTable);
          if (_refTable != null){
            _refTable.forceUpdate();
          }
        }
      }
      // console.warn('data: ', status, _dataTable);
    }
    // console.warn('status: ', status, getDataTable, this.props);
  }

  render() {
    const {type,title,color,typeProps} = this.props;
    // console.warn('action this.props',this.props);
    let _more = MyButtonHelpers.getMoreInConfig(this.props);
    let _type = _more.type || _more.Type;
    if (_type == "toggle"){
      let _opts = {};
      if(this.state.isToggle && _more.nameWhenExpand){
        _opts.forceName = _more.nameWhenExpand;
      }
      else if(!this.state.isToggle && _more.nameWhenCollapse){
        _opts.forceName = _more.nameWhenCollapse;
      }
      return(
        <Button onClick={()=>{
          // console.warn('click expand this.props',this.props);
          this.setState({
            status:1,
            isToggle:!this.state.isToggle,
          },()=>{
            this._action(_more);
          })
        }} {...MyButtonHelpers.getMoreProps(this.props,null,null)}>
          {MyButtonHelpers.getTitle(this.props,"Toggle All",_opts)}
        </Button>
      )
    }else if(_type){
      return(
        <Button onClick={()=>{
          // console.warn(`Click:`,_type,this._typeAction);
          if(this._typeAction && this._typeAction[_type]){
            this._typeAction[_type](_more);
          }
        }} {...MyButtonHelpers.getMoreProps(this.props,null,null)}>
          {MyButtonHelpers.getTitle(this.props,"Action")}
        </Button>
      )
    }
    else{
      console.warn(`Button Action missing type in more`);
    }
    return(
      <div></div>
    )
  }
}

export default Z;
```

