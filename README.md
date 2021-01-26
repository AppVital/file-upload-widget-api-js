<p align="center"><img src="https://appvital.com/images/logo-appvital-dark-top.png" align="center" height="100"/></p>
<h1 align="center">
  file-upload-widget-api-js
</h1>
<p align="center">
  Javascript wrapper library to quickly integrate Appvital Filepicker in your application with just few lines of code.
</p>
<p align="center">
  <img src="https://cdn.appvital.com/appsite/static/appvital-file-picker-cloud-uploader.gif"  align="center" height="340"/>
</p>

## Core Features

*   **Drag & Drop** or **Copy & Paste** any file
*   Pick files from **multiple sources** including popular **online file shares**
*   **Upload** files straight to **your own** Amazon S3, Azure Bob & SFTP storages
*   Crop, rotate, flip and **enhance photos** to perfection with **built-in photo editor**
*   Generate **thumbnails**, apply text or image **watermarks**
*   **Complete control** with configurable options and **much more**

## Demo/Examples

See file picker in [action here](https://appvital.com/example/file-picker) with example configurations demonstrating various features.

## Quick Start

Install using npm:

```bash
npm install @appvitalinc/file-upload-widget-api-js
```

ES module
```
import { ApvFilePicker } from '@appvitalinc/file-upload-widget-api-js';
const picker = new ApvFilePicker('apikey');
```

UMD module
```javascript
<script src="https://cdn.appvital.com/app/fpicker/{version}/fpicker-client.min.js" crossorigin="anonymous"></script>
<script>
  const picker = new ApvFilePicker('apikey');
</script>
```
Picker can be initialized by calling picker.open(options). Options for the picker are [documented here](https://appvital.com/docs/file-picker).

## Documentation

You can find further documentation on available filepicker options and configuration details here at https://appvital.com/docs/file-picker#Quickstart-Javascript

## Contributing

Any of your contributions or ideas are more than welcome. Please consider that we follow the conventional commits specification to ensure consistent commit messages and changelog formatting.
