<!-- @file Project Page -->
# Bootstrap

> Sleek, intuitive, and powerful mobile first front-end framework for faster and
> easier web development. Bootstrap has become one of the most popular front-end
> frameworks and open source projects in the world.

This base theme bridges the gap between Drupal and the [Bootstrap Framework].

### Features
- [jsDelivr CDN](http://www.jsdelivr.com) for "out-of-the-box" styling and
  faster page load times.
- [Bootswatch](http://bootswatch.com) theme support, if using the CDN.
- Glyphicons support via [Icon API](https://www.drupal.org/project/icon).
- Extensive integration and template/preprocessor overrides for most of the
  [Bootstrap Framework] CSS, Components and JavaScript
- Theme settings to further enhance the Drupal Bootstrap integration:
  - [Breadcrumbs](http://getbootstrap.com/components/#breadcrumbs)
  - [Navbar](http://getbootstrap.com/components/#navbar)
  - [Popovers](http://getbootstrap.com/javascript/#popovers)
  - [Tooltips](http://getbootstrap.com/javascript/#tooltips)
  - [Wells](http://getbootstrap.com/components/#wells) (per region)

### Documentation
Visit the project's [official documentation site](http://drupal-bootstrap.org)
or the markdown files inside the `./docs` folder.

[Bootstrap Framework]: http://getbootstrap.com

## Versions

#### 0.1.0

9.21.2016

* Frontpage fully responsive. Position and size of text and elements adapts to all mobile device types and screen sizes. Still need to set max-width on desktop so layout doesn't stretch to fit full window size, but rather stops growing at ~1200px.
* Sidebar added to show on wide breakpoint
* menu link placeholder icon added to top-right next to language switcher links to collapse side bar. 
* Searchbar placeholder added to layout.
* Icon placeholders added to link to 3rd-party services for news feeds, etc.
* footer menu includes searchbar, links, and copyright notice. 
* Footer collapses when sidebar appears at wide breakpoint.
* frontpage flexslider slideshow automatically starts
* enabled flexslider slideshow control with finger swipes for mobile devices 
* Clickable regions bigger for easily clicking buttons and links with fingers.

#### 0.1.1

9.22.2016

* Added "wider" breakpoint, for min-width 960px, see breakpoints.yml
* Added "tiny" breakpoint, for max-width 350px, see breakpoints.yml
* made thumbnail gallery column count responsive as follows: use 1 col for tiny devices, 2 cols for mobile device, 3 for tablets/narrow and wide. Set gutter size to 1/2 of column size given 12 column layout. This is slightly smaller than what was specified in design mockup, but scales better for larger formats. 
* made thumnail gallery image size responsive so it fills column container as specified about at 1/2 column size for 12 column layout.
* simplified html base font sizes for breakponits to the following: use 14px base font-size for tiny and mobile breakpoints, 16px for narrow and wide. This seems to work better because wide breakpoint pulls sidebar out and it is jarring for sidebar to pop out and text to resize at same time. 17px/18px base font size were too large for current layouts anyways.
* removed extra padding on main content for wide (750px min) and wider (960px min) breakpoint
* removed footer line if only copyright showing.
* hide overflow for copyright notice

#### TBD:

* menu row height needs to resize responsively, too big at smallery breakpoints
* add extra padding on main content for wider (960px min) breakpoint
* remove tag icon @tiny
* add more relations link under relations.
* turn floating tags into gallery so they collapse better.
* resize sidebar @wider breakpoint to 1/5 of 10 column grid.