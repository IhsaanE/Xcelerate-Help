import css from 'styled-jsx/css'

export const homeBannerStyles = css.global`
.dropdown{
  overflow: hidden !important;
  height: relative;
}
.submenu a{
  padding-left: 40px;
  font-weight: normal !important;
}
.submenu{
  border: 1px solid grey;
  
  margin-top: -1px;
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.searchrect{
  background: white;
  text-align: left;
  
  margin-top: 0px;

  margin-left: 1px;
  overflow: hidden;
}
.searchrect a{
  font-weight: bold;
  padding-bottom: 5px;
}
.searchrect label{
  color: grey !important;
  padding-left: 10px;
}
.ddlist-enter {
  max-height: 0px !important;

}
.ddlist-enter-active {

  max-height: 200px !important; 
  transition: all 300ms ease-in;
}
.ddlist-exit {

  max-height: 200px !important;
}
.ddlist-exit-active {
  max-height: 0px !important;

  transition: all 300ms ease-out;
}

.menuitem{
  display: block;
  text-align: left;
  color: white;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-top: -1px;
  border: 1px solid grey;

}
.menuitem ul{
  list-style-type: none;

}
.widediv{
  width: 100%;
  display: block;
  
}
.landingnav h4{
  color: black;
  font-size: 30px;
  font-weight: 520;
  padding-top: 0;
  padding-left: 5px;
  padding-right: 5px;
}
.landingnav{
  width: 270px;
  background: white;
  height: 350px;
  display: inline-block;
  margin-top: 30px;
  margin-left: max(calc((100% - (270px * 3))/12), 15px);
  margin-right: max(calc((100% - (270px * 3))/12), 15px);
  position:relative;
  vertical-align:top;
}
.landingnav button{
  width: 70%;
  display: block;
  margin: auto;
  border: none;
  height: 40px;
  background: #577620;
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  margin-left: 15%;
  margin-right: 15%;
}
.homepage-stcontainer{
  width: 60%;
  max-width: 800px;
  min-width: 270px;
  height: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  margin: auto;
}
.homepage-stcontainer ul{
  list-style-type: none;
}
.homepage-searchbutton
{
  width: 50px;
  height: 50px;
  display: inline;
  border: none;
  vertical-align: middle;
  background-image: url('https://images.prismic.io/xcelerate-help-site/4a39dbc4-403a-4522-b037-40e625bb5db0_searchButton.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.homepage-searchTerm{
  width: calc(100% - 65px);

  vertical-align: middle;
  border: none;
  height: 50px;

  display: inline;
  font-size: 20px;
  padding-left: 12px;
  margin-bottom: 1px;
  top: 0;
}

label{
  color: white !important;
}
.dispimg{
  width: 150px;
  height: 150px;
  height: relative;
  padding-top: 10px;
}
.xcellerateimg{
  width: 300px;
  float: left;
  display: block;
}
.qsureimg{
  width: 180px;
  float: right;
  display: block;
}
body{
  background: rgb(209, 211, 212, 0.5);
}
.homepage-banner {
  margin: 0px 0 80px;
  padding: 10em 0 8em;
  background-position: center center;
  background-size: cover;
  color: #ffffff;
  line-height: 1.75;
  text-align: center;
}
.banner-content {
  text-align: center;
}
.banner-title,
.banner-description {
  width: 90%;

  margin-left: auto;
  margin-right: auto;
  color: black !important;
  padding-top: 0px;
}
.banner-description {

  display: inline-block;
  padding-left: 15px;
  margin-top: 10px;

  background-position: center;
}

.banner-title h1{
  color: black;
}

.banner-description h3{
  
  overflow: hidden !important;
  white-space: normal;
  color: black;
  margin-top: 0px;

  font-size: 25px !important;

}
.banner-title {
  padding-top: 30px;
  color: #ffffff;
  font-size: 70px;
  font-weight: 400;
  line-height: 70px;
}
.banner-button {
  background: #ffffff;
  border-radius: 7px;
  color: #484d52;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 40px;
}
.banner-button:hover {
  background: #c8c9cb;
}
@media (max-width: 767px) {
  .homepage-banner {
    margin: 0 0 40px;
    padding: 10em 0 6em;
  }
  .banner-title {
    font-size: 50px;
    line-height: 50px;
  }
}
hr{
  margin-top: 5px;
  margin-bottom: 5px;
  background: white;
}
`
