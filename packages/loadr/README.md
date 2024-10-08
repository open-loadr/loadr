<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/open-loadr/loadr/main/banner/banner.svg"/>
<br/>

[![Published on npm](https://img.shields.io/npm/v/open-loadr)](https://www.npmjs.com/package/open-loadr)
[![](https://data.jsdelivr.com/v1/package/npm/open-loadr/badge)](https://www.jsdelivr.com/package/npm/open-loadr)
<!--[![npm Downloads](https://img.shields.io/npm/dm/open-emojify?label=npm%20downloads)](https://npm-stat.com/charts.html?package=open-emojify)-->

<div align="left">Loadr is an efficient solution for seamlessly loading large images in HTML, with a minified size of under 1 KB.</div>
<div align="left">

[Demo](https://open-loadr.github.io/loadr/)  

## Installation

### CDN

Import Loadr using CDN.

```index.html```

```html
<script src="https://cdn.jsdelivr.net/npm/open-loadr/loadr.min.js"></script>
```

#### 🚧 Specific Version
```html
<script src="https://cdn.jsdelivr.net/npm/open-loadr@latest/loadr.min.js"></script>
```

## Usage
Add the ```hr-src``` to the HTML ```<img>``` element, This will be your high-res image. In the ```src``` attribute is the low-res version of your image. Loadr will load the high-res image in the background then update the ```src``` with its URL, Replacing the low-res image.

```index.html```

<!-- ```html
<img hr-src="/images/high_res.png" src="/images/low_res.png">
``` -->

```html
<img hr-src="https://open-loadr.github.io/loadr/images/the_starry_night/high_res.jpg" src="https://open-loadr.github.io/loadr/images/the_starry_night/low_res.png">
```

Call Loadr in your Javascript. That's it 🎉.

```index.html```

```html
<script>
  new Loadr();
</script>
```

Check out the Demo on [Codepen.](https://codepen.io/GreenestGoat/pen/yLdRzPN)

### Extra step
Lets add some styling to the ```<img>``` element.

```style.css```

```css
img {
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 15px;
  overflow: hidden;
}
```

## Customization

Loadr comes with variables that can be easily customized.

```index.html```

```html
<script>
  new Loadr({
    async: false,
    cache: true,
    delay: '750'
  });
</script>
```

Check out the Customization Demo on [Codepen.](https://codepen.io/GreenestGoat/pen/BagqdNR)

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present open-loadr.

See [LICENSE](https://github.com/open-loadr/loadr/blob/main/LICENSE) for more information.
