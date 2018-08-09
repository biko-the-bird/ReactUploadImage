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

# Props
bgColor: set the background color of the image uploader.
fileHandler: function to handle the uploaded file.

Example of fileHandler function:
```javascript

fileHandler = event => {
#the file is event.target.files[0] you can do whatever you want once you have it
  this.setState({
    photoFile: event.target.files[0]
  })
}
```
