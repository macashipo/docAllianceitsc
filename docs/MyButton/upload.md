---
id: upload
title: upload
---


## **Mô tả**

Button click vào sẽ hiện ra cửa sổ cho chọn file upload

![](/img/btn_upload.png)

## **More**

| Tên | Type | Mô tả |
| --- | ---- |------ |
| title | String | title của Button, show tooltip mặc định |
| apiUrlAfter | String | api gọi sau khi upload thành công |
| acceptType | String | danh sách kiểu file được upload |

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
import Dropzone from 'react-dropzone';
import {Global,Text,Config} from '../../../helpers';
import ApiGeneric from '../../../services/generic';
import HUI from '../../../helpers/UI';
import MyButtonHelpers from '../MyButtonHelpers';

/**
 * MyButtonType: upload.
 *
 * @class upload
 * @static
 * @namespace upload
 * @memberof MyButtonTypes
 * 
 */
class MyButton_Upload extends React.Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state={
      isUploading: false,
    };
  }

  /**
   * Thuộc tính sử dụng trong more:
   * 
   * @method more
   * @memberof MyButton.action
   * @param {String} [title] title cua Button, show tooltip mac dinh
   * @param {String} [apiUrlAfter] api goi sau khi upload thanh cong
   * @param {String} [acceptType] danh sach kieu file dc upload
   * 
  */
  more() {
  }
  
  _onDropZone=(files,rejected)=>{
    // console.warn('files,rejected: ', files,rejected);
    if(rejected!=null && rejected.length>0){
      if(files!=null && files.length==0){
        Global.Alert.showMsg(Text.get('msg_error'),Text.get('msg_error_upload_no_support'));
      }
    }
    if(files!=null && files.length>0){
      this._uploadFiles(files);
    }
  }

  _uploadFiles=(files)=>{
    const {screenCode} = this.props;
    this.setState({
      isUploading:true
    },()=>{
      let _customHeader = {
        ScreenCode: screenCode,
      };
      let _query = MyButtonHelpers.getApiQuery(this.props,{});
      if(_query){
        _customHeader = Object.assign(_customHeader,_query);
      }
      
      ApiGeneric.generic({
        request: MyButtonHelpers.getApiRequest(this.props,{method:'UPLOAD'}),
        customHeader: _customHeader,
        files: files,
        successCallBack:(response)=>{
          let _msg = response.Msg || 'Upload thành công';
          HUI.Toast.showSuccess(_msg);  
          this._requestApiAfterSuccess(response);      
          this.setState({
            isUploading: false
          })
        },
        errorCallBack:(error,response)=>{
          this.setState({
            isUploading: false
          })
        }
      });
    });
  }

  _requestApiAfterSuccess=(response)=>{
    const me = this;
    const {screenCode,projectId} = this.props;
    let _more = MyButtonHelpers.getMoreInConfig(this.props);    
    if(_more.apiUrlAfter && response && response.Data && response.Data.Photos && response.Data.Photos.length>0)
    {
      let _arrayId = [];
      for(let i in response.Data.Photos){
        let _p = response.Data.Photos[i];
        _arrayId.push(_p.Id);
      }
      let _queryData = {
        ScreenCode: screenCode,
        ProjectId: projectId,
        UploadedFileIds: _arrayId
      };
      ApiGeneric.generic({
        request:{
          method:'POST',
          url: `/api/v1/${_more.apiUrlAfter}`,
        },
        data: _queryData,
        successCallBack:(response)=>{
          let _msg = response.Msg || 'Update thành công';
          HUI.Toast.showSuccess(_msg);        
          this.setState({
            isUploading: false
          })

          if(!MyButtonHelpers.needReloadOrNot(me.props)){
            MyButtonHelpers.needReloadTableOrnot(me.props);
          }
        },
        errorCallBack:(error,response)=>{
          this.setState({
            isUploading: false
          })
        }
      });
    }
    else{
      if(!MyButtonHelpers.needReloadOrNot(me.props)){
        MyButtonHelpers.needReloadTableOrnot(me.props);
      }
    }
  }

  render() {            
    let _more = MyButtonHelpers.getMoreInConfig(this.props);
    return(
      <div style={{}}>
        <Button 
          disabled={this.state.isUploading}
          onClick={()=>{
            if(this._cDropzone!=null){
              this._cDropzone.open();
            }
          }}
          {...MyButtonHelpers.getMoreProps(this.props,null,null)}
        >
          {
            MyButtonHelpers.getTitle(this.props,null,{showLoading:this.state.isUploading})
          }
          <Dropzone ref={(r)=>{this._cDropzone=r;}} 
            accept={_more.acceptType||Config.fileUploadSupport}
            onDrop={this._onDropZone} style={{}}>
            {({getRootProps, getInputProps, isDragActive, open}) => {
              return (
                <div
                  {...getRootProps()}
                  className={`dropzone ${isDragActive?'dropzone--isActive':''}`}
                >
                  <input {...getInputProps()} />
                </div>
              )
            }}
          </Dropzone>
        </Button>          
      </div>    
    )
  }
}

export default MyButton_Upload;
```

