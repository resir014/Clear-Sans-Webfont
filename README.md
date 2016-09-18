# Clear Sans Webfont

> Webfont conversion of the Clear Sans typeface designed by Intel.

This is the webfont conversion for the [Clear Sans](https://01.org/clear-sans) typeface, designed by the [Intel® Open Source Technology Center](https://01.org/) This webfont conversion is available in TrueType, WOFF, EOT and SVG format, which ensures that you have the best format for the font to be displayed smoothly on any system.

[View the specimen.](http://resir014.github.io/Clear-Sans-Webfont/)

## How to include

### Manually

To use this font, simply put the `fonts` folder in your root directory, and the `clear-sans.css` file on the `css/` folder.

Next, link the CSS as follows:

```html
<link rel="stylesheet" type="text/css" media="screen" href="css/clear-sans.css">
```

Then call the Clear Sans font on your CSS with:

```css
.class {
  font-family: 'Clear Sans', sans-serif;
}
```

### Via package managers

NPM:

```bash
$ npm install clear-sans-webfont
```

Bower:

```bash
$ bower install clear-sans-webfont
```

### Via RawGit CDN

To include the CSS file from the RawGit CDN link, use the following HTML.

```html
<link rel="stylesheet" type="text/css" media="screen" href="https://cdn.rawgit.com/resir014/Clear-Sans-Webfont/v1.0.0/css/clear-sans.css">
```

## Working with docs

### Requirements

* [Node.js (v0.12.x or v4.x)](http://nodejs.org/download/)
* [Ruby (>=v2.0.0)](https://www.ruby-lang.org/en/)
* Jekyll (>=v2.0.0): `$ gem install jekyll`
* Sass: `$ gem install sass`
* Grunt: `$ npm install -g grunt-cli`

Install the Node dependencies by running this command:

```
$ npm install
```

### Running locally

Open a terminal window and run the following command to start a Jekyll server:

```
$ jekyll serve
```

Then, open another terminal window and run the following command to automatically build the CSS every time a file is changed:

```
$ grunt watch
```

Alternatively, you can manually run `grunt` and `jekyll serve` when needed.

### Deploying to `gh-pages`

Run the following command to deploy the docs to the `gh-pages` branch.

```
$ grunt publish
```

## Contributing

1. [Fork it](https://github.com/resir014/Clear-Sans-Webfont/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Create a new Pull Request

## License

The Clear Sans typeface is &copy; Intel Corporation, released under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

This webfont conversion is &copy; Resi Respati, released under the [MIT license](https://github.com/resir014/Clear-Sans-Webfont/blob/master/LICENSE).
