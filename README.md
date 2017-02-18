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

#### 0.5.4

* Make sidebar behavior active for widest breakpoint

#### 0.5.5

* Change slideshow image width to 880px
* Fix main toolbar margins
* Adjust icon sizing
* Hide tags in relation gallery at narrow bp
* Reduce global font-size for narrow and wide
* Adjust sidebar background color
* Extend sidebar item border to edges
* Adjust margins on main content
* Remove menu button for wide, wider, widest breakpoints

#### 0.5.6

* new press icons
* remove link from press table title
* fix award table link
* adjust projects toolbar icon sizing
* adjusts header padding
* add view mode icons to projects gallery
* add projects view mode icon paths for links
* disable widest breakpoint
* set max width at 960px for now

#### 0.5.7

* rewrite media class
* increase icon size and selectable region
* increase header size
* adjust config vars for better vertical spacing based on baseline grid
* update searchbar position to align with header

#### 0.6.0

* implement task page layout for widest breakpoint
* make slideshow two slides wide
* adjust text size/layout for widest bp
* move block-level positioning from main to card class
* change widest bp to 1200px
* reduce gutter size to 1/2 column width for widest bp
* reduce header height and logo

#### 0.6.1

* implement people page layout for widest breakpoint
* implement front page layout for widest breakpoint
* implement table page layouts for widest breakpoint
* implement people page layout for widest breakpoint
* implement practice page layout for widest breakpoint

#### 0.6.2

* implement events page layout for widest breakpoint

#### 0.6.3

* fix breakpoint descrepencies btw css, js, and drupul
* add 10 image styles for responsive task images

#### 0.6.4

* add support for embedded video
* add multimedia task page
* add video listing
* make video listing items expandable
* change base font and sizing
* remove buffer from front page

#### 0.6.5

* remove body field from award type
* remove menu option from award form
* add awards view filter (translation language = interface language selected for page)
* remove url alias and sticky options from award form display
* fixed awards external link icon translation issue by replacing {{ directory }} variable with custom defined {{ theme_path }}.
* add awards content
* add sort by date to awards
* fix awards external link (theme degug text breaking it now)

#### 0.6.6

* change credits to plain text field
* hide relations block if no results
* change rendering language on task facts view block to "interface text language selected for page"
* add task content
* add task group field

#### 0.6.7

* add event to date
* increase headline font size and line height

#### 0.6.8

* fix duplication of relations issue

#### 0.6.9

* add views infinite scroll module
* enable infites scroll for project gallery and events
* fix infite scroll / flexslider bug

#### 0.6.10

* fix pager for featured work slideshow
* add ideas listing
* add task group to task
* add views sort / filters
* update toolbar style
* replace translation filter with interface rendering language for project table/gallery views.
* fix task slideshow image duplication issue

#### 0.6.11

* create updated video gallery
* change icon hover color to orange
* add bold title class for videos
* bleed video gallery on tiny,mobile,narrow breakpoints

#### 0.6.12

* update press page to include slideshow
* add press to image set reference type list
* remove press from image set ref type list
* delete unused/old task slideshow block views
* add press slideshow view
* add optional image files field to press
* modify table at full breakpoint
 
#### 0.6.13

* change recent events font-size /background
* make recent events expandable 3 items
* create book content type fields

#### 0.6.14

* move layout margin to cards

#### 0.6.15

* center header nav
* update embed video settings
* add related media section
* upload imagesets
* add coverage section, but disable for now

#### 0.6.16

* add featured press content type
* fix external and file links on press page
* add feature cover images
* add press content
* remove publication creation date from press
* update press form settings
* change press sort order to ascending

#### 0.6.17

* remove social links from recent news (for now)
* fix stacking featured work slideshow issue and stacking order
* fix flexslider transition issue
* fix featured word image stretching issue

#### 0.6.18

* make minor fixes/changes to recent news
* fix broken links on recent news
* change recent news view to output plain text, let twig handle routing
* add up arrow to captions
* add padding to captions
* change date format on recent news
* update tag icon on recent news tags
* delete unused views fields on recent news

#### 0.6.19

* fix fullpage not working with cn issue.

#### 0.6.20

* make sidebar scrollable

#### 0.6.21

* update projects table layout
* fix broken projects table links
* remove tags from table
* adjust table breakpoints to align with global bps
* change global text for full to 17px
* adjust ribbon to fill inherit height by default
* change mediatitle content to 15% margin
* add fullwidth label
* modify ideas relations subclass

#### 0.6.22

* add responsive image styles for book
* fix image gap

#### 0.6.23

* fix task tag links
* fix relations link

#### 0.6.24

* fix menu nolink issue
* fix videos and related media links

#### 0.6.25

* remove task slideshow image link to content
* add inverted colors theme

#### 0.6.26

* adjust projects gallery caption formating

#### 0.6.27

* delete unused views

#### 0.6.28

* uninstall unused third-party modules
* uninstall jssor slider module
* uninstall jssor slider
* uninstall views slideshow cycle

#### 0.6.29

* uninstall quick edit and contextual links

#### 0.6.31

* uninstall unused themes
* delete uninstalled themes
* add ideas exposed filter

#### 0.6.32

* refactor color config
* refactor font size config
* refactor bd class
* add focus and label partials
* delete old teasers class

#### 0.6.33

* remove border lines from tabs at widest/full bps
* reduce row height for table rows at widest bp
* increate row height for tables at full bp

#### 0.6.34

* refactor table classg

#### 0.6.35

* refactor manifesto class
* refactor recent news class
* refactor factsheet class

#### 0.6.36

* make text bodies expandable with readmore.js

#### 0.6.37

* refactor card class

#### 0.6.38

* add background/border to header on frontpage
* update main-header menu styling
* removed manifesto from front page
* add manifesto page and menu item under "about us"
* add related work title and link to awards table.
* add press coverage type to task
* remove drop shadows from page
* add drop shadows or border to header
* make table rows clickable
* upate filters, move views to menu
* update featured press slideshow and content.

#### 0.6.39

* Reduce number of book pages shown in books listing
* update events sort order
* remove body trimming form event body on events and event pages
* add functionality to close sidebar by clicking anywhere
* adjust projects table columns widths again.

#### 0.7.0

* alpha release

#### 0.7.1

* fix visor class to disable on fullpage
* comment out js removal of buffer on widest

#### 0.7.2

* fix header background
* fix issue of header vanising when resizing from fullpage
* add footer to frontpage when not fullpage

#### 0.7.3

* remove default event image
* make filter icon button big
* make visor retract more to hide drop shadow.
* delete placeholder event

#### 0.7.4

* adjust language switcher padding
* fix coverage links
* add menu toggler to frontpage
* fix invert on frontpage
* fix event title margin collapse
* center contact info
* update awards table spacing
* update press table spacing

#### 0.7.5

* add related awards section

#### 0.7.6

* adjust font sizing

#### 0.7.7

* enable fullpage on frontpage for all breakpoints

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
* install views infinite scroll for paging -> https://www.drupal.org/project/views_infinite_scroll
* formate press table date
* hide table link icons if no link
* no buffer only only on front page at widest bp
* remove unused image styles
* fix recent news styling of borders, etc.
* delete unused/old themes
* try to rename open_scratch theme to open_theme or just open
* document necessity of importing images at 16:10 and leave border for diagrams so they don't get cropped.
* document import images at 2560, possibly 3840
* add editor permission
* change raster icons to vector
* external link on awards list should only show if link exists.
* external link on awards list not working
* remove all custom display settings (teaser, full, etc) from bottom of content type > manage display.
* make sure all imported images go into raw_images/Y-m
* handle case when there are no relations for task
* implement text trimmed/summary with more button
* login form needs work
* make sure non-translatable field are marked non-translatable
* max-char len for text fields should be more reasonable.
* add press/awards relations to task pages
* delete unused styles (image styles, responsive style, flexslider optionsets, etc.)
* how to best deal with slider drawer/canvase for wide,wider,widest,full?
* get rid of mediaCard on people page
* remove duplication in sidebar__top and main-header  
* add if toolbar conditional
* multimedia could be removed, just use task views
* card relation inconsistent with structure
* allow upscaling of images!
* redo icons
* combine projects gallery and table into single view and use js to switch between them.
* sort out button/select/dropdown mess
* remove translation language filter from view. instead set rendering language to interface language. NO, thats not right. Should filter for translation language = interface, then render language = row content!! This is causing issue when list fields are exposed filters so moving that to issues.
* make sure publish status is active filter for all views. OR maybe remove this for performance.
* go thru all content types and verify right fields are translatable.
* break up page.html.twig, extract blocks, etc...
* consolidate icon and icongallery classes
* Tooltips!!!
* remove max image size constraints on images
* justify people text and probably all body texts.
* give each thumbnail flexslider slideshow random delay/speed (see [here](http://stackoverflow.com/questions/28854459/how-to-randomize-slideshow-speed-in-flexslider?rq=1) and [here](http://stackoverflow.com/questions/13269438/flexslider-different-slideshow-speed-on-each-slide))
* add 1.5x multipliers for mobile (supports android)
* convert press type to publication. (prob too late for that)
* icon class should not use em for font-size.
* change all link fields to field_link.
* event node page relations duplicates.
* delete fields from page content type, or prob should just delete content type.
* update responsive image sizes for events wider/widest/full
* consider fullpage slideshow at node page? then smaller responsive images sizes...
* fix 
* thumbnails in expandable rows (events, etc) should be height contrained b/c need to set max-height for expanded row.
* views should only return plain text and let twig do rest.
* remove inline-block class from header elements inside ribbon. instead wrap in label.
* .custom-dropdown > select font is sizing weird. currently using magic .95rem to match font-size with everything else.
* sortable tables
* header__center only works for nav
* thumb class should be list w/ li and h5 elments.
* thumb should have thumb thumb__image and thumb__caption classes.
* pad bottom of related media
* remove language selector from all content forms!
* flexslider slideshow transition not working on frontpage while fullpage.js enabled for widest/full breakpoints.
* re-order work images
* create flexslider optionsets for thumb, frontpage, other and delete unused
* remove css class from views facts collabs, facts, credits
* set up trusted hosts (https://www.drupal.org/node/1992030)
* border colors.
* make readmorejs bodies use breakpoints so not cropping text.
* scroll responsive header 
* optimize core twig templates by deleted unused conditionals/variables/etc..?
* change press image style from scale to h to resize, where w = h*.8
* add youku video embed submodule (https://www.drupal.org/node/2329571)
* optimize javascript (use find() for caching dom)
* handle how filters collapse and stack!
* remove table breakpoints, just use global bps.
* fix spacing btw event title and body when no images
* make sure all expandable headers are pspaced.
* consider replacing or adding related events to event
* clean up exposed form and dropdown

#### ISSUES:

* need to resolve issue with titlebar and titlebar--multiline inconsistant heights and icon misalignment
* custom icons  break on chinese pages (presumable has to do with img src not accounting for "cn" in address) 
* accordian menu not working (see https://www.drupal.org/node/1543750)
* people mediaCard.js calls update on page load but not working as expected
* slider getting stuck in undefined state when drawer is open and window dragged from narrow to wide breakpoint.
* slider stuck in undef state when load page on wider, then drag to widest.
* awards icon is not displaying for cn 
* awards language filter not working, all translations show up
* views infite scroll not working with flexslider ( temp fix -> added flexslider function to infinite-scroll.js as suggested here -> https://www.drupal.org/node/2317319) but need to make this more robust so update doesn't break it again.
* Should filter for translation language = interface, then render language = row content!! This is causing issue with projects table/gallery when task group list field is exposed filters AND same list field is NOT translatable. Changing to translatable solve (but then task group discrep can arrise and shouldn't be translatable anyway). Removing translation language filter from view and instead setting rendering language to interface language also solves (but this SHOULD create duplicates in thumb gallery). WRONG Again, correct behavior SHOULD ACTUALLY be to NOT filter by translation AND render by interface BECAUSE, then if you having translated a node, it will STILL show up in listing!!! So real issue seems to be exposed list field causing duplicates. For now, can 
* frontpage not working in chinese
* can't uninstall comment core module!
* table pagers not inverting
* table pagers should have bigr buttons for mobile
* bd class should be responsible for text color.
* replace all title--prim, title--sec, etc with atomic classes.
* sometimes invert gets in bad state when using ajax when inverted. eg events next page.
* event flex slideshow not working with variable heights again...
x header vanising when resizing from fullpage 
* duplicated in coverage.
* toolbar filters not quite vertically centered. 
* grid broken on frontpage

## Liscense
 
Website is copyright &copy; 2016 OPEN Architecture