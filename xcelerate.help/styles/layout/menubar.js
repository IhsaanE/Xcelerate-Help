import css from 'styled-jsx/css'

export const menubarStyles = css.global`
.scrolldiv:hover,
.dropdownMenu:hover {
  overflow-y: auto;
}
.focusdiv{
  width: 50px;
}
[tabindex="-1"]:focus {
  outline: none;
}
.alert-enter {
  max-height: 0px !important;
}
.alert-enter-active {
  max-height: 500px !important; 
  transition: all 300ms ease-in;
}
.alert-exit {
  max-height: 500px !important;
}
.alert-exit-active {
  max-height: 0px !important;
  transition: all 300ms;
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

/* width */
::-webkit-scrollbar {
  width: 10px;
  overflow-x: none !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.widediv{
  width: calc((65% - 680px));
  margin-left: max(10px, calc(65% - 1020px));
  margin-top: 10px;
  max-width: 350px;
}
.menuItem a{
  color: black !important;
  font-weight: 600;
}

.buttonimg{
  display: block;
  type: submit;
  
  margin-top: 0px;
  
  height: 34px;
  width: 30px;
  cursor: pointer;
  
  padding-left: 3px;
  padding-right: 3px;
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.scrolldiv
{
  padding-bottom: 0px;
  max-height: calc(95vh - 140px);
  overflow: hidden;
  height: relative;
  
}
.dropdownMenu{
    max-height: calc(95vh - 140px);
    overflow-y: hidden;
    overflow-x: hidden;
    max-width: 3000px;
    position: absolute;
    top: -5px;
    width: relative;
    height: relative;
    margin: 0 auto;
    border-radius: 2px;
    border: 2px solid lightgray;
    background-color: lightgray;
    display: inline;
    background-color: white;
    margin-top: 40px;
    z-index: 5;
  }
  .menuItem{
    border-radius: 2px;
    
    position: relative;
    padding-bottom: 0px;
    
    top: 0px;
    width: relative;
    height: relative !important;
    margin-top: 10px;
    border: 2px solid lightgray;
    background-color: lightgray;
    display: block;
    
  }
  .ddmenuSubItem,
  .menuSubItem{
    border-radius: 2px;
    white-space: normal;
    overflow: hidden !important;
    position: relative;
    padding-bottom: 0px;
    
    top: 0px;
    width: relative;
    height: relative !important;
    color: black;
    border: 2px solid lightgray;
    background-color: white;
    display: block;
    
    margin-top: -2px;
  }

  .ddmenuSubItem{
    width: 100%;
    left: -2px;
  }

  .rectangle4{
    border-radius: 2px;
    max-width: 3000px;
    position: relative;
    padding-bottom: 0px;
    color: white;
    top: 0px;
    height: relative !important;
    margin-top: 10px;
    padding-right: 10px;
    border: 2px solid lightgray;
    background-color: lightgray;
    display: block;
    left: 0px;
    width: relative;
  }
  .rectangle5{
    white-space: normal;
  overflow: hidden;
    border-radius: 2px;
    max-width: 3000px;
    position: relative;
    padding-bottom: 0px;
    color: white;
    top: 0px;
    height: relative !important;
    margin-left: -2px;
    margin-right: -2px;
    margin-top: -2px;
    border: 2px solid lightgray;
    background-color: white;
    display: block;
    left: 0px;
    width: relative;
  }

  .parent {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    
}

.ddmenuSubItem a,
.menuSubItem a{
  color: #577620 !important;
}

.ddmenuSubItem li,
.menuSubItem li{
  display: block;
  text-align: left;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
}
  .menuItem,
  .menuItem button{
    display: block;
    button-height: 0px;
  }
  .menuItem li{
    display: block;
    text-align: left;
    color: black;
    padding-left: 20px;
    width: 200px;
  }
  .menuItem ul{
    display: inline;
    height: 0px;
  }

  .line-main
  {
    width: 100%;
    height: 6px;
    border-width: 0;
    color: gray;
    background-color: gray;
  }
  .line-sub
  {
    width: 100%;
    height: 2px;
    border-width: 0;
    margin-top: -2px;
    margin-bottom: -2px;
    color: lightgray;
    background-color: lightgray;
  }
.site-header {
  height: 30px;
  padding: 0px 0;
  display: inline;
  
}
.site-header,
.site-header a {
  color: black;
  

  display: inline;
}
.site-header nav a:hover {
  color: #72767B;

}
.homepage .site-header,
.homepage .site-header a {
  color: black;

}
.homepage .site-header nav a:hover {
  color: #c8c9cb;

}
.site-header .logo {
  display: inline;
  font-size: 22px;
  font-weight: 900;

}
.site-header nav {
  float: left;

  display: block;
}
.site-header nav ul {
  padding: 0;
  margin: 0;

  display: block;
}
.site-header nav li {
  display: block;
  margin-left: 40px;
  margin-top: 4px;
  padding-right: 30px;
  display: block;

}
@media (max-width: 1060px) {
  .site-header {
    padding-left: 0px;
    padding-right: 20px;

    
  }
}
@media (max-width: 767px) {
  .site-header {
    height: auto;

  }
  .homepage .site-header {
    position: absolute;
    left: 0;
    right: 0;
  
    
  }
  .site-header .logo {
    display: block;
    text-align: center;

  }
  .site-header nav {
    float: none;
    text-align: center;

    display: block;
  }
  .site-header nav li {
    display: block;
    margin-left: 10px;
    margin-right: 10px;

    display: block;
  }
}
.searchTerm {
  width: calc(100% - 12px);
  border: 1px solid #89AB31;
  padding: 5px;
  height: 20px;
  border-radius: 0px;
  outline: none;
  color: #89AB31;
}

.searchTerm:focus{
  color: #577620;
}
`
