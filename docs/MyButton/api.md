---
id: api
title: api
---


## **Mô tả**

Button click vào sẽ gọi api

![](/img/btn_api.png)

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
import ApiGeneric from '../../../services/generic';
import MyDialog from '../../../components/MyDialog';
import * as H from '../../../helpers';
import PropTypes from 'prop-types';
import MyButtonHelpers from '../MyButtonHelpers';
/**
 * MyButtonType: api.
 *
 * @class api
 * @static
 * @namespace api
 * @memberof MyButtonTypes
 * 
 */
class MyButton_Api extends React.Component {
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
  _onClick=()=>{
    const {type,title,color,getQuery,typeProps, reloadTable, successCallBack} = this.props;    
    const me = this;
    // const {queryData} = (typeProps || {});
    // let _queryData = Object.assign({},queryData);
    // if(getQuery){
    //   let _customQuery = getQuery() || {};
    //   _queryData = Object.assign(_queryData,_customQuery);
    // }
    this.setState({
      isLoading: true,
    },()=>{
      ApiGeneric.generic({
        request: MyButtonHelpers.getApiRequest(this.props),
        data: MyButtonHelpers.getApiQuery(this.props,{}),
        successCallBack:(response)=>{
          let _msg = response.Msg;
          let _data = response.Data;
          if(_msg){
            H.Global.Toast.showSuccess(_msg);
          }
          if(!MyButtonHelpers.needReloadOrNot(me.props)){
            MyButtonHelpers.needReloadTableOrnot(me.props);
          }

          if(_data){
            if(_data.FullPath){
              MyDialog.Helper.show({
                title: 'Link',
                msg: (<div style={{wordWrap:'break-word'}}><a href={_data.FullPath} target="_blank">{_data.FullPath}</a></div>)});
            }
          }          
          this.setState({
            isLoading: false
          })
          if(successCallBack){
            successCallBack(response);
          }
        },
        errorCallBack:(error,response)=>{
          this.setState({
            isLoading: false
          })
        }
      })
    })

  }
  render() {
    const {title} = this.props;
    const me = this;    
    let _confirmMsg = MyButtonHelpers.getConfirmMsg(this.props);
    // console.warn('api this.props', this.props);
    return(
      <Button
        disabled = {this.state.isLoading}         
        onClick={()=>{
          if(_confirmMsg){
            H.Global.Alert.showMsgQuestion(title,_confirmMsg,()=>{
              // console.log('ok');
              me._onClick();
            },()=>{
              // console.log('dissmiss');
            })
          }
          else{
            me._onClick();
          }
          // this._onClick();
        }}
        {...MyButtonHelpers.getMoreProps(this.props,null,null)}
      >        
      {
        MyButtonHelpers.getTitle(this.props,null,{showLoading:this.state.isLoading})
      }
      </Button>
    )
  }
}

export default MyButton_Api;
```

