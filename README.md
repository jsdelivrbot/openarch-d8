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

#### 0.4.0

* make press table responsive. collapse content incrementally at smaller breakpoints, etc.
* make awards table responsive. collapse content incrementally at smaller breakpoints, etc.
* make projects table responsive. collapse content incrementally at smaller breakpoints, etc.
* Add tag icon to events page 
* Fix broken event tag
* Added event type test content (removed dummy content)
* Remove body field from Image Set Content type.
* Add image set test content (removed dummy content)
* Add translation=interface filter to projects table/gallery views
* Fix Task Relation Gallery filter/context/reference set to correctly retrieve thumbnails for relations
* Make facts show as "-" when no value is entered in form
* Add border top to factsheet
* Move credit fields to task form
* Adjust padding on relations gallery and factsheet
* Add border below task factsheet

#### 0.4.1

* Add translation=interface filter to events view
* Delete Postcard event
* Translate Test Events
* Delete Collapse Events Toolbar icon
* Add translation=interface filter to  Featured Work, Manifesto and Recent News.

#### 0.4.2

* Give anonymous users access to empty page callbacks
* Change front page from /emptypagetest to /
* Adjust page restrictions for front page blocks to /

#### 0.4.3

* change front page to /frontpage

#### 0.4.4

* Fix /people page so media format updates on doc ready AND window resize

#### 0.4.5

* Fix off-canvas sidebar menu
* menu inits closed, ie off screen, for mobile/narrow breakpoints
* menu inits open, ie on screen, for wide/wider breakpoints
* menu closed after clicking menu item for mobile/narrow breakpoints
* menu stays open after clicking menu item for wide/wider breeakpoints

#### 0.4.6

* Fix max width behavior
* Set max width to 1200px

#### 0.5.0

* Reduced sidebar/footer nav to 1rem font-size to match content tables
* Add 750px max width slideshow to practice.
* Remove global max-width.
* Refactor card class to replace headlines, statement, practice, and event classes.
* Fixed issue targeting media class in mediacard.js

#### 0.5.1

* Make selectable region larger on menu link

#### 0.5.2

* Fix broken frontpage internal links to practice and events

#### 0.5.3

* Adjust featured-work slideshow layout
* Bleed edges on mobile/narrow breakpoints
* Replace titlebar caption with ribbon
* Add slide counter placeholder to caption

#### TBD

* people thumbs should size to grid so width = sidebar width
* events thumbs should be one grid so widht = full width for mobile, and 2 or 3 x sidebar depending on breakpoint
* press slideshow should be
* remove tag icon @tiny
* remove relation thumbs at tiny
* turn floating tags into gallery so they collapse better.
* resize sidebar @wider breakpoint to 1/5 of 10 column grid.
* searchbar not quite centered vertically for some reason
* remove social icons in sidebar for breakpoints where icons are visible in footer, ie tiny, mobile and narrow.
* refactor flexslider
* nothing to indicate what page your on
* speed up cache clearing - http://a-fro.com/speed-up-cache-clearing-on-drupal7
* combine project pages & change views w/ajax or load both and switch w/js
* replace font-awesome icons with custom icons.
* edit links for admin
* make event teasers media objects
* permissions for admin, editor, staff
* units on size and site
* ask drupal community why references won't sync btw languages!!
* task tags wrapping badly - fix
* remove body field AND autofill title in image set content types
* make use of page and block view types consistent. (remember need page to use exposed filters)
* empty facts not hidden, showing blank line with ":"
* Credit should be
* NO fields should be set to "users may translate this field"
* hide relation gallery at tiny breakpoint
* set permissions for anonomous user
* remove core and vendor from repo, let composer manage them
* consider replacing empty page callbacks with custom modules.
* get drush working on server already.
* theme login page/process
* github icon out of place for mobile breakpoint
* develop vertical spacing strategy
* reconsider adding extra padding on main content for wider (960px min) breakpoint
* multilingual logo -> http://drupal.stackexchange.com/questions/79033/proper-way-to-get-the-base-path-when-including-an-image-from-a-module

#### ISSUES:

* need to resolve issue with titlebar and titlebar--multiline inconsistant heights and icon misalignment
* custom icons  break on chinese pages (presumable has to do with img src not accounting for "cn" in address) 
* accordian menu not working
* people mediaCard.js calls update on page load but not working as expected
* slider getting stuck in undefined state when drawer is open and window dragged from narrow to wide breakpoint.
* slider stuck in undef state when load page on wider, then drag to widest.

## Liscense
 
Website is copyright &copy; 2016 OPEN Architecture