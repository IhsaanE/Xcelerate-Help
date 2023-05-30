import React, {useState, useCallback, useEffect } from 'react';
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Button} from 'react-bootstrap';
import { DocLink } from 'components'
import { menubarStyles } from 'styles'
import Sticky from 'react-sticky-el';
import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import { Header, SliceZone } from 'components'
import { renderToString } from 'react-dom/server'

const MenuBar = ({ menu, allPages }) => {
  const isBreakpoint = useMediaQuery(1500)
  return (
   <div>
     { isBreakpoint ? (
       <nav>
         <menubar className="site-header">
            <div>
              <MenuOpen value={allPages} menu={menu} bool={false}/>
              <style jsx global>{ menubarStyles }</style>
            </div>
          </menubar>
       </nav>
     ) : (
       <nav>

          <menubar className="site-header">
            <div  class="widediv">
            <Sticky>
            <div> 
            <MenuOpen value={allPages} menu={menu} bool={true}/>
              <style jsx global>{ menubarStyles }</style>
            </div>
                       
            </Sticky>
            </div>
          </menubar>

       </nav>
  )} 
  </div> 
)}

const useMediaQuery = (width) => {

  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

class MenuOpen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
    this.state = {searchText: new RegExp("")};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  handleClickOff(event) {
    if (!event.currentTarget.contains(event.relatedTarget) && this.state.isMenuOpen) {
      this.setState(state => ({
        isMenuOpen: !state.isMenuOpen
      }));
      this.setTitle("");
    }
  }
  setTitle(val){
    this.setState(state => ({
      searchText: new RegExp("(?=.*?" + val.toUpperCase().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/ /g,")(?=.*?") + ")")    
    }));
  }
  
  render() {
    return (
      <>
        {!this.props.bool ?
        <div class="focusdiv" tabindex="-1" onBlur={this.handleClickOff}>
      
      <img class="buttonimg"  onClick={this.handleClick} src="https://images.prismic.io/xcelerate-help-site/d1c00667-28b7-4ed5-9fe5-aeb5558f6e78_hamburger-icon.png" width="20" height="25" alt="submit" /> 
      
      <CSSTransition
              in={this.state.isMenuOpen || this.props.bool}
              timeout={300}
              classNames="alert"
              unmountOnExit
            >
      
      <div class="dropdownMenu" >
      <input class="searchTerm" type="text" placeholder="Search.." onChange={event => this.setTitle(event.target.value)} />
        <ul>
        {this.props.menu.data.menuorder.map((menuorder) => (
          this.props.value.results.map((menuLink) => (
            menuorder.menuitemlink.id == menuLink.id ?
            <li>
            <Populate value={menuLink} searchText={this.state.searchText} ddcls={true}/>     
          </li>
          : null))))}
        </ul>
        </div>
           </CSSTransition></div>
      : <>
      {this.state.isMenuOpen || this.props.bool ? 
      <div class="scrolldiv">
        <input class="searchTerm" type="text" placeholder="Search.." onChange={event => this.setTitle(event.target.value)} />
        <ul>
        {this.props.menu.data.menuorder.map((menuorder) => (
          this.props.value.results.map((menuLink) => (
            menuorder.menuitemlink.id == menuLink.id ?
            <li>
              
            <Populate value={menuLink}  searchText={this.state.searchText} ddcls={false}/>     
            </li>
          : null))))}
        </ul>
        </div>
           : null}
           </>}
      </>
    )
  }
}

class Populate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.state = {contents:  renderToString(<SliceZone sliceZone={this.props.value.data.page_content} />).toUpperCase() + "CLASS=\"ANCHOR\" ID=\""};
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    var link = {
      type: 'page',
      tags: [],
      lang: 'en-us',
      uid: this.props.value.uid,
      link_type: 'Document',
      isBroken: false
    }
    return (
        <>
              <CSSTransition
              in={ this.props.searchText.test(this.state.contents.replace(/(<([^>]+)>)/ig, "") + " " + this.props.value.data.pagetitle[0].text.toUpperCase())}
              timeout={300}
              classNames="ddlist"
              unmountOnExit

            >
      <div class="menuItem">
      <label class="unselectable" onClick={this.handleClick}>
        {this.state.isToggleOn ? '▼ ' : '▲ '}
      </label>
      <DocLink link={link}>
        {this.props.value.data.pagetitle[0].text}
      </DocLink>
      </div>
      </CSSTransition>
      <CSSTransition
              in={this.state.isToggleOn}
              timeout={300}
              classNames="ddlist"
              unmountOnExit
            >
        <ul className={` ${this.props.ddcls ? "ddmenuSubItem" : "menuSubItem"}`}>
        {this.props.value.data.page_content.map((menuLink2, index) => (
        menuLink2.slice_type=='anchortag' && this.props.searchText.test(
          this.state.contents.substring(
            this.state.contents.indexOf(
              "CLASS=\"ANCHOR\" ID=\"" + menuLink2.primary.tagname[0].text.replace(/ /g,"_").toUpperCase()),
              this.state.contents.indexOf(
                "CLASS=\"ANCHOR\" ID=\"", 25 + this.state.contents.indexOf(
                  "CLASS=\"ANCHOR\" ID=\"" + menuLink2.primary.tagname[0].text.replace(/ /g,"_").toUpperCase())))) ? 
        <GetAnchor menuLink2={menuLink2} uid={this.props.value.uid}/>
        : null 
      ))}
      </ul></CSSTransition>
          
    </>
    )
  } 
}

const GetAnchor = ({menuLink2, uid}) => {
  var link = {
    type: 'page',
    tags: [],
    lang: 'en-us',
    uid: uid + "#" + menuLink2.primary.tagname[0].text.replace(/ /g,"_"),
    link_type: 'Document',
    isBroken: false
  }
  return(
  <>
        <hr class="line-sub"/>
          <li>
          <DocLink link={link}>
            {menuLink2.primary.tagname[0].text}
          </DocLink>
          
        </li>

        </>
  )   
      
}

export default MenuBar
