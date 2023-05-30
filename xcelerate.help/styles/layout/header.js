import css from 'styled-jsx/css'

export const headerStyles = css.global`

.headermenu{
  float: right;
  height: 80%;
}
.headermenu a{
  font-size: 18px;
  font-weight: 100;
  margin-left: 10px;
  margin-right: 20px;
  line-height: 100px;
}
.alerts-enter {
  top: -50px !important;
}
.alerts-enter-active {
  top: 0px !important; 
  transition: all 300ms ease-in;
}
.alerts-exit {
  top: 0px !important;
}
.alerts-exit-active {
  top: -50px !important;
  transition: all 300ms;
}
.floating-icon{
  position: fixed;
    top: 0px;
    right: 0px;
  z-index: 2;
  width: relative;
  height: 100px;
}
.qsure-img,
.icon-img{
  position: relative;
  left: 0px;
  width:relative;
  height:100px;
  cursor: pointer;
  display: inline;
}
.qsure-img{
  top: 10px;
}
.head-rect{
  border-radius: 0px;
  border: 0px solid lightgrey;
  background: white;
  padding: 0px; 
  width: 100%;
  height: 120px;
  margin: 0px;
  left: -2px;
  top: 0px;
  position: fixed;
  align: centre;
  display: inline-block;
  z-index: 100;
}
.top-bar {
  border-radius: 5px;
  border: 2px solid rgba(20,20,20,1);
  background: linear-gradient(40deg, rgba(70,70,70,1), rgba(40,40,40,1));
  padding: 10px; 
  width: calc(100% - 44px);
  top: 0px;
  height: relative;
  margin: 0px;
  left: 10px;
  position: relative;
  align: centre;
  display: inline-block;
}
.body{
  margin: 0px;
 }
.site-header {
  height: 30px;
  padding: 0px 0;
}
.site-header,
.site-header a {
  color: #ffffff;
}
.site-header nav a:hover {
  color: #c8c9cb;
}

.site-header .logo {
  display: inline-block;
  font-size: 22px;
  font-weight: 900;
}
.site-header nav {
  float: none;
  color: white;
}
.site-header nav ul {
  padding: 0;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
}
.site-header nav li {
  display: block;
  margin-left: 40px;
  margin-top: 4px;
  display: block;
  text-align: left;
  
}
@media{
  .site-header {
    padding-left: 0px;
    padding-right: 20px;
  }
}
@media{

  .site-header {
    position: absolute;
    left: 0;
    right: 0;
  }
  .site-header .logo {
    display: inline-block;
    text-align: center;
  }
  .site-header nav {
    float: none;
    text-align: center;
  }
  .site-header nav li {
    display: block;
    margin-left: 10px;
    margin-right: 10px;
  }
}
.anchors{
  display:block;
  height:120px; /* this is the height of your header */
  margin-top:0; /* this is again negative value of the height of your header */
  visibility:hidden;

}

.pagesearch{
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  z-index: 99;
}

.searchTermMain {  
  max-width: 400px;
  width: 59%;
  border: 1px solid #89AB31;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0px 0px 5px;
  outline: none;
  color: #89AB31;
  background-color: rgb(255, 255, 255, 0.9);
  z-index: 99;
}

.searchButton-last,
.searchButton{
  display: inline;
  margin-left: -1px;
  margin-right: auto;
  border: 1px solid #89AB31;
  color: #89AB31;
  height: 32px;

  background-color: rgb(255, 255, 255, 0.9);
  z-index: 99;
  width: 9%;
  min-width: 29px;
}

.searchButton-last{
  border-radius: 0px 5px 5px 0px;
}

.searchButton:focus{
  outline: none;
  
}

.containInline
{
  position: fixed;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: max(60%, 300px);
  max-width: 350px;
  z-index: 99;
  left: calc(50% - 100px);
  
}

.searchTag{
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.5;
  border: none;
  background-color: rgb(255,255,255,0);
}

.searchTermMain:focus{
  color: #577620;
}

.underline-img{
  width: 100%;
  display: block;
  margin-top: -10px;
  height: 10px;
  position: absolute;
}
`
