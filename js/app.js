const picker = new ApvFilepicker("YOUR-API-KEY");

function openFilepicker(options) {
  picker.open(options);
}

function filepicker_callback(data) {
  console.log("files uploaded !!");
  console.log(data); //array of file metadata object received
  var markup = "";

  if (data.files) {
    var photoFormats = [".jpg", ".png", ".gif", ".bmp"];

    //Replace this URL path to your own storage location here
    let urlroot =
      "https://apv-filepicker-demo-uploads.s3.amazonaws.com/file-picker-demo/";
    let url = "";
    Array.from(data.files).forEach((file) => {
      url = "";

      if (photoFormats.includes(file.extension)) {
        url = `${urlroot}${file.fileName}`; // urlroot.concat(file.fileName);
      } else {
        // for non-image file types show a generic image
        url = "https://cdn.appvital.com/app/fpicker/1.0.0/img/file-all-lg.png";
      }

      markup = `${markup}
                <div class="row mb-3">
                    <div class="col">
                      <img src="${url}" />
                    </div>
                    <div class="col">
                      File Name: ${file.fileName}<br>
                      Type: ${file.type}<br>
                      Size: ${file.size}<br>
                      Extension: ${file.extension}<br>
                      Source: ${file.source}
                    </div>
                  </div>`;

      document.getElementById("fileContainer").innerHTML = markup;
    });
  }
}
