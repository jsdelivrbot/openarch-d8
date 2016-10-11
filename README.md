## OPEN Architecture

This is the source code for OPEN Architecture's website built with drupal 8, Gulp and Sass. Designed and developed in collaboration with OPEN Architecture. Site is currently in development. You can find old site where the new site will be soon -> [here](http://www.openarch.com)

## Dependancies 

drupal 8
Gulp/Sass
Susy
Nodejs /npm

Jquery plugins
[Flex Slider](https://github.com/woothemes/FlexSlider)
[FitVids.js](https://github.com/davatron5000/FitVids.js/)

drupal modules:
[libraries api](https://www.drupal.org/project/libraries)
[Chaos tool suite (ctools)](https://www.drupal.org/project/ctools)
[Flex Slider](https://www.drupal.org/project/flexslider)
[Fitvids](https://www.drupal.org/project/fitvids)

## Status

In development...

## Versions

#### 0.1.0

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

#### 0.2.0

* Added "wider" breakpoint, for min-width 960px, see breakpoints.yml
* Added "tiny" breakpoint, for max-width 350px, see breakpoints.yml
* made thumbnail gallery column count responsive as follows: use 1 col for tiny devices, 2 cols for mobile device, 3 for tablets/narrow and wide. Set gutter size to 1/2 of column size given 12 column layout. This is slightly smaller than what was specified in design mockup, but scales better for larger formats. 
* made thumnail gallery image size responsive so it fills column container as specified about at 1/2 column size for 12 column layout.
* simplified html base font sizes for breakponits to the following: use 14px base font-size for tiny and mobile breakpoints, 16px for narrow and wide. This seems to work better because wide breakpoint pulls sidebar out and it is jarring for sidebar to pop out and text to resize at same time. 17px/18px base font size were too large for current layouts anyways.
* removed extra padding on main content for wide (750px min) and wider (960px min) breakpoint
* removed footer line if only copyright showing.
* hide overflow for copyright notice

#### 0.3.0

* made footer sticky, ie stick to bottom of page when there is not enough content to fill page. required use flexbox for variable height footer, so browser support might be an issue. technique adapted from https://css-tricks.com/couple-takes-sticky-footer/
* made factsheet columns responsive to match grid used by relations, ie use 1 col for tiny devices, 2 cols for mobile device, 3 for tablets/narrow and wide, and 4 for wider (cur. 960-1200px). Set gutter size to 1/2 of column size given 12 column layout.
* about/practice now supports multiple image slideshow with swipe functionality
* made about/practice image size responsive
* made people page layout responsive. Text body now moves to side of image @960px wide
* added exposed sort to project/table page and placeholders for view mode.
* improved the way recent news section rows wrap and icon alignment with top of multiline. 
* format sidebar for mobile/narrow breakpoints

#### 0.3.1

* fix Warning: mkdir(): Permission denied in Drupal\Component\PhpStorage\FileStorage->createDirectory() (line 165 of core/lib/Drupal/Component/PhpStorage/FileStorage.php)
change location of temp directory to site/default/files/tmp
change permissions on files directory to 777

#### TBD:

* menu row height needs to resize responsively, too big at smallery breakpoints
* add extra padding on main content for wider (960px min) breakpoint
* remove tag icon @tiny
* add more relations link under relations.
* turn floating tags into gallery so they collapse better.
* resize sidebar @wider breakpoint to 1/5 of 10 column grid.
* searchbar not quite centered vertically for some reason
* remove social icons in sidebar for breakpoints where icons are visible in footer, ie tiny, mobile and narrow.

#### ISSUES:

* need to resolve issue with titlebar and titlebar--multiline inconsistant heights and icon misalignment

## Liscense
 
Website is copyright &copy; 2016 OPEN Architecture