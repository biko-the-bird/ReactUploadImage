# ReactUploadImage
Easily Upload Images to react

![Demo Image should be here](screenshot.png?raw=true "Title")

# Usage
Import The Component from whereever you put it.
```javascript
import UploadImageComp from 'UploadImageComp'
```

put this in your return i.e.:
```javascript
  return (
 <UploadImageComp bgColor={"#BADA55"} fileHandler={this.fileHandler}/>
 )

```

or to use fileName:
```javascript
  return (
 <UploadImageComp bgColor={"#BADA55"} fileHandler={this.fileHandler} fileName={"YOUR FILE NAME HERE"}/>
 )

```




# Props
bgColor: set the background color of the image uploader.

fileHandler: function to handle the uploaded file.

fileName: optional file name to show once a file has been uploaded

Example of fileHandler function:
```javascript

fileHandler = event => {
#the file is event.target.files[0] you can do whatever you want once you have it
  this.setState({
    photoFile: event.target.files[0]
  })
}
```



Example of fileHandler with file name function:
```javascript

fileHandler = event => {
#the file is event.target.files[0] you can do whatever you want once you have it
  this.setState({
    photoFile: event.target.files[0],
    fileName: event.target.files[0].name
  })
}
```
