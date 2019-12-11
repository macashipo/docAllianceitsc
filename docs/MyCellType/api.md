---
id: api
title: api
---

## **Mô tả**

Click vào gọi api (có options show Confirm message trước khi gọi)

![](/img/mycell_api.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| style | Object | style của component |
| button | Object | config của button |
| method | String | method của api |
| url | String | url của api |
| needReload | Boolean | reload lại table hay không |
| needReExpand | Boolean | expand hay không |
| autoOpenLink | Boolean | tự động mở link |
| queryString | String | data gửi lên cho hàm gọi api |
| fShowWhenEmpty | String | show text khi không show button |
| confirmMsg | String | nội dung câu ConfirmMsg |
| className | String | showModalMsg=true thì show ConfirmMsg bằng modal (mặc định là Popover) |
| className | String | title của popover (mặc định là "Confirm") |

## **Ví dụ**

Xem trong [http://localhost:8080/#/dev/celltype](http://localhost:8080/#/dev/celltype) 

## **Code**

```javascript
import React from 'react'
import {
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types'
import {CellHelper} from '../Helpers';
import * as H from '../Helpers';
import Global from '../../../helpers/Global';
import M from '../../../libs/M';
import ApiGeneric from '../../../services/generic';
import MyDialog from '../../../components/MyDialog';
import Tooltip from '../../../mreact/tooltip';
import { Popover } from '../../../mreact/core';

/**
 * Cell Type: api.
 *
 * @class api
 * @static
 * @namespace api
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
      isLoading: false,
    };
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof CellType.api
   * @param {Object} [style] style của Component
   * @param {Object} [button] config của button
   * @param {String} [method] method của api
   * @param {String} [url] url của api
   * @param {Boolean} [needReload] reload lại table hay không
   * @param {Boolean} [needReExpand] expand hay không
   * @param {Boolean} [autoOpenLink] tự động mở link
   * @param {String} [queryString] data gửi lên cho hàm gọi api
   * @param {String} [fShowWhenEmpty] show text khi không show button
   * @param {String} [confirmMsg] nội dung câu ConfirmMsg
   * @param {String} [showModalMsg] showModalMsg=true thì show ConfirmMsg bằng modal (mặc định là Popover)
   * @param {String} [titleConfirm] title của popover (mặc định là "Confirm")
   * 
  */
  more() {
  }

  _onClickApi=()=>{
    const {cell,row,extra} = this.props;
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    let _fnList = CellHelper.getFnList({extra,row});
    // let _method = _more.method || "POST";
    let _url = _more.url;
    let _query = {};
    let _needReload = _more.needReload;
    let _needReExpand = _more.needReExpand;
    let _autoOpenLink = _more.autoOpenLink;
    if(_url){
      _url = M.SquareBracket.replace(_url,row);
      let _queryString = _more.queryString;
      if(_queryString){
        _queryString = M.SquareBracket.replace(_queryString,row);
        try {
          _query = JSON.parse(_queryString);
        } catch (error) {
          console.warn("Parse json _queryString error:",_queryString,error);
        }
      }
      console.log("_url:",_url);
      this.setState({
        isLoading: true,
      },()=>{
        ApiGeneric.generic({
          request:{
            method: 'POST',
            url: _url
          },
          data:_query,
          successCallBack:(response)=>{
            this.setState({
              isLoading: false,
            })
            let _msg = response.Msg || 'Gọi thành công!';                    
            Global.Toast.showSuccess(_msg);
            console.log("_needReload",_needReload,_fnList,_more);
            if(response && response.Data){
              if(response.Data.FullPath){
                if (_autoOpenLink==true){
                  window.open(response.Data.FullPath,'_blank');
                }
                else{
                  MyDialog.Helper.show({
                    title: 'Link',
                    msg: (<div style={{wordWrap:'break-word'}}><a href={response.Data.FullPath} target="_blank">{response.Data.FullPath}</a></div>)});
                }
              }
            }
            if(_needReload===true){
              if(_fnList.fnReloadTable){
                _fnList.fnReloadTable();
              }
            }   
            if(_needReExpand===true){
              if(_fnList.fnGetExpandList){
                let _cExpandList = _fnList.fnGetExpandList();
                if(_cExpandList && _cExpandList[row.Id] && _cExpandList[row.Id].reExpand){
                  _cExpandList[row.Id].reExpand();
                }
              }
            }
          },
          errorCallBack:(error,response)=>{
            this.setState({
              isLoading: false,
            })
          }
        });
      });              
    }
    else{
      console.warn("No api url!");
    }
  }

  render() {
    const {cell,row,extra} = this.props;
    let _style = CellHelper.getExtraStyle({extra:extra,row:row});
    let _more = CellHelper.getMoreInType({extra:extra,row:row});
    // let _fnList = CellHelper.getFnList({extra,row});
    let _tooltip = CellHelper.getExtraTooltip({extra,row});
    let _configButton = CellHelper.More.getConfigButton({extra,row, more:_more});
    let _morePropsButton = _configButton.props || {};
    if(cell==null || cell.length==0){
      if (_more && _more.fShowWhenEmpty && row[_more.fShowWhenEmpty]){
        return <div className="dFfdRaiCjcC" style={_style} >{row[_more.fShowWhenEmpty]}</div>
      }
      return <div style={_style}></div>
    }
    let _confirmMsg = null;
    if (_more!=null && _more.confirmMsg!=null){
      _confirmMsg = _more.confirmMsg;
    }
    if (_more!=null && _more.fConfirmMsg){
      _confirmMsg = row[_more.fConfirmMsg];
    }
    let _titleConfirm = "Confirm";
    if (_more!=null && _more.titleConfirm){
      _titleConfirm = _more.titleConfirm;
    }
    let _styleButton = {padding:'0px',width:'100%',height:'100%'};
    if(_configButton.style){
      _styleButton = Object.assign(_styleButton,_configButton.style);
    }
    let _content = (cell||"Action");
    if(_configButton.icon){
      _content = (
        <i className={`fa ${_configButton.icon}`} />
      )
    }
    let _ui = [];
    if (_confirmMsg!=null){
      if (_more!=null && _more.showModalMsg && _more.showModalMsg==true){
        _ui = (
          <div className="idiv-ro has-wrap" style={_style}>
            <Button 
              className={_configButton.className!=null?_configButton.className:"has-wrap"}
              color={_configButton.color!=null?_configButton.color:"primary"}
              outline={_configButton.outline!=null?_configButton.outline:false}
              style={_styleButton}
              onClick={()=>{
                console.log("click api",_more);
                Global.Alert.showMsgQuestion(null,_confirmMsg,()=>{
                  console.log('ok');
                  this._onClickApi();
                },()=>{
                  console.log('dissmiss');
                })
  
              }}
              {..._morePropsButton}>
                {
                  this.state.isLoading==true &&
                  <i className={"fa fa-spinner fa-spin"} />
                }
                {_content}
              </Button>
          </div>
        )
      }else{
        _ui = (
          <div className="idiv-ro has-wrap" style={_style}>
            <Popover placement="topRight" title={_titleConfirm}
              overlay={<div>{_confirmMsg}</div>} trigger="click" showButton okText="Đồng ý" cancelText="Đóng" 
              onOk={(hide)=>{
                this._onClickApi();
                if(hide){hide()}
              }} 
              onCancel={()=>{console.log('Cancel')}}>
            <Button 
              className={_configButton.className!=null?_configButton.className:"has-wrap"}
              color={_configButton.color!=null?_configButton.color:"primary"}
              outline={_configButton.outline!=null?_configButton.outline:false}
              style={_styleButton}
              onKeyPress={(ev)=>{
                if(ev.key === 'Enter'){
                  // console.warn('press Enter');
                  this._onClickApi();
                }}}
              // onClick={()=>{
              // }}
              {..._morePropsButton}>
                {
                  this.state.isLoading==true &&
                  <i className={"fa fa-spinner fa-spin"} />
                }
                {_content}
              </Button>
            </Popover>
    
          </div>
        )
      }      
    }else{
      _ui = (
        <div className="idiv-ro has-wrap" style={_style}>
          <Button 
            className={_configButton.className!=null?_configButton.className:"has-wrap"}
            color={_configButton.color!=null?_configButton.color:"primary"}
            outline={_configButton.outline!=null?_configButton.outline:false}
            style={_styleButton}
            onClick={()=>{
              this._onClickApi();
            }}
            {..._morePropsButton}>
              {
                this.state.isLoading==true &&
                <i className={"fa fa-spinner fa-spin"} />
              }
              {_content}
          </Button>
        </div>
      )
    }    
    if(_tooltip){
      return (
        <Tooltip placement="top" overlay={_tooltip} >
          {_ui}
        </Tooltip>
      )
    }
    return _ui;
  }
}

export default Z;
```

