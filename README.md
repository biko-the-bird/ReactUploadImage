# ReactUploadImage
Easily Upload Images to react

![Demo Image should be here](screenshot.png?raw=true "Title")
![Demo Image should be here](screenshotWithFile.png?raw=true "Title")

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

so if you want to use fileName its better to structure your return like:
```
return (
{this.doWehaveAFileChecker()}
)
```
and put this in ```doWeHaveAFileChecker()```:
```
doWehaveAFileChecker() {
    if (this.state.fileName) {
      return (<UploadImageComp bgColor={"#BADA55"} fileHandler={this.fileSelectHandler} fileName={this.state.fileName}/>
      )
    } else {
      return (<UploadImageComp bgColor={"#BADA55"} fileHandler={this.fileSelectHandler}/>
      )
    }
  }
```

Don't forget to add ```this.doWeHaveAFileChecker = this.doWeHaveAFileChecker``` to your constructor.


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
