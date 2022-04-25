/*----------------------------------------------------
@File: Default Styles
@Author: Nasir Uddin
@URL: http://nasiruddin.com

This file contains the styling for the actual theme, this
is the file you need to edit to change the look of the
theme.

This files contents are outlined below.

  1.  Variables
  2.  Prefix
  3.  Preloader
  4.  Shortcode
  5.  Header
  6.  Project
  7.  Service
  8.  Our Team
  9.  Fun Facts
 10.  Our Works
 11.  Quote
 12.  Cause
 13.  Testimonial
 14.  Themes
 15.  Contact
 16.  Portfolio
 17.  Footer
 18.  Single
 19.  Error
----------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*Prefix Styles*/
::-webkit-scrollbar { width: 5px; height: 5px;}
::-webkit-scrollbar-track {  background-color: #999;border-radius: 10px;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 5px;}

.m0 {
  margin: 0;
}
.p0 {
  padding: 0;
}
body {
  position: relative;
  transition: all 300ms ease-in-out 0s;
  /*Global Font*/
  /*Floating*/
  /*Section Fix*/
}
body * {
  position: relative;
}
body .fleft {
  float: left;
}
body .fright {
  float: right;
}
body section.row,
body header.row,
body footer.row {
  margin: 0;
  position: relative;
}
/*Ancore*/
a,
.btn,
button {
  outline: none;
  color: #42b6ff;
  transition: all 300ms ease-in-out 0s;
}
a:before,
.btn:before,
button:before,
a:after,
.btn:after,
button:after {
  transition: all 300ms ease-in-out 0s;
}
a:focus,
.btn:focus,
button:focus,
a:hover,
.btn:hover,
button:hover {
  outline: none;
  text-decoration: none;
  transition: all 300ms ease-in-out 0s;
}
/*Preloader*/
.preloader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  background: #fff;
}
.preloader .dots-loader {
  position: absolute;
  top: calc(50% - 3.5px);
  left: calc(50% - 3.5px);
}
/*----------------------------------------------------------------*/
.page_header {
  background: url(../../images/page_cover/bg.jpg) repeat-x scroll center center;
  padding: 75px 0 60px;
  height: 185px;
}
.page_header:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: rgba(13, 15, 39, 0.71);
}
.page_header h3 {
  color: #fff;
  margin: 0 0 5px;
}
.page_header .breadcrumb {
  padding: 0;
  background: none;
  border-radius: 0;
  margin: 0;
  text-transform: uppercase;
}
.page_header .breadcrumb li {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}
.page_header .breadcrumb li + li:before {
  content: '>';
  color: #267ae9;
}
.page_header .breadcrumb li a {
  color: #267ae9;
}
.page_header .breadcrumb li.active {
  color: #ccc;
}
/*Top and Bottom Padding er each section*/
.contentRowPad .container {
  padding: 60px 15px;
}
.shortcode .contentRowPad .container {
  border-bottom: 1px solid  #e6e6e6;
}
/*Typography*/
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  margin-bottom: 40px;
}
.typography h6 {
  margin-bottom: 0;
  margin-top: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1px;
  color: #443a44;
  text-transform: uppercase;
  margin: 0;
}
p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  letter-spacing: 1px;
  line-height: 24px;
  margin-bottom: 0;
}
/*Title margin bottom for each collumn*/
.widgetTitle {
  margin-bottom: 50px;
  margin-top: 0;
}
/*Accordion*/
.accordion,
.faqs_accordion {
  margin-bottom: 0;
}
.accordion .panel,
.faqs_accordion .panel {
  border-radius: 0;
  border: none;
  box-shadow: none;
  background: #f9f9f9;
}
.accordion .panel + .panel,
.faqs_accordion .panel + .panel {
  margin-top: 10px;
}
.accordion .panel .panel-heading,
.faqs_accordion .panel .panel-heading {
  background: #f7f7f7;
  padding: 0;
}
.accordion .panel .panel-heading .panel-title a,
.faqs_accordion .panel .panel-heading .panel-title a {
  line-height: 46px;
  font-family: 'Roboto', sans-serif;
  color: #443a44;
  letter-spacing: 1px;
}
.accordion .panel .panel-heading .panel-title a:before,
.faqs_accordion .panel .panel-heading .panel-title a:before {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 10px;
  height: 10px;
  border-right: 1px solid #267ae9;
  font-weight: bold;
  color: #267ae9;
  width: 35px;
  margin: 18px 15px 18px 0;
  text-align: center;
  float: left;
}
.accordion .panel .panel-heading .panel-title a[aria-expanded="true"]:before,
.faqs_accordion .panel .panel-heading .panel-title a[aria-expanded="true"]:before {
  content: '-';
}
.accordion .panel .panel-heading .panel-title a[aria-expanded="false"]:before,
.faqs_accordion .panel .panel-heading .panel-title a[aria-expanded="false"]:before {
  content: '+';
}
.accordion .panel .panel-collapse .panel-body,
.faqs_accordion .panel .panel-collapse .panel-body {
  border: none;
  padding: 15px 35px 25px 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  letter-spacing: 1px;
  line-height: 24px;
}
#accordion_sc.faqs .panel-title {
  font-size: 14px;
}
.faqs_section.row {
  margin-bottom: 135px;
}
.faqs_accordion {
  margin-bottom: 0;
}
.faqs_accordion .panel {
  border-top: 1px solid #eaeaea;
  padding: 25px 0;
  background: #fff;
}
.faqs_accordion .panel + .panel {
  margin-top: 0;
}
.faqs_accordion .panel .panel-heading {
  background: #fff;
}
.faqs_accordion .panel .panel-heading .panel-title a {
  line-height: 24px;
}
.faqs_accordion .panel .panel-heading .panel-title a:before {
  display: none;
}
.faqs_accordion .panel .panel-heading .panel-title a:after {
  font: normal normal normal 14px/1 FontAwesome;
  line-height: 24px;
  height: 24px;
  font-weight: bold;
  color: #443a44;
  width: 67px;
  margin: 0;
  text-align: center;
  float: right;
}
.faqs_accordion .panel .panel-heading .panel-title a[aria-expanded="true"]:after {
  content: "\f106";
}
.faqs_accordion .panel .panel-heading .panel-title a[aria-expanded="false"]:after {
  content: "\f107";
}
.faqs_accordion .panel .panel-collapse .panel-body {
  padding: 15px 67px 0 0;
}
.faqs_accordion .panel .media .media-left {
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #267ae9;
  line-height: 1;
}
.faqs_accordion .panel .media .media-left span {
  padding-left: 10px;
  padding-right: 60px;
}
/*Alerts*/
.alert {
  border-radius: 0;
  border: none;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  color: #fff;
  padding: 13px 15px;
  /*margin: 0;*/
  letter-spacing: 1px;
  text-shadow: none;
}
.alert + .alert {
  margin-top: 10px;
}
.alert strong {
  text-transform: uppercase;
}
.alert .close {
  top: -4px;
  right: 0;
  opacity: 1;
}
.alert .close i {
  font-size: 14px;
  color: #fff;
}
.alert.alert-warning {
  background: #fe6d6d;
}
.alert.alert-success {
  background: #37bb46;
}
.alert.alert-information {
  /*background: #4eb9f0;*/
  background: #267ae9;
}
.alert.alert-notification {
  background: #f6c951;
}
.alert.alert-standard {
  background: #909090;
}
/*Buttons*/
.dl-button {
  margin-bottom: 0;
}
.dl-button dt {
  text-align: left;
  text-transform: uppercase;
  width: 117px;
  line-height: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #443a44;
  letter-spacing: 1px;
}
.dl-button dd {
  margin-left: 117px;
  margin-bottom: 20px;
}
.dl-button dd:last-child {
  margin-bottom: 0;
}
.btn {
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  padding: 0 27px;
  line-height: 40px;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: #d8d8d8;
  text-shadow: none;
}
.btn:hover {
  color: #fff;
}
.btn.btn-primary {
  background: #267ae9;
  border-radius: 5px;
}
.btn.btn-primary:hover {
  background: #104b99;
}
.btn.btn-secondary {
  background: #909090;
}
.btn.btn-secondary:hover {
  background: #5d5d5d;
}
.btn.btn-red {
  background: #f95732;
}
.btn.btn-red:hover {
  background: #bf2806;
}
.btn.btn-green {
  background: #37bb46;
}
.btn.btn-green:hover {
  background: #206c28;
}
/*Tabs*/
#exampleTab .exampleTabNav {
  border: none;
}
#exampleTab .exampleTabNav li + li {
  margin-left: 10px;
}
#exampleTab .exampleTabNav li a {
  padding: 0 45px;
  line-height: 43px;
  background: #f0f0f0;
  color: #443a44;
  border-radius: 0;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}
#exampleTab .exampleTabNav li.active a {
  background: #267ae9;
  color: #FFF;
}
#exampleTab .exampleTab_content .tab-pane {
  background: #f7f7f7;
  padding: 38px 67px 38px 29px;
}
#exampleTab .exampleTab_content .tab-pane h5 {
  margin-bottom: 20px;
  margin-top: 0;
}
/*Columns*/
.column_row + .column_row {
  margin-top: 35px;
}
.column_row h4 {
  margin-bottom: 20px;
}
/**
* Columns are follow by Twitter Bootstrap. Please Follow Twitter Bootstrap for this. 
*/
/*List Row Style*/
.listRow .widgetTitle {
  margin-bottom: 25px;
}
/*List*/
.hostpressUnList {
  list-style: none;
  padding-left: 0;
}
.hostpressUnList li {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  line-height: 20px;
  letter-spacing: 1px;
}
.hostpressUnList li:before {
  content: '';
  height: 20px;
  width: 30px;
  float: left;
  background: url(../../images/icons/footer/list-marker.png) no-repeat scroll left center;
}
.hostpressUnList li + li {
  margin-top: 25px;
}
.hostpressOlList {
  padding-left: 0;
  list-style: none;
  counter-reset: custom-counter;
}
.hostpressOlList li {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  line-height: 20px;
  letter-spacing: 1px;
}
.hostpressOlList li:before {
  content: counter(custom-counter, decimal);
  counter-increment: custom-counter;
  font-weight: bold;
  width: 30px;
  float: left;
}
.hostpressOlList li + li {
  margin-top: 25px;
}
/*Tag*/
.tag {
  padding: 0 20px;
  line-height: 35px;
  background: #f1f6f8;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  margin-bottom: 5px;
  margin-right: 5px;
  float: left;
}
.tag:hover {
  background: #267ae9;
  color: #fff;
  font-weight: 500;
  margin-right: -2px;
}
/*Input Types*/
.input_types h3 {
  margin-bottom: 25px;
}
.input_types .form-control + h3 {
  margin-top: 25px;
}
.form-control {
  background: #f7f7f7;
  border-radius: 0;
  border: none;
  box-shadow: none;
  resize: none;
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
}
.form-control > .btn {
  background: #f7f7f7;
  color: #443a44;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  padding: 0 15px;
}
.form-control > .btn .filter-option {
  text-transform: none;
  line-height: 42px;
}
textarea.form-control {
  height: 158px;
}
/*Checkbox & Radio*/
.checkbox input,
.radio input {
  display: none;
}
.checkbox input + label,
.radio input + label {
  padding-left: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #443a44;
  text-transform: uppercase;
}
.checkbox input + label:before,
.radio input + label:before {
  display: inline-block;
  font: normal normal normal 18px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 15px;
}
.checkbox input + label:before {
  content: "\f096";
}
.checkbox input:checked + label:before {
  content: "\f046";
  margin-right: 13px;
}
.radio input + label:before {
  content: "\f10c";
}
.radio input:checked + label:before {
  content: "\f192";
}
/*----------------------------------------------------------------*/
.fluid_header {
  min-height: 76px;
  margin-bottom: 0;
  background: #FFF;
  width: 100%;
  top: 0px;
  box-shadow: none;
}
.fluid_header .navbar-header {
}
.fluid_header .navbar-header .navbar-brand {
  padding: 21px 15px;
  height: auto;
}
.fluid_header .navbar-header .navbar-brand img {
  display: inline-block;
}
.fluid_header .navbar-nav.navbar-left li a {
  font-family: 'Lato', sans-serif;
  line-height: 76px;
  padding: 0;
  color: #19506d;
  text-transform: uppercase;
}
.fluid_header .navbar-nav.navbar-left li a i {
  margin-right: 11px;
}
.fluid_header .navbar-nav.navbar-left li:first-child {
  margin-right: 27px;
  margin-left: 35px;
}
.fluid_header .navbar-nav.navbar-left li:first-child a {
  font-weight: bold;
  font-size: 15px;
}
.fluid_header .navbar-nav.navbar-left li:first-child a i {
  font-size: 16px;
}
.fluid_header .navbar-nav.navbar-right li a {
  color: #19506d;
  line-height: 75px;
  padding: 0 21px;
  background-image: none;
  background-color: #fff;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
}
.fluid_header .navbar-nav.navbar-right li a:hover,
.fluid_header .navbar-nav.navbar-right li a:focus {
  color: #267ae9;
}
.fluid_header .navbar-nav.navbar-right li.dropdown a:after {
  content: '';
  width: 15px;
  height: 15px;
  display: block;
  position: absolute;
  transform: rotate(45deg);
  left: calc(50% - 11px);
  bottom: -8px;
  display: none;
  z-index: 1001;
  border-radius: 3px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown .dropdown-menu {
  border: none;
  border-top: 1px solid #fff;
  min-width: 200px;
  border-radius: 0;
  display: block;
  transform: scale(1, 0);
  -webkit-transform: scale(1, 0);
  transform-origin: top;
  z-index: 1000;
  padding: 9px 0 0;
  left: 0;
  transition: all 300ms ease-in-out 0s;
}
.fluid_header .navbar-nav.navbar-right li.dropdown .dropdown-menu li a {
  line-height: 40px;
  color: #19506d;
  position: relative;
}
.fluid_header .navbar-nav.navbar-right li.dropdown .dropdown-menu li a:after {
  display: none;
}
.fluid_header .navbar-nav.navbar-right li.dropdown .dropdown-menu li a:hover {
  color: #267ae9;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop {
  position: static;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu {
  right: 30px;
  padding: 0;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li {
  float: left;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list {
  width: calc( 100% - 274px);
  padding: 30px 0 30px 34px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service {
  float: left;
  width: 50%;
  border-top: 1px solid #cde6f0;
  padding-top: 25px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media {
  padding: 0 0px 20px 0;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-left {
  padding-right: 15px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-left a {
  padding: 0;
  padding-top: 5px;
  display: block;
  line-height: 1;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-left a:hover {
  cursor: default;
  background: none;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-body a {
  padding: 0;
  line-height: 1;
  color: #443a44;
  margin-bottom: 7px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  display: inline-block;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-body a:hover {
  background: none;
  color: #267ae9;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service .media .media-body p {
  max-width: 135px;
  font-size: 12px;
  line-height: 16px;
  color: #9c959c;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service:nth-child(even) {
  padding-left: 20px;
  border-left: 1px solid #cde6f0;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service:nth-child(1) {
  border-top: none;
  padding-top: 0;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.service_list .service:nth-child(2) {
  border-top: none;
  padding-top: 0;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer {
  padding: 27px 21px 37px 23px;
  width: 274px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner {
  background: #267ae9;
  padding: 23px 32px 23px 29px;
  text-align: center;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .title {
  margin: 0;
  color: #4dbdfe;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 1;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .offered_price {
  margin-top: 30px;
  color: #fff;
  line-height: 1;
  margin-bottom: 0;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .offered_price small {
  color: #fff;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .regular_price {
  color: #4dbdfe;
  margin-top: 0;
  margin-bottom: 18px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .regular_price small {
  color: #4dbdfe;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop .mega-menu li.start_offer .inner .btn {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-shadow: none;
  border-radius: 0;
  display: block;
  background: #fff;
  color: #443a44;
  text-transform: uppercase;
  padding: 0;
  line-height: 37px;
  box-shadow: none;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.open a:after {
  display: block;
}
.fluid_header .navbar-nav.navbar-right li.dropdown:hover a:after {
  display: block;
}
.fluid_header .navbar-nav.navbar-right li.dropdown:hover .dropdown-menu {
  transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
}
.fluid_header .navbar-nav.navbar-right li.active a,
.fluid_header .navbar-nav.navbar-right li.open a {
  color: #19506d;
  font-weight: 600;
  background: none;
  box-shadow: none;
}
.fluid_header .navbar-nav.navbar-right li.login-link {
  margin: 20px 15px 0 0;
}
.fluid_header .navbar-nav.navbar-right li.login-link a {
  background: #0fa3f2;
  color: #fff;
  line-height: 35px;
}
.fluid_header.centered .navbar-collapse .navbar-nav.navbar-right li.login-link a {
  background: #f95732;
  border-radius: 5px;
}
.top_header {
  line-height: 50px;
  border-bottom: 1px solid  #f1f1f1;
}
.top_header .wc_msg {
  color: #4a4a4a;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
}
.top_header .nav {
  float: right;
}
.top_header .nav li {
  margin-left: 0;
  margin-right: 0;
}
.top_header .nav li a {
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #4a4a4a;
  text-transform: uppercase;
}
.top_header .nav li a i {
  margin-right: 12px;
}
.top_header .nav li a:hover {
  color: #19506d;
  background: none;
}
.top_header .nav li:first-child {
  margin-right: 40px;
}
.top_header .nav li:nth-child(2) {
  margin-right: 29px;
}
.fluid_header .navbar-nav.navbar-right li.dropdown.mega-drop:hover .dropdown-menu,
.fluid_header .navbar-nav.navbar-right li.open .dropdown-menu {
  transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
  display: inline-block;
}
/*----------------------------------------------------------------*/
footer {
  background: #0c112a;
}
footer .top_footer .quick_contact {
  background: #267ae9;
  padding: 0 0 10px 0;
  margin-bottom: 50px;
}
footer .top_footer .quick_contact .nav li {
  width: 32%;
  text-align: center;
  direction: ltr;
}
footer .top_footer .quick_contact .nav li + li {
  border-left: 1px solid #3f8df3;
  margin: 0;
}
footer .top_footer .quick_contact .nav li a {
  line-height: 40px;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  color: #fff;
  /*text-transform: uppercase;*/
  padding-top: 0px;
  padding-bottom: 0px;
}
footer .top_footer .quick_contact .nav li a i {
  font-size: 30px;
  margin-right: 20px;
  line-height: 50px;
  display: inline-block;
  vertical-align: sub;
}
footer .top_footer .quick_contact .nav li a:hover {
  background: #267ae9;
  color: #0c112a;
}
footer .top_footer .shortKnowledge {
  margin-bottom: 30px;
}
footer .top_footer .shortKnowledge h4 {
  line-height: 33px;
  margin: 0 0 22px;
  text-transform: uppercase;
  color: #FFF;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}
footer .top_footer .shortKnowledge p {
  color: #9aa1c7;
  line-height: 28px;
}
footer .top_footer .shortKnowledge .product h4 {
  margin-bottom: 27px;
}
footer .top_footer .shortKnowledge .product .product_list li {
  margin-top: 25px;
  width: calc(100% / 3);
  float: left;
}
footer .top_footer .shortKnowledge .product .product_list li:nth-child(1),
footer .top_footer .shortKnowledge .product .product_list li:nth-child(2),
footer .top_footer .shortKnowledge .product .product_list li:nth-child(3) {
  margin-top: 0;
}
footer .top_footer .shortKnowledge .product .product_list li a {
  line-height: 20px;
  font-family: 'Roboto', sans-serif;
  float: left;
  color: #9aa1c7;
  padding: 0;
}
footer .top_footer .shortKnowledge .product .product_list li a:before {
  content: '';
  float: left;
  width: 14px;
  height: 18px;
  margin-right: 14px;
  background: url(../../images/icons/footer/list-marker.png) no-repeat scroll center center;
}
footer .top_footer .shortKnowledge .product .product_list li a:hover {
  color: #FFF;
  background: none;
}
footer .top_footer .beInContact {
  border-top: 1px solid  #1a2140;
  margin-bottom: 56px;
}
footer .top_footer .beInContact .country_select {
  float: left;
  width: 216px;
  border-right: 1px solid  #1a2140;
  padding-top: 35px;
  padding-bottom: 35px;
}
footer .top_footer .beInContact .country_select button {
  background: none;
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}
footer .top_footer .beInContact .country_select button .flag {
  width: 42px;
  line-height: 43px;
  height: 43px;
  margin-right: 20px;
  display: inline-block;
}
footer .top_footer .beInContact .country_select button i {
  margin-left: 20px;
  font-size: 18px;
}
footer .top_footer .beInContact .country_select button:hover,
footer .top_footer .beInContact .country_select button:focus {
  background: none;
  color: #fff;
}
footer .top_footer .beInContact .country_select .dropdown-menu {
  border-radius: 0;
  margin-top: -20px;
  background: #0fa3f2;
  border: none;
}
footer .top_footer .beInContact .country_select .dropdown-menu li a {
  text-transform: uppercase;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 0 15px;
  line-height: 24px;
}
footer .top_footer .beInContact .country_select .dropdown-menu li a:hover {
  background: #0c112a;
}
footer .top_footer .beInContact .social_icos {
  padding: 38px 0 28px;
  text-align: center;
  float: left;
  width: 320px;
  border-right: 1px solid  #1a2140;
}
footer .top_footer .beInContact .social_icos ul {
  display: inline-block;
}
footer .top_footer .beInContact .social_icos ul li {
  padding: 0 6px;
  float: left;
}
footer .top_footer .beInContact .social_icos ul li a {
  padding: 0;
  width: 42px;
  line-height: 42px;
  height: 42px;
  color: #FFF;
  background: #192043;
  text-align: center;
  border-radius: 100%;
}
footer .top_footer .beInContact .social_icos ul li a:hover {
  color: #595f7c;
}
footer .top_footer .beInContact .subscribe_form {
  padding-left: 39px;
  padding-top: 33px;
  float: left;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group label {
  text-transform: uppercase;
  margin-bottom: 0;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1px;
  float: left;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group label small {
  display: block;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 14px;
  color: #595f7c;
  line-height: 1;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group .input-group {
  margin-left: 45px;
  float: left;
  width: 440px;
  padding: 0;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group .input-group .form-control {
  background: #121a3e;
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
  border-radius: 0;
  border: none;
  color: #454d75;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group .input-group .input-group-addon {
  border: none;
  padding: 0;
  border-radius: 0;
  background: none;
  width: 65px;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group .input-group .input-group-addon input {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  padding: 0 20px;
  line-height: 45px;
  border: none;
  border-radius: 0;
  background: #121a3e;
  float: left;
  width: 65px;
}
footer .top_footer .beInContact .subscribe_form .form-inline .form-group .input-group .input-group-addon input:hover {
  color: #267ae9;
}
footer .copyright_line {
  text-align: center;
  line-height: 25px;
  padding: 25px 0;
  background: #090d20;
  color: #595f7c;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 13px;
}
/*----------------------------------------------------------------*/
.serviceTab .service_tab_menu {
  border-bottom: 1px solid  #d8d8d8;
  background: #f9f9f9;
}
.serviceTab .service_tab_menu .nav {
  overflow: hidden;
  padding: 0 15px;
  margin-bottom: -1px;
}
.serviceTab .service_tab_menu .nav li a {
  border-radius: 0;
  padding: 45px 57px;
  text-align: left;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #443a44;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid  #d8d8d8;
  border-top: none;
  cursor: pointer;
  background: #f9f9f9;
}
.serviceTab .service_tab_menu .nav li a:before {
  content: '';
  width: 100%;
  height: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #267ae9;
}
.serviceTab .service_tab_menu .nav li a .icon {
  float: left;
  margin-right: 30px;
}
.serviceTab .service_tab_menu .nav li a:hover,
.serviceTab .service_tab_menu .nav li a:focus {
  background: #f5f5f5;
}
.serviceTab .service_tab_menu .nav li a:hover:before,
.serviceTab .service_tab_menu .nav li a:focus:before {
  height: 10px;
}
.serviceTab .service_tab_menu .nav li + li a {
  border-left-color: transparent;
}
.serviceTab .service_tab_menu .nav li.active a {
  border-bottom-color: #fff;
  border-top: none;
  background: #fff;
}
.serviceTab .service_tab_menu .nav li.active a:before {
  height: 5px;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane .title {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  line-height: 1;
  margin: 110px 0 20px;
  color: #443a44;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane p {
  color: #443a44;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 40px;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane ul {
  margin-bottom: 45px;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane .service_ico {
  position: absolute;
  left: -85px;
  top: 113px;
  width: 500px;
  height: 500px;
  border-radius: 100%;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane .rent {
  position: absolute;
  top: 170px;
  left: 231px;
  border-radius: 100%;
  background: #42b6ff;
  width: 119px;
  height: 119px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
  padding-top: 33px;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane .rent span {
  font-size: 16px;
  font-weight: 400;
  vertical-align: super;
}
.serviceTab .serviceTab_contents .tab-content .tab-pane .rent small {
  display: block;
  font-size: 12px;
  font-weight: 500;
}
.serviceTab.serviceTab_byside .service_tab_menu {
  border: none;
  padding-top: 106px;
  background: none;
}
.serviceTab.serviceTab_byside .service_tab_menu .nav {
  border: none;
}
.serviceTab.serviceTab_byside .service_tab_menu .nav li a {
  border: none;
  padding: 29px 45px;
  margin: 0;
  background: #f0f5f6;
}
.serviceTab.serviceTab_byside .service_tab_menu .nav li a:before {
  display: none;
}
.serviceTab.serviceTab_byside .service_tab_menu .nav li a:hover,
.serviceTab.serviceTab_byside .service_tab_menu .nav li a:focus {
  color: #fff;
  background: #2eaeff;
}
.serviceTab.serviceTab_byside .service_tab_menu .nav li.active a {
  color: #fff;
  background: #42b6ff;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane {
  padding-top: 43px;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .ico_pic {
  width: 55%;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .ico_pic .service_ico {
  width: 180px;
  height: 180px;
  box-shadow: 3px 0 79px rgba(0, 0, 0, 0.08);
  right: 0;
  left: auto;
  background: #fff;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .texts {
  width: 45%;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .texts .btn {
  float: left;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .texts .btn + .pkg_price {
  line-height: 40px;
  padding: 0 17px;
  background: #262626;
  float: left;
  transform: rotateY(-90deg) perspective(150px);
  perspective-origin: left;
  transform-origin: left;
}
.serviceTab.serviceTab_byside .serviceTab_contents .tab-content .tab-pane .texts .btn:hover + .pkg_price {
  transform: rotateX(0);
}
.service_tabs_list .service_tab {
  padding: 50px 0 50px;
}
.service_tabs_list .service_tab .ico_price .ico {
  width: 339px;
  height: 339px;
  border-radius: 100%;
  line-height: 339px;
  text-align: center;
  float: left;
  background: #fff;
}
.service_tabs_list .service_tab .ico_price .rent {
  position: absolute;
  top: 19px;
  left: 282px;
  border-radius: 100%;
  background: #42b6ff;
  width: 119px;
  height: 119px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
  padding-top: 33px;
}
.service_tabs_list .service_tab .ico_price .rent span {
  font-size: 14px;
  font-weight: 500;
  vertical-align: super;
  margin-right: 1px;
}
.service_tabs_list .service_tab .ico_price .rent small {
  display: block;
  font-size: 12px;
  font-weight: 500;
}
.service_tabs_list .service_tab .content {
  padding-top: 25px;
}
.service_tabs_list .service_tab .content h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 48px;
  margin-bottom: 30px;
}
.service_tabs_list .service_tab .content p {
  font-size: 18px;
  font-weight: 300;
}
.service_tabs_list .service_tab .content ul li {
  margin-top: 30px;
  width: 50%;
  float: left;
}
.service_tabs_list .service_tab .content ul li + li {
  margin-top: 30px;
}
.service_tabs_list .service_tab .content .btn {
  margin-top: 40px;
}
.service_tabs_list .service_tab:nth-child(odd) {
  background: #f0f5f6;
}
.service_tabs_list .service_tab:nth-child(even) .ico_price {
  padding-left: 50px;
  float: right;
}
.service_tabs_list .service_tab:nth-child(even) .ico_price .ico {
  background: #f0f5f6;
}
/*----------------------------------------------------------------*/
.sectionTitle {
  text-align: center;
  margin-bottom: 50px;
}
.sectionTitle h2 {
  font-size: 48px;
  font-weight: 100;
}
.sectionTitle.text-left {
  text-align: left;
  margin: 0 0 35px;
}
.sectionTitle.text-left h3 {
  font-size: 30px;
  font-weight: 100;
}
/*----------------------------------------------------------------*/
.error_mark {
  text-align: center;
  float: right;
  width: 499px;
  height: 499px;
  padding-top: 150px;
  border-radius: 100%;
  box-shadow: 4px 0 79px rgba(46, 46, 46, 0.09);
  margin: 122px auto 140px;
}
.error_mark img {
  max-width: 100%;
}
.error_mark h4 {
  font-weight: 300;
  color: #267ae9;
  margin-top: 15px;
}
.error_msg {
  padding-top: 220px;
  padding-left: 25px;
}
.error_msg h1 {
  line-height: 60px;
  margin-bottom: 25px;
  font-size: 48px;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  color: #267ae9;
}
.error_msg p {
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 30px;
}
.error_msg .btn {
  letter-spacing: 1px;
  padding: 0 50px;
  line-height: 53px;
}
.error_msg .btn i {
  margin-right: 15px;
}
/*----------------------------------------------------------------*/
.team_section {
  padding: 65px 0 85px;
}
.team_member {
  padding: 15px;
}
.team_member .inner {
  background: #f1f6f8;
  border-bottom: 2px solid #267ae9;
  text-align: center;
  padding: 30px 45px 30px 30px;
  height: 321px;
  overflow: hidden;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner .image {
  width: 118px;
  height: 118px;
  border-radius: 100%;
  border: 1px solid #dae0e2;
  margin: 0 auto;
  overflow: hidden;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner .image img {
  width: 100%;
  border-radius: 100%;
}
.team_member .inner h4 {
  margin-top: 28px;
  margin-bottom: 10px;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner h6 {
  margin-bottom: 25px;
  font-weight: 300;
  color: #267ae9;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner p {
  overflow: hidden;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 300;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner p.hState {
  height: 0;
  margin-bottom: 0;
}
.team_member .inner ul {
  height: 0;
  overflow: hidden;
  margin: 0;
  transition: all 300ms ease-in-out 0s;
}
.team_member .inner ul li {
  float: left;
}
.team_member .inner ul li + li {
  margin-left: 15px;
}
.team_member .inner ul li a {
  color: #d8e8fc;
}
.team_member .inner:hover {
  padding-right: 45px;
  text-align: left;
  background: #267ae9;
}
.team_member .inner:hover .image {
  height: 0;
  border: 0;
}
.team_member .inner:hover h4 {
  color: #d8e8fc;
  margin-top: 0;
}
.team_member .inner:hover h6 {
  color: #d8e8fc;
}
.team_member .inner:hover p.nState {
  height: 0;
}
.team_member .inner:hover p.hState {
  height: auto;
  margin-bottom: 30px;
  color: #d8e8fc;
}
.team_member .inner:hover ul {
  height: auto;
}
/*----------------------------------------------------------------*/
.why_choose {
  padding: 80px 0 50px;
  background: #f6fafb;
}
.why_choose.why_choose2 {
  background: #f0f5f6;
}
.why_choose.home2 {
  background: #fff;
}
.cause2choose {
  margin-top: 30px;
  min-height: 150px;
}
.cause2choose .media .media-left {
  padding-right: 15px;
}
.cause2choose .media .media-body h4 {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 15px;
}
.cause2choose:nth-child(1),
.cause2choose:nth-child(2),
.cause2choose:nth-child(3) {
  margin-top: 0;
}
/*----------------------------------------------------------------*/
.pricing.row {
  background: #267ae9;
  padding-top: 85px;
  margin-bottom: -208px;
}
.pricing.row .sectionTitle h5,
.pricing.row .sectionTitle h2 {
  color: #fff;
}
.pricing.row.pricing2 {
  margin-bottom: 0;
}
.pricing_bottom.row {
  background: #f1f6f8;
  height: 260px;
}
.pricing_plan {
  max-width: 975px;
  height: 416px;
  margin: 0 auto;
  padding-left: 40px;
}
.pricing_plan .owl-item * {
  transition: all 300ms ease-in-out 0s;
}
.pricing_plan .owl-item .item {
  padding: 108px 30px;
  text-align: center;
}
.pricing_plan .owl-item .item .plan {
  width: 194px;
  height: 194px;
  background: #fff;
  border-radius: 100%;
  box-shadow: 4px 0 39px rgba(46, 46, 46, 0.09);
  padding-top: 50px;
}
.pricing_plan .owl-item .item .plan .price {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1;
  color: #267ae9;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.pricing_plan .owl-item .item .plan .price .currencyType {
  font-size: 18px;
  vertical-align: super;
}
.pricing_plan .owl-item .item .plan .price .amount {
  font-size: 36px;
  vertical-align: middle;
}
.pricing_plan .owl-item .item .plan .price small {
  vertical-align: sub;
  font-size: 12px;
  bottom: -5px;
}
.pricing_plan .owl-item .item .plan .serviceType h4 {
  line-height: 42px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #080808;
  display: inline-block;
  border-top: 1px solid  #e2e2e2;
  border-bottom: 1px solid  #e2e2e2;
  letter-spacing: 1px;
}
.pricing_plan .owl-item .item .plan p {
  display: none;
}
.pricing_plan .owl-item .item .plan .btn {
  display: none;
}
.pricing_plan .owl-item.center .item {
  padding: 0 30px 30px;
}
.pricing_plan .owl-item.center .item .plan {
  width: 416px;
  height: 416px;
  margin-left: -110px;
}
.pricing_plan .owl-item.center .item .plan .price .currencyType {
  font-size: 24px;
  vertical-align: super;
  top: -5px;
}
.pricing_plan .owl-item.center .item .plan .price .amount {
  font-size: 72px;
}
.pricing_plan .owl-item.center .item .plan .price small {
  bottom: -15px;
}
.pricing_plan .owl-item.center .item .plan .serviceType h4 {
  font-size: 16px;
  padding: 0 10px;
  margin-top: 5px;
}
.pricing_plan .owl-item.center .item .plan p {
  display: block;
  max-width: 220px;
  margin: 30px auto;
}
.pricing_plan .owl-item.center .item .plan .btn {
  display: inline-block;
}
.pricing_nav {
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 59%;
}
.pricing_nav #pricing_nav div {
  font-size: 18px;
  cursor: pointer;
}
.pricing_nav #pricing_nav div.owl-prev {
  float: left;
}
.pricing_nav #pricing_nav div.owl-next {
  float: right;
}
.price_plan {
  padding-top: 50px;
}
.price_plan .inner {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}
.price_plan .inner .plan_intro {
  height: 260px;
  background: #f0f5f6;
  margin-bottom: -100px;
  padding-top: 40px;
}
.price_plan .inner .plan_intro:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 130px;
  top: 130px;
  left: 0;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f5f5f5+0,ffffff+100 */
  background: #f5f5f5;
  background: -moz-linear-gradient(top, #f5f5f5 0%, #ffffff 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f5f5f5), color-stop(100%, #ffffff));
  background: -webkit-linear-gradient(top, #f5f5f5 0%, #ffffff 100%);
  background: -o-linear-gradient(top, #f5f5f5 0%, #ffffff 100%);
  background: -ms-linear-gradient(top, #f5f5f5 0%, #ffffff 100%);
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#ffffff', GradientType=0);
}
.price_plan .inner .plan_intro .price {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1;
  color: #267ae9;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.price_plan .inner .plan_intro .price .currencyType {
  font-size: 18px;
  vertical-align: super;
}
.price_plan .inner .plan_intro .price .amount {
  font-size: 36px;
  vertical-align: middle;
}
.price_plan .inner .plan_intro .price small {
  vertical-align: sub;
  font-size: 12px;
  bottom: -5px;
}
.price_plan .inner .plan_intro .planType h4 {
  line-height: 42px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #080808;
  display: inline-block;
  border-top: 1px solid  #e2e2e2;
  border-bottom: 1px solid  #e2e2e2;
  letter-spacing: 1px;
}
.price_plan .inner .service_provide_row {
  background: #fff;
  padding-bottom: 46px;
}
.price_plan .inner .service_provide_row .service_provide {
  margin: 25px 0;
}
.price_plan .inner .service_provide_row .service_provide li {
  line-height: 49px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6e6a6a;
  padding: 0 40px;
}
.price_plan.best_plan {
  padding-top: 0;
}
.price_plan.best_plan .inner {
  max-width: 100%;
}
.price_plan.best_plan .inner .plan_intro {
  height: 360px;
  margin-bottom: -150px;
  background: #42b6ff;
}
.price_plan.best_plan .inner .plan_intro:after {
  background: #42b6ff;
  height: 180px;
  top: 180px;
}
.price_plan.best_plan .inner .plan_intro .price {
  color: #fff;
}
.price_plan.best_plan .inner .plan_intro .price .currencyType {
  font-size: 24px;
  vertical-align: super;
  top: -5px;
}
.price_plan.best_plan .inner .plan_intro .price .amount {
  font-size: 72px;
}
.price_plan.best_plan .inner .plan_intro .price small {
  bottom: -15px;
}
.price_plan.best_plan .inner .plan_intro .planType h4 {
  font-size: 16px;
  padding: 0 10px;
  margin-top: 5px;
  color: #fff;
  border-top-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.3);
}
.price_plan.best_plan .inner .service_provide_row .service_provide li {
  padding: 0 80px;
}
.price_plan.best_plan .inner .service_provide_row .btn {
  background: #42b6ff;
}
.price_plan.best_plan .inner .service_provide_row .btn:hover {
  background: #28acff;
}
.pricing_slider_row {
  padding: 95px 0 30px;
}
.pricing_slider_row .pricing_slider .owl-item .item {
  text-align: center;
  background: #f1f6f8;
}
.pricing_slider_row .pricing_slider .owl-item .item .domain_ext {
  line-height: 83px;
  background: #589ffc;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  border-bottom: 42px solid #267ae9;
}
.pricing_slider_row .pricing_slider .owl-item .item .domain_ext.net {
  background: #4594fe;
}
.pricing_slider_row .pricing_slider .owl-item .item .domain_ext.in {
  background: #348afd;
}
.pricing_slider_row .pricing_slider .owl-item .item .domain_ext.org {
  background: #2982f8;
}
.pricing_slider_row .pricing_slider .owl-item .item .domain_ext.biz {
  background: #2985f8;
}
.pricing_slider_row .pricing_slider .owl-item .item .price {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1;
  color: #267ae9;
  margin-bottom: 10px;
  text-transform: uppercase;
  background: #FFF;
  width: 120px;
  height: 120px;
  line-height: 110px;
  border-radius: 100%;
  margin: -55px auto 0;
  box-shadow: 4px 0 79px rgba(46, 46, 46, 0.09);
}
.pricing_slider_row .pricing_slider .owl-item .item .price .currencyType {
  font-size: 18px;
  vertical-align: super;
  top: -10px;
  font-weight: bold;
}
.pricing_slider_row .pricing_slider .owl-item .item .price .amount {
  font-size: 48px;
  font-weight: bold;
  vertical-align: middle;
}
.pricing_slider_row .pricing_slider .owl-item .item .price small {
  vertical-align: sub;
  font-size: 12px;
  bottom: -5px;
}
.pricing_slider_row .pricing_slider .owl-item .item .short_note {
  color: #443a44;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 24px;
  padding: 20px 43px 30px;
}
.pricing_slider_row .pricing_slider .owl-item .item .btn {
  margin-bottom: 30px;
}
.pricing_slider_row .pricing_slider .owl-item .item .btn:hover,
.pricing_slider_row .pricing_slider .owl-item .item .btn:focus {
  background: #42b6ff;
}
.pricing_slider_row .pricing_slider .owl-controls {
  text-align: center;
  margin-top: 20px;
}
.pricing_slider_row .pricing_slider .owl-controls .owl-dots {
  display: inline-block;
}
.pricing_slider_row .pricing_slider .owl-controls .owl-dots .owl-dot {
  float: left;
  background: #e5e9eb;
  width: 12px;
  height: 12px;
  margin: 0 2px;
  border-radius: 100%;
}
.pricing_slider_row .pricing_slider .owl-controls .owl-dots .owl-dot.active {
  background: #267ae9;
}
.domain_price_list ul.nav-tabs {
  border: none;
}
.domain_price_list ul.nav-tabs > li > a {
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  color: #443a44;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 60px;
  padding: 0 15px;
}
.domain_price_list ul.nav-tabs > li > a:hover,
.domain_price_list ul.nav-tabs > li > a:focus {
  background: #42b6ff;
  color: #fff;
  border: 0px;
}
.domain_price_list ul.nav-tabs > li.active a {
  border: 0px;
  color: #fff;
  background: #42b6ff;
}
.domain_price_list .p_list_content {
  padding: 59px 0;
  background: #f1f6f8;
}
.pricing_list_table {
  background: #fff;
  text-transform: uppercase;
}
.pricing_list_table thead tr th {
  width: 1%;
  border: none;
  padding: 0 42px;
  line-height: 60px;
  font-family: 'Roboto', sans-serif;
  color: #7b9196;
}
.pricing_list_table tbody {
  padding-bottom: 10px;
}
.pricing_list_table tbody tr th {
  border: none;
  padding: 0 42px;
  line-height: 60px;
  font-family: 'Roboto', sans-serif;
  color: #443a44;
}
.pricing_list_table tbody tr td {
  border: none;
  padding: 0;
  line-height: 60px;
  padding: 0 42px;
  font-family: 'Roboto', sans-serif;
  color: #443a44;
}
.pricing_plan_table {
  background: #f1f6f8;
  padding: 100px 0;
}
.pricing_plan_table .sectionTitle {
  margin-bottom: 70px;
}
.pricing_plan_cell {
  background: #fff;
  margin-top: 13px;
  text-align: center;
}
.pricing_plan_cell .plan_type {
  height: 118px;
  padding: 30px 0;
  background: #589ffd;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
}
.pricing_plan_cell .plan_type span {
  position: absolute;
  display: inline-block;
  line-height: 26px;
  font-size: 14px;
  color: #fff;
  background: #42b6ff;
  padding: 0 20px;
  top: -13px;
  left: calc(50% - 56px);
}
.pricing_plan_cell .plan_type.basic,
.pricing_plan_cell .plan_type.silver,
.pricing_plan_cell .plan_type.gold,
.pricing_plan_cell .plan_type.diamond {
  padding: 44px 0;
}
.pricing_plan_cell .plan_type.silver {
  background: #4594fe;
}
.pricing_plan_cell .plan_type.gold {
  background: #348afe;
}
.pricing_plan_cell .plan_type.diamond {
  background: #2982f8;
}
.pricing_plan_cell .pricing_row {
  color: #FFF;
  background: #267ae9;
  line-height: 60px;
  height: 60px;
  margin-bottom: 90px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
}
.pricing_plan_cell .pricing_row .price {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1;
  color: #267ae9;
  margin-bottom: 10px;
  text-transform: uppercase;
  background: #FFF;
  width: 120px;
  height: 120px;
  line-height: 110px;
  border-radius: 100%;
  margin: 0 auto;
  box-shadow: 4px 0 79px rgba(46, 46, 46, 0.09);
  letter-spacing: 0;
}
.pricing_plan_cell .pricing_row .price .currencyType {
  font-size: 18px;
  vertical-align: super;
  top: -10px;
  font-weight: bold;
}
.pricing_plan_cell .pricing_row .price .amount {
  font-size: 48px;
  font-weight: bold;
  vertical-align: middle;
}
.pricing_plan_cell .pricing_row .price small {
  vertical-align: sub;
  font-size: 12px;
  bottom: -5px;
}
.pricing_plan_cell .nav_a {
  border-right: 1px solid #ecf3f6;
}
.pricing_plan_cell .nav {
  line-height: 50px;
}
.pricing_plan_cell .nav li {
  border-bottom: 1px solid #ecf3f6;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
}
.pricing_plan_cell .nav li .fa-check {
  color: #52a51b;
}
.pricing_plan_cell .nav li .fa-times {
  color: #cf1b41;
}
.pricing_plan_cell .btn {
  margin: 30px 0 45px;
}
.pricing_plan_cell .btn.visible-none {
  visibility: hidden;
}
.pricing_plan_cell .btn:hover,
.pricing_plan_cell .btn:focus {
  background: #42b6ff;
}
/*----------------------------------------------------------------*/
.facts {
  padding: 0 0 80px;
  background: #f1f6f8;
}
.facts .fact {
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
}
.facts .fact strong {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #080808;
  display: block;
}
.facts .fact + .fact {
  border-left: 1px solid #e4e4e4;
}
.facts.facts2 {
  padding-top: 80px;
  background: #fff;
}
/*----------------------------------------------------------------*/
.clients {
  padding: 40px 0 80px;
  background: #f1f6f8;
}
.clients .nav li a {
  text-align: center;
  margin: 0;
}
.clients .nav li a:hover,
.clients .nav li a:focus {
  background: none;
}
.about_clients {
  padding: 80px 0;
}
/*----------------------------------------------------------------*/
.testi_news {
  padding: 50px 0 14px;
}
.testimonial_slider .item .slide,
.testimonial_slider2 .item .slide {
  background: transparent;
  padding: 25px;
}
.testimonial_slider .item .slide.slide2,
.testimonial_slider2 .item .slide.slide2 {
  background: #e0eaee;
}
.testimonial_slider .item .slide .client_img,
.testimonial_slider2 .item .slide .client_img {
  width: 200px;
  max-height: 200px;
  overflow: hidden;
}
.testimonial_slider .item .slide .client_img img,
.testimonial_slider2 .item .slide .client_img img {
  max-width: 100%;
  border-radius: 50%;
}
.testimonial_slider .item .slide .content,
.testimonial_slider2 .item .slide .content {
  width: calc(100% - 263px);
  padding: 60px 35px 50px 15px;
}
.testimonial_slider .item .slide .content .counter,
.testimonial_slider2 .item .slide .content .counter {
  position: absolute;
  top: 60px;
  left: -45px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #443a44;
  border-right: 1px solid #d7d7d7;
  line-height: 30px;
  padding-right: 12px;
}
.testimonial_slider .item .slide .content .quote,
.testimonial_slider2 .item .slide .content .quote {
  margin-bottom: 15px;
}
.testimonial_slider .item .slide .content .quote p,
.testimonial_slider2 .item .slide .content .quote p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 0;
  font-size: 15px;
}
.testimonial_slider .item .slide .content .quote p + p,
.testimonial_slider2 .item .slide .content .quote p + p {
  margin-top: 25px;
}
.testimonial_slider .owl-controls,
.testimonial_slider2 .owl-controls {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
.testimonial_slider .owl-controls .owl-nav div,
.testimonial_slider2 .owl-controls .owl-nav div {
  float: left;
  font-size: 18px;
  color: #080808;
}
.testimonial_slider .owl-controls .owl-nav div.owl-prev,
.testimonial_slider2 .owl-controls .owl-nav div.owl-prev {
  margin-right: 10px;
}
.testimonial_slider2 .owl-controls {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 23px);
}
.testimonial_slider2 .owl-controls .owl-nav div {
  float: left;
  font-size: 18px;
  color: #080808;
}
.testimonial_slider2 .owl-controls .owl-nav div.owl-prev {
  margin-right: 10px;
}
.faqs .panel .panel-heading .panel-title a {
  padding-left: 20px;
}
.faqs .panel .panel-heading .panel-title a:before {
  border: none;
  float: right;
  margin-right: 0;
  color: #443a44;
}
.faqs .panel .panel-heading .panel-title a[aria-expanded="true"]:before {
  content: '-';
}
.faqs .panel .panel-heading .panel-title a[aria-expanded="false"]:before {
  content: '+';
}
.faqs .panel .panel-collapse .panel-body {
  padding: 15px 20px 60px;
}
/*----------------------------------------------------------------*/
.latest_news .post {
  margin: 0;
}
.latest_news .post + .post {
  margin-top: 35px;
}
.latest_news .post .media-left {
  padding-right: 30px;
}
.latest_news .post .media-left a {
  width: 112px;
  height: 74px;
  display: block;
}
.latest_news .post .media-left a img {
  max-width: 100%;
}
.latest_news .post .media-body h5 {
  font-weight: 500;
  margin-bottom: 13px;
}
.latest_news .post .media-body h5 a {
  color: #443a44;
  font-weight: 500;
}
.latest_news .post .media-body h5 a:hover {
  color: #267ae9;
}
.latest_news .post .media-body p {
  line-height: 20px;
  margin-bottom: 7px;
  font-weight: 300;
}
.latest_news .post .media-body .timeAgo {
  color: #d7d7d7;
  font-size: 13px;
}
.blog_content {
  padding: 68px 0;
}
.blog .image a {
  display: block;
  font-size: 36px;
  color: #fff;
}
.blog .image a i {
  line-height: 300px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.blog .image a:hover {
  color: #42b6ff;
}
.blog .image img {
  width: 100%;
}
.blog .image .carousel-control {
  width: 7%;
  opacity: 1;
}
.blog .image .carousel-control .glyphicon {
  font-size: 18px;
}
.blog .blog_infos {
  margin: 20px 0;
  display: block;
}
.blog .blog_infos li {
  float: left;
  padding: 0;
}
.blog .blog_infos li + li:before {
  content: '';
  width: 1px;
  height: 14px;
  float: left;
  margin: 0 10px;
  background: #267ae9;
}
.blog .blog_infos li a {
  color: #267ae9;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: .5px;
  line-height: 14px;
  text-transform: uppercase;
  padding: 0;
  white-space: nowrap;
}
.blog .blog_infos li a i {
  margin-right: 8px;
}
.blog .blog_infos li a:hover {
  background: none;
  color: #443a44;
}
.blog h3 {
  margin-bottom: 20px;
}
.blog h3 a {
  color: #443a44;
}
.blog h3 a:hover {
  color: #42b6ff;
}
.blog .btn {
  margin-top: 25px;
}
.blog.quote_blog .media {
  padding: 50px 60px 50px 30px;
  background: #f1f6f8;
}
.blog.quote_blog .media .media-left {
  font-size: 40px;
  line-height: 40px;
  color: #267ae9;
  padding-right: 30px;
}
.blog.quote_blog .media .media-body p {
  letter-spacing: 1px;
  color: #443a44;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  line-height: 28px;
}
.blog.quote_blog .media .media-body .quote_writer {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #443a44;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
}
.blog + hr {
  margin: 40px 0;
  background: #eaeaea;
}
.pagination_nav {
  padding-top: 30px;
}
.pagination_nav .pagination {
  border-radius: 0;
  display: table;
  margin: 0 auto;
}
.pagination_nav .pagination li {
  float: left;
  margin-bottom: 10px;
}
.pagination_nav .pagination li + li {
  margin-left: 10px;
}
.pagination_nav .pagination li a {
  padding: 0 19px;
  line-height: 36px;
  border-radius: 0;
  text-transform: uppercase;
  border: none;
  background: #f1f6f8;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  color: #443a44;
}
.pagination_nav .pagination li a:hover {
  background: #267ae9;
  color: #fff;
}
.pagination_nav .pagination li:first-child a,
.pagination_nav .pagination li:last-child a {
  border-radius: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}
.single-blog {
  padding-bottom: 67px;
}
.single-blog .blog .img_cap {
  margin: 50px 0;
}
.single-blog .blog .img_cap .media-left {
  padding-right: 30px;
}
.single-blog .blog .img_cap .media-left a {
  display: block;
  width: 263px;
  height: 200px;
  text-align: center;
}
.single-blog .blog .img_cap .media-left a img {
  max-width: 100%;
}
.single-blog .blog .img_cap .media-left a .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #267ae9;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
  width: 100%;
  line-height: 36px;
}
.single-blog .blog .img_cap .media-body {
  padding-top: 15px;
}
.single-blog .blog .img_cap .media-body h4 {
  font-size: 16px;
  margin-bottom: 20px;
}
.single-blog .blog .img_cap .media-body p + p {
  margin-top: 20px;
}
.single-blog .blog .quote_row {
  margin-top: 10px;
}
.single-blog .blog .quote_row hr {
  margin: 40px 0;
  background: #eaeaea;
}
.single-blog .blog .quote_row blockquote {
  background: #f1f6f8;
  margin: 0;
  padding: 30px 50px 30px 40px;
  border-left-color: #267ae9;
}
.single-blog .blog .quote_row blockquote p {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0;
  line-height: 28px;
}
/*----------------------------------------------------------------*/
.find_domain .domain_search {
  background: #11162e;
  padding: 35px 30px 30px;
}
.find_domain .domain_search .form_title h5 {
  color: #fff;
  font-weight: 300;
}
.find_domain .domain_search .form_title h2 {
  font-size: 36px;
  color: #42b6ff;
  margin-bottom: 10px;
}
.find_domain .domain_search .form_title p {
  color: #8188a7;
  line-height: 18px;
  font-weight: 300;
}
.find_domain .domain_search .input-group .form-control {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  border: none;
}
.find_domain .domain_search .input-group .input-group-addon {
  padding: 0;
  background: none;
  border-radius: 0;
  border: none;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters {
  position: relative;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters .btn {
  width: 165px;
  margin-left: -165px;
  line-height: 50px;
  text-align: left;
  background: #fff;
  z-index: 2;
  color: #4f5660;
  border-left: 1px solid #d5dae2;
  text-transform: lowercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters .btn i {
  position: absolute;
  right: 27px;
  line-height: 50px;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters .btn + ul {
  border-radius: 0;
  width: 165px;
  left: -165px;
  margin: 0;
  border: none;
  padding: 0;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters .btn + ul li a {
  color: #4f5660;
  border-top: 1px solid #d5dae2;
  text-transform: lowercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 35px;
  padding: 0 25px;
}
.find_domain .domain_search .input-group .input-group-addon .searchFilters .btn + ul li a:hover {
  background: #42b6ff;
  color: #443a44;
  text-transform: uppercase;
}
.find_domain .domain_search .input-group .input-group-addon input {
  padding: 0 35px;
  background: #42b6ff;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  line-height: 50px;
}
.find_domain .domain_search .price_list {
  margin-top: 22px;
}
.find_domain .domain_search .price_list li {
  padding: 0 35px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 33px;
}
.find_domain .domain_search .price_list li + li {
  border-left: 1px solid #3f476c;
}
.find_domain .domain_search .price_list li:first-child {
  padding-left: 0;
}
.find_domain.find_domain2 {
  background: #267ae9;
}
.find_domain.find_domain2 .domain_search {
  padding-left: 0;
  background: none;
}
.find_domain.find_domain2 .domain_search .form_title h2 {
  color: #fff;
}
.find_domain.find_domain2 .domain_search .form_title p {
  color: #b4d3fb;
}
.find_domain.find_domain2 .domain_search .price_list li + li {
  border-left-color: #0f91d6;
}
.find_domain.find_domain2 .domain_search .input-group .form-control {
  width: calc(100% - 165px);
}
.find_domain.find_domain3 .find_domain_cover {
  background: url(../../images/slider/3.jpg) no-repeat scroll center center;
  background-size: cover;
  height: 775px;
}
.find_domain.find_domain3 .find_domain_cover .container {
  height: 100%;
}
.find_domain.find_domain3 .find_domain_cover .container .row {
  position: absolute;
  top: calc(50% - 95px);
}
.find_domain.find_domain3 .find_domain_cover .container .row h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 60px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
}
.find_domain.find_domain3 .find_domain_cover .container .row p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #9d9ea7;
  line-height: 30px;
}
.find_domain.find_domain3 .domain_search {
  padding: 37px;
  background: #267ae9;
  position: absolute;
  bottom: 0;
  width: 97.3%;
}
.find_domain.find_domain3 .domain_search .input-group .input-group-addon input {
  background: #42b6ff;
  color: #fff;
}
.find_domain.find_domain_drop {
  transition: all 300ms ease-in-out 0s;
}
.find_domain.find_domain_drop + .drop_icon {
  z-index: 999;
  text-align: center;
  font-size: 36px;
}
.find_domain.find_domain_drop + .drop_icon:before {
  content: '';
  width: 1px;
  height: 56px;
  background: rgba(66, 182, 255, 0.27);
  display: block;
  position: absolute;
  right: 127.5px;
  top: 0;
}
.find_domain.find_domain_drop + .drop_icon .domain_search_drop {
  color: #fff;
  background: #42b6ff;
  width: 50px;
  line-height: 50px;
  border-radius: 100%;
  display: block;
  position: absolute;
  right: 103px;
  top: 56px;
  font-family: 'Open Sans', sans-serif;
  transition-duration: 1s;
}
.find_domain.find_domain_drop + .drop_icon .domain_search_drop.rotate {
  transform: rotate(45deg);
}
/*----------------------------------------------------------------*/
.facts.about_us_facts {
  background: #fff;
  padding: 80px 0;
}
.about_us_content {
  padding-top: 50px;
}
.about_us_content .col-sm-5 {
  text-align: center;
}
.about_us_content .col-sm-5 img {
  display: inline-block;
}
.about_us_content .col-sm-7 {
  padding-top: 115px;
}
.about_us_content .col-sm-7 .sectionTitle {
  margin-bottom: 60px;
}
.about_us_content .col-sm-7 h4 {
  margin-bottom: 20px;
}
.about_us_content .col-sm-7 hr {
  margin: 20px 0;
  background: #eaeaea;
}
.about_us_content .col-sm-7 ul li {
  color: #267ae9;
  margin-bottom: 20px;
  float: left;
  text-transform: uppercase;
}
.about_us_content .col-sm-7 ul li:before {
  width: 25px;
}
.about_us_content .col-sm-7 ul li + li {
  margin-top: 0;
  margin-left: 30px;
}
/*----------------------------------------------------------------*/
.sidebar .inner {
  padding-left: 30px;
}
.sidebar .inner h4 {
  margin-bottom: 25px;
}
.search_form .input-group .form-control {
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  color: #443a44;
  background: #f1f6f8;
}
.search_form .input-group .form-control + .input-group-addon {
  padding: 0;
  background: none;
  border: none;
}
.search_form .input-group .form-control + .input-group-addon button {
  line-height: 42px;
  padding: 0 17px;
  background: #267ae9;
  border: none;
  border-radius: 0;
}
.search_form .input-group .form-control + .input-group-addon button i {
  color: #FFF;
  font-size: 18px;
}
.sidebar_line {
  margin: 40px 0;
  background: #eaeaea;
}
.categories_list li + li,
.archives_list li + li {
  margin-top: 20px;
}
.categories_list li a,
.archives_list li a {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #443a44;
  letter-spacing: 1px;
  padding: 0;
}
.categories_list li a span,
.archives_list li a span {
  position: absolute;
  right: 0;
  top: 0;
  color: #267ae9;
}
.categories_list li a:hover,
.archives_list li a:hover {
  background: none;
  color: #267ae9;
}
.recent_posts .post + .post {
  margin-top: 30px;
}
.recent_posts .post .media-left {
  padding-right: 20px;
}
.recent_posts .post .media-body h5 {
  text-transform: none;
  margin-bottom: 8px;
}
.recent_posts .post .media-body h5 a {
  color: #443a44;
  font-weight: 500;
  line-height: 20px;
}
.recent_posts .post .media-body h5 a:hover {
  color: #42b6ff;
}
.recent_posts .post .media-body .date {
  color: #acacac;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.recent_posts .post .media-body .date i {
  margin-right: 10px;
  font-size: 14px;
}
.related_posts {
  margin-bottom: 20px;
}
.related_posts h4 {
  margin-bottom: 20px;
}
.related_posts .post {
  padding: 15px;
}
.related_posts .post .featured_img {
  display: block;
}
.related_posts .post .featured_img img {
  max-width: 100%;
}
.related_posts .post h5 {
  text-transform: none;
  margin: 10px 0;
}
.related_posts .post h5 a {
  color: #443a44;
  font-weight: 500;
  line-height: 20px;
}
.related_posts .post h5 a:hover {
  color: #42b6ff;
}
.related_posts .post .date {
  color: #acacac;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.related_posts .post .date i {
  margin-right: 10px;
  font-size: 14px;
}
.pager {
  margin: 0;
  padding: 15px 0 0;
  border-top: 1px solid #eaeaea;
}
.pager li a {
  padding: 0;
  border-radius: 0;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: #267ae9;
  font-size: 14px;
  text-transform: capitalize;
}
.pager li a:hover,
.pager li a:focus {
  background: none;
  color: #0fa3f2;
}
.pager li .post_title {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #443a44;
  line-height: 1;
  letter-spacing: 0;
  padding: 10px 0 0;
  border-radius: 0;
  border: none;
}
.pager li.previous {
  float: left;
}
.pager li.previous a i {
  margin-right: 10px;
}
.pager li.next {
  float: right;
}
.pager li.next a i {
  margin-left: 10px;
}
.post_author {
  margin: 38px 0;
  padding: 35px 55px 35px 35px;
  background: #267ae9;
}
.post_author .media-left {
  padding-right: 25px;
}
.post_author .media-body {
  padding-top: 5px;
}
.post_author .media-body h5 {
  margin-bottom: 20px;
}
.post_author .media-body h5 i {
  color: #fff;
  margin-right: 10px;
}
.post_author .media-body h5 a {
  color: #fff;
}
.post_author .media-body p {
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 25px;
}
.post_author .media-body .nav {
  margin-top: 20px;
  margin-bottom: 0;
}
.post_author .media-body .nav li a {
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
}
.post_author .media-body .nav li a i {
  margin-right: 12px;
}
.post_author .media-body .nav li a:hover {
  color: #0fa3f2;
  background: none;
}
.comments {
  margin-bottom: 38px;
  padding: 38px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}
.comments > h4 {
  margin-bottom: 25px;
}
.comment.reply_comment {
  margin-left: 130px;
}
.comment + .comment {
  margin-top: 60px;
}
.comment .media-left {
  padding-right: 20px;
}
.comment .media-left a {
  width: 110px;
  height: 110px;
  display: block;
}
.comment .media-left a img {
  width: 100%;
}
.comment .media-body h5 a {
  display: inline-block;
  color: #443a44;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.comment .media-body .nav {
  margin-bottom: 20px;
}
.comment .media-body .nav li + li {
  border-left: 1px solid #267ae9;
}
.comment .media-body .nav li a {
  padding: 0 10px;
  color: #267ae9;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
}
.comment .media-body .nav li:first-child a {
  padding-left: 0;
}
.comment .media-body p {
  font-weight: 300;
}
.comment .media-body .btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  background: #ccc;
  line-height: 32px;
  margin-top: 25px;
}
.comment_reply h4 {
  margin-bottom: 40px;
}
.comment_reply .form-control {
  margin-bottom: 32px;
  background: #f1f6f8;
  color: #443a44;
}
/*----------------------------------------------------------------*/
.footer-social {
  width: 42px;
  height: 42px;
  -webkit-background-size: 42px 42px;
  background-size: 42px 42px;
  padding: 0px 6px;
  cursor: pointer;
}
.footer-social-telegram {
  background-image: url('../../images/TELEGRAM.png');
}

.footer-social-twitter {
  background-image: url('../../images/TWITTER.png');
}

.footer-social-linkedin {
  background-image: url('../../images/LINKED-IN.png');
}

.footer-social-blog {
  background-image: url('../../images/BLOG.png');
}
.footer-social-stack {
  background-image: url('../../images/stackoverflow.png');
}
.footer-social-stack:hover {
  background-image: url('../../images/stackoverflow1.png');
}

.footer-social-telegram:hover {
  background-image: url('../../images/TELEGRAM-gray.png');
}

.footer-social-twitter:hover {
  background-image: url('../../images/TWITTER-gray.png');
}

.footer-social-linkedin:hover {
  background-image: url('../../images/LINKED-IN-gray.png');
}

.footer-social-blog:hover {
  background-image: url('../../images/BLOG-gray.png');
}
.contact_banner {
  background: url(../../images/contact-us.png) no-repeat scroll center top;
  background-size: cover;
  padding: 100px 0 120px;
  margin-top: 80px;
}
.contact_banner h4 {
  color: #fff;
}
.contact_banner h4 span {
  color: #42b6ff;
}
.contact_banner h2 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  line-height: 40px;
  margin: 15px 0;
}
.contact_banner h2 i {
  font-size: 24px;
  margin-right: 15px;
}
.contact_banner p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: right;
  direction: rtl;
  line-height: 1.857;
  letter-spacing: 1px;
  max-width: 427px;
}
.contact_banner.hosting_banner {
  background-image: url(../../images/hosting/dedicated.jpg);
  padding: 150px 0;
}
.contact_banner.hosting_reseller {
  background-image: url(../../images/hosting/resellal.jpg);
  padding: 150px 0;
}
.contact_banner.hosting_shared {
  background-image: url(../../images/hosting/wordpress.jpg);
  padding: 150px 0;
}
.contact_banner.domain_transfer {
  background-image: url(../../images/hosting/domain.jpg);
  padding: 150px 0;
}
.contact_content {
  padding: 0px 0 120px;
}
.contact_content .part_number {
  margin-bottom: 18px;
  font-size: 48px;
  color: #267ae9;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 1;
}
.contact_content .part_title {
  margin-bottom: 25px;
}
.contact_content .form_row {
  border-bottom: 1px solid #eaeaea;
}
.contact_content .form_row h4 {
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 30px;
}
.contact_content .form_row .form_side {
  width: 633px;
  padding: 60px 63px 80px 0;
  border-right: 1px solid #eaeaea;
}
.contact_content .form_row .detail_address {
  width: calc(100% - 633px);
  padding: 60px 75px 80px;
}
.contact_content .form_row .detail_address .media + .media {
  margin-top: 30px;
}
.contact_content .form_row .detail_address .media + .media .media-left i {
  background: #42b6ff;
}
.contact_content .form_row .detail_address .media + .media + .media {
  margin-top: 30px;
}
.contact_content .form_row .detail_address .media + .media + .media .media-left i {
  background: #f95732;
}
.contact_content .form_row .detail_address .media .media-left {
  padding-right: 35px;
}
.contact_content .form_row .detail_address .media .media-left i {
  width: 80px;
  height: 80px;
  line-height: 75px;
  background: #267ae9;
  text-align: center;
  font-size: 24px;
  color: #fff;
  border-radius: 100%;
}
.contact_content .form_row .detail_address .media .media-body {
  padding-top: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #443a44;
  letter-spacing: 1px;
  line-height: 30px;
}
.contact_content .form_row .detail_address .media .media-body a {
  color: #267ae9;
}
.contact_content .form_row .detail_address .media .media-body .nav li a {
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #4a4a4a;
  text-transform: uppercase;
}
.contact_content .form_row .detail_address .media .media-body .nav li a i {
  margin-right: 12px;
}
.contact_content .form_row .detail_address .media .media-body .nav li a:hover {
  color: #267ae9;
  background: none;
}
.contact_content .we_support {
  padding-top: 80px;
}
.contact_content .we_support .part_title {
  margin-bottom: 60px;
}
.contact_content .we_support .col-sm-6 .media {
  padding-right: 60px;
}
.contact_content .we_support .col-sm-6 .media .media-left {
  padding-right: 18px;
}
.contact_content .we_support .col-sm-6 .media .media-left i {
  width: 80px;
  height: 80px;
  line-height: 75px;
  background: #267ae9;
  text-align: center;
  font-size: 24px;
  color: #fff;
  border-radius: 100%;
}
.contact_content .we_support .col-sm-6 .media .media-body {
  padding-top: 5px;
}
.contact_content .we_support .col-sm-6 .media .media-body h4 {
  text-transform: capitalize;
  margin-bottom: 15px;
}
.contact_content .we_support .col-sm-6:nth-child(2) .media .media-left i {
  background: #42b6ff;
}
.contact_content .we_support .col-sm-6:nth-child(3) .media .media-left i {
  background: #f95732;
}
#mapBox {
  height: 426px;
  margin: 20px 0 90px;
}
#mapBox + .mapbox_hr {
  background: #eaeaea;
  margin: 0;
}
#contactForm .form-control {
  margin-bottom: 15px;
}
#contactForm textarea.form-control {
  margin-bottom: 30px;
}
.contactForm {
  position: relative;
}
.contactForm #success,
.contactForm #error {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  text-align: center;
  line-height: 342px;
  background: rgba(20, 65, 88, 0.9);
  display: none;
}
.contactForm #success {
  color: lightgreen;
}
.contactForm #error {
  color: #f95732;
}
/*----------------------------------------------------------------*/
.faqs_content {
  padding: 70px 0;
}
.faqs_content h4.menuTitle {
  margin-bottom: 25px;
}
.faqs_content .faq_category {
  width: 278px;
  padding-right: 0;
}
.faqs_content .faq_category .nav {
  border: none;
  overflow: hidden;
}
.faqs_content .faq_category .nav li {
  display: block;
  float: none;
}
.faqs_content .faq_category .nav li a {
  border-radius: 0;
  padding: 12px;
  text-align: left;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #443a44;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  background: #f9f9f9;
  margin: 0;
}
.faqs_content .faq_category .nav li a .icon {
  margin-right: 15px;
}
.faqs_content .faq_category .nav li a:hover,
.faqs_content .faq_category .nav li a:focus {
  background: #f5f5f5;
}
.faqs_content .faq_category .nav li + li {
  margin-top: 17px;
}
.faqs_content .faq_category .nav li.active a {
  border-bottom-color: #fff;
  color: #fff;
  border-top: none;
  background: #42b6ff;
}
.faqs_content .faq_content {
  width: calc(100% - 278px);
  padding-left: 0;
}
.faqs_content .faq_content .faq {
  padding: 35px 0;
}
.faqs_content .faq_content .faq:first-child {
  padding-top: 0;
}
.faqs_content .faq_content .faq + .faq {
  margin-top: 0;
  border-top: 1px solid #eaeaea;
}
.faqs_content .faq_content .faq .media-left {
  padding: 0 30px;
  width: 127px;
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #267ae9;
  line-height: 1;
}
.faqs_content .faq_content .faq .media-body p {
  margin-top: 15px;
}
/*----------------------------------------------------------------*/
.hosting_featue {
  background: #fff;
}
.like_us {
  padding: 60px 0;
}
.this_top_features .this_top_feature {
  background: #fff;
  padding: 82px 0 57px;
}
.this_top_features .this_top_feature .media-left {
  width: 448px;
  padding-right: 100px;
}
.this_top_features .this_top_feature .media-right {
  width: 448px;
  padding-left: 100px;
}
.this_top_features .this_top_feature .media-body h2 {
  margin-top: 5px;
  font-weight: 300;
  font-size: 34px;
  margin-bottom: 30px;
}
.this_top_features .this_top_feature:nth-child(even) {
  background: #f1f6f8;
}
.this_top_features .this_top_feature:nth-child(2) {
  padding: 125px 0 80px;
}
.this_top_features .this_top_feature:last-child {
  padding: 110px 0 85px;
}
/*----------------------------------------------------------------*/
.home_slider {
  position: relative;
}
.home_slider .item {
  max-height: 797px;
  text-align: center;
  background: #000000;
  overflow: hidden;
}
.home_slider .item img {
  display: inline-block;
}
.home_slider .item .slide_caption {
  text-align: left;
  position: absolute;
  width: 100%;
  top: calc(50% - 145px);
}
.home_slider .item .slide_caption h2 {
  font-size: 65px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  color: #fff;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 30px;
}
.home_slider .item .slide_caption p {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.1px;
  margin-bottom: 30px;
  max-width: 460px;
}
.home_slider .item .slide_caption .btn {
  float: left;
}
.home_slider .item .slide_caption .btn + .pkg_price {
  line-height: 40px;
  padding: 0 17px;
  background: #fff;
  float: left;
  color: #443a44;
  transform: rotateY(-90deg) perspective(150px);
  perspective-origin: left;
  transform-origin: left;
}
.home_slider .item .slide_caption .btn:hover + .pkg_price {
  transform: rotateX(0);
}
.home_slider .owl-controls {
  width: 100%;
  position: absolute;
  top: calc(50% - 47px);
}
.home_slider .owl-controls .owl-nav div {
  line-height: 94px;
  width: 34px;
  background: #383a4c;
  color: #b5b5b5;
  font-size: 16px;
  text-align: center;
}
.home_slider .owl-controls .owl-nav div.owl-prev {
  float: left;
}
.home_slider .owl-controls .owl-nav div.owl-next {
  float: right;
}
.home_slider .owl-controls .owl-nav div:hover {
  background: #267ae9;
}
.home_slider.home_slider2 .item .slide_caption {
  top: auto;
  bottom: 0;
}
.home_slider.home_slider2 .item .slide_caption .sTexts {
  padding: 170px 110px 0;
  float: left;
}
.home_slider.home_slider2 .item .slide_caption .sTexts h5 {
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  line-height: 1;
  margin-bottom: 5px;
}
.home_slider.home_slider2 .item .slide_caption .sTexts h2 {
  font-weight: bold;
}
.home_slider.home_slider2 .item .slide_caption .sTexts ul {
  margin-bottom: 25px;
}
.home_slider.home_slider2 .item .slide_caption .sTexts ul li {
  color: #fff;
}
.home_slider.home_slider2 .item .slide_caption .sTexts .btn {
  background: #42b6ff;
}
.home_slider.home_slider2 .item .slide_caption .sTexts .btn + .pkg_price {
  background: #fff;
  color: #443a44;
}
.home_slider.home_slider2 .item .slide_caption .sImgs {
  float: left;
}
.home_slider.home_slider2 .item .slide_caption .sImgs .row {
  margin: 0;
}
.home_slider.home_slider2 .item .slide_caption .sImgs img {
  width: auto !important;
  max-width: 100% !important;
}
.home_slider.home_slider2 .item .slide_caption .sImgs.pr {
  padding-left: 155px;
}
.home_slider2 .item {
  height: 670px;
}
#home_slider3 .carousel-indicators {
  margin-bottom: 0;
  bottom: 0;
  width: 1170px;
  margin-left: -585px;
}
#home_slider3 .carousel-indicators li {
  float: left;
  width: calc((100% - 3px) / 4);
  margin: 0;
  border-radius: 0;
  height: 117px;
  padding: 38px 59px;
  background: #fff;
  border: none;
  color: #443a44;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 21px;
  font-size: 14px;
  text-indent: 0;
  text-align: left;
}
#home_slider3 .carousel-indicators li + li {
  margin-left: 1px;
}
#home_slider3 .carousel-indicators li img {
  float: left;
  margin-right: 30px;
}
#home_slider3 .carousel-indicators li.active {
  background: #f3f7f9;
}
#home_slider3 .carousel-inner .item {
  height: 775px;
  background: #f3f7f9;
}
#home_slider3 .carousel-inner .item .carousel-caption {
  position: relative;
  top: 0;
  left: 0;
  height: 658px;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-left {
  padding: 0 15px;
  width: 50%;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-left img {
  max-width: 100%;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body {
  padding: 180px 15px;
  text-align: left;
  text-shadow: none;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body h4 {
  color: #080808;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.1px;
  margin-bottom: 10px;
  margin-top: 0;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 65px;
  line-height: 60px;
  color: #080808;
  margin: 0 0 15px;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #9d9ea7;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 0;
  max-width: 400px;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body .btn {
  float: left;
  margin-top: 25px;
  background: #267ae9;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body .btn + .pkg_price {
  margin-top: 25px;
  line-height: 40px;
  padding: 0 17px;
  background: #42b6ff;
  color: #fff;
  float: left;
  text-shadow: none;
  transform: rotateY(180deg) perspective(150px);
  perspective-origin: left;
  transform-origin: left;
  z-index: -1;
}
#home_slider3 .carousel-inner .item .carousel-caption .container .media .media-body .btn:hover + .pkg_price {
  transform: rotateX(0);
}
#home_slider3 .carousel-control {
  line-height: 94px;
  height: 94px;
  width: 34px;
  background: #ced9df;
  color: #fff;
  font-size: 16px;
  z-index: 10;
  text-align: center;
  top: calc(50% - 47px);
}
#home_slider3 .carousel-control:hover {
  background: #267ae9;
}
/*----------------------------------------------------------------*/
.portfolio_content {
  padding: 65px 0;
}
.portfolio {
  padding: 15px;
}
.portfolio .image img {
  width: 100%;
}
.portfolio .image a {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  line-height: 1;
  text-align: center;
  background: #267ae9;
  color: #fff;
  display: block;
  overflow: hidden;
  transition: all 300ms ease-in-out 0s;
}
.portfolio .image a i {
  position: absolute;
  top: calc(50% - 7px);
  left: calc(50% - 7px);
}
.portfolio h5 {
  margin: 15px 0;
}
.portfolio h5 a {
  text-transform: uppercase;
  color: #443a44;
  line-height: 24px;
}
.portfolio p {
  margin-bottom: 15px;
}
.portfolio:hover .image a {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.portfolio:hover h5 a {
  color: #42b6ff;
}
.col6 {
  margin-top: 120px;
}
/*----------------------------------------------------------------*/
.featureTab .feature_tab_menu {
  background: #f9f9f9;
  border-bottom: 1px solid #d8d8d8;
}
.featureTab .feature_tab_menu .nav {
  overflow: hidden;
  padding: 0 15px;
  border: none;
  margin-bottom: -1px;
}
.featureTab .feature_tab_menu .nav li {
  max-height: 103px;
  width: 25%;
  border-right: 1px solid #eaeaea;
  margin-bottom: 0;
}
.featureTab .feature_tab_menu .nav li:first-child {
  border-left: 1px solid #eaeaea;
}
.featureTab .feature_tab_menu .nav li a {
  border-radius: 0;
  padding: 27px 49px;
  height: 103px;
  text-align: left;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #443a44;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  cursor: pointer;
  background: #f9f9f9;
  margin: 0;
}
.featureTab .feature_tab_menu .nav li a:before {
  content: '';
  width: 100%;
  height: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #267ae9;
}
.featureTab .feature_tab_menu .nav li a .icon {
  float: left;
  margin-right: 30px;
}
.featureTab .feature_tab_menu .nav li a:hover,
.featureTab .feature_tab_menu .nav li a:focus {
  background: #f5f5f5;
}
.featureTab .feature_tab_menu .nav li a:hover:before,
.featureTab .feature_tab_menu .nav li a:focus:before {
  height: 10px;
}
.featureTab .feature_tab_menu .nav li:nth-child(1) a,
.featureTab .feature_tab_menu .nav li:nth-child(2) a {
  line-height: 47px;
}
.featureTab .feature_tab_menu .nav li.active a {
  border-bottom-color: #fff;
  border-top: none;
  background: #fff;
}
.featureTab .feature_tab_menu .nav li.active a:before {
  height: 5px;
}
.featureTab .featureTab_content