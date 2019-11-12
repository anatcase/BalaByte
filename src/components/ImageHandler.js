// import cloudinary from 'cloudinary-core';
// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'dybzbstoi',api_key: "695564997941263",
// api_secret: "-jpNbRT83us6l2mfUQZfvebBvMg"
// });

const ImageHandler  = {
  UploadImage: function UploadImage(imageFile, onProgressChange, onImageUploadSuccess, onImageUploadError) {
    var url = `https://api.cloudinary.com/v1_1/dybzbstoi/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function(e) {
      var progress = Math.round((e.loaded * 100.0) / e.total);
      if (onProgressChange !== null) {
        onProgressChange(progress)
      }
      // document.getElementById('progress').style.width = progress + "%";
      //
    //   console.log(`fileuploadprogress data.loaded: ${e.loaded},
    // data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
         var response = JSON.parse(xhr.responseText);
        // // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        //var url = response.secure_url;

        onImageUploadSuccess(response.public_id)


      } else if (xhr.status !== 200 ){
        onImageUploadError(xhr.status)
      }
    };
    const unsignedUploadPreset = 'v2ugydrc';
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', imageFile);
    xhr.send(fd);
  },

  GetImageUrl: function GetImageUrl(imageId) {
    if (imageId !== null && imageId !== "" && imageId !== undefined) {
      return ("http://res.cloudinary.com/dybzbstoi/image/upload/" + imageId + ".jpg")
    } else {
      return null;
    }
  }
}

export default ImageHandler;
