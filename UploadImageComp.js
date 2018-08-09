import React from 'react'

class UploadImageComp extends React.Component {

    render() {
        return (
            <div>
            <input style={{display: 'none'}} type="file" accept="image/*" 
            onChange = {this.props.fileHandler} ref={fileInput => this.fileInput = fileInput}/>
            <div onClick={() => {this.fileInput.click()}} style={{backgroundColor: this.props.bgColor, color: 'white', borderStyle: 'dotted', borderColor: 'white', height: '50px'}}><p style={{margin: '5px'}}>📂<br/>Select Profile Picture</p></div>
          </div>
        )
    }
}
export default UploadImageComp;
