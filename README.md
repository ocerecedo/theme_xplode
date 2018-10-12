# adapt-bgImages  

**adapt-bgImages** is a *theme* based on the core [vanilla theme](https://github.com/adaptlearning/adapt-contrib-vanilla).  
It adds fixed positioned full screen background images to the menu and pages. 

## Features:  
- Different background-image for each page.
- Each background image does have 4 versions (landscape, portrait, small-landscape, small-portrait) loaded based on the device size and orientation.   
- Easy customization. You can add your own images to the Theme. 


## Installation

* With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:  
`adapt install adapt-bgImages`

* In the Adapt authoring tool, it may be installed using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).  

## Uninstallation  
The Adapt framework does not allow the installation of more than one theme at a time. In order to replace **bgImages** it must be uninstalled. With the root of your framework installation as your current working directory, run the following command:  
`adapt uninstall adapt-bgImages`  

## Structure 
The structure of the theme is based on the Vanilla theme. For more information about the structure, please refere to the [core themes documentation](https://github.com/adaptlearning/adapt-contrib-vanilla#structure). 

| Folder/File         | Description |
|---------------------|-------------|
| assets              | This is the location of the background images. Please overwrite the existing images with your custom images. You are also welcome to add more images. |
| less/bg-images.less | In this file you can customize the bgImages theme specific variables. See below for more information. |


## Use it in your Course    
Once the theme is installed you can use it with your course. 

### Select a background image for a page   
By default, this theme includes 4 different background images. The images are stored in the `/assets/` directory. To apply image "/assets/img-a-m-l.png" to a page, add the class `bg-image-1` to the `classes`-attribute of the contentObject. `bg-image-1` actually instructs the browser to load 1 of 4 different images depending on the device size and orientation. Please refer to the table below for how the imagenames are mapped to the class and device attributes.

| image name | device width | device orientation | css class |
|------------|--------------|--------------------|-----------|
| img-1-m-l.png | > 760px | landscape | bg-image-1 |
| img-1-m-p.png | > 760px | porttrait | bg-image-1 |
| img-1-s-l.png | < 760px | landscape | bg-image-1 |
| img-1-s-p.png | < 760px | porttrait | bg-image-1 |
| | | | |
| img-2-m-l.png | > 760px | landscape | bg-image-2 |
| img-2-m-p.png | > 760px | porttrait | bg-image-2 |
| img-2-s-l.png | < 760px | landscape | bg-image-2 |
| img-2-s-p.png | < 760px | porttrait | bg-image-2 |
| | | | |
| img-3-m-l.png | > 760px | landscape | bg-image-3 |
| img-3-m-p.png | > 760px | porttrait | bg-image-3 |
| img-3-s-l.png | < 760px | landscape | bg-image-3 |
| img-3-s-p.png | < 760px | porttrait | bg-image-3 |
| | | | |
| img-4-m-l.png | > 760px | landscape | bg-image-4 |
| img-4-m-p.png | > 760px | porttrait | bg-image-4 |
| img-4-s-l.png | < 760px | landscape | bg-image-4 |
| img-4-s-p.png | < 760px | porttrait | bg-image-4 |
| | | | |
| menu-m-l.png | > 760px | landscape | no class required, will be applied to menu page |
| menu-m-p.png | > 760px | porttrait | no class required, will be applied to menu page |
| menu-s-l.png | < 760px | landscape | no class required, will be applied to menu page |
| menu-s-p.png | < 760px | porttrait | no class required, will be applied to menu page |

#### Use your own images 
##### Overwrite   
Simply replace the existing images in the `/assets/` folder with your custom images.

##### Add more images to the list  
The image names are defined in `/less/bg-images.less`. in this file you can update the name or add more images to the list by mutating the variables `@bg-images-landscape, @bg-images-portrait, @bg-images-small-landscape, @bg-images-small-portrait`.
To add your custom image, add it to the `/assets/` folder and append the name to the variables. Please note that all 4 variables must have the same number of comma separated image-paths. If you add a new image to this variable, the css class for this image will be `bg-image-5` as it is the 5th item in the list.

### "Windows" between 2 blocks   
Since the content of the page scrolls over the background images, it might be usefull to add a transparent gap between two blocks. With this approach you can structure the content and create a interesting effects. 
Add the class `window-10` to a blocks `_classes`-attribute to add a 10% gap at the top of the block. By default, the theme supports the following values defined in one variable:     
` @window-spacing: 10, 15, 20, 25, 33, 50, 75, 100; `

If you would like to use a spacing that is not in the default list, you can add the value to the list. Just make sure that all values a separated with a comma and the declaration ends with a `;`.

### Article headers    
Article headers will have a transparent background. So the text is displayed directly over the background-image. A text shadow is applied to this text for legibility. You can customize the shadow-color in `/less/colors.less` with the `@article-title-text-shadow` and `@article-body-text-shadow` variables.   

### hide the page-header   
To hide the page-header, add the `hide-header` class to a contentObjects `_classes`-attribute. 

## Limitations
 
No known limitations.  

----------------------------
**Version number:**  1.0.0   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>       
**Framework versions:**  2.0     
**Author / maintainer:** [LearnChamp](https://github.com/LearnChamp)    
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8, Opera    
