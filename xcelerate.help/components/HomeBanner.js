import React from 'react'
import { RichText } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'
import { DocLink } from 'components'
import { homeBannerStyles } from 'styles'
import MenuBar from './MenuBar';
import { renderToString } from 'react-dom/server'
import { Header, SliceZone } from 'components'
import { CSSTransition } from 'react-transition-group';

class LandingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: new RegExp("(?=.*?)")};
    this.state = {showRes: false};
    this.state = {anchorText: new RegExp("(?=.*?ANCHOR)")};
    this.showResults = this.showResults.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(val){
    this.setState(state => ({
      searchText: new RegExp("(?=.*?" + val.toUpperCase().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/ /g,")(?=.*?") + ")")    
    }));
  }

  showResults(){
    this.state.searchText != undefined ? null : this.setTitle("");
    this.setState(state => ({
      showRes: !state.showRes
    }));
    
  }
  
  render() {
    return <div class="homepage-stcontainer">
    <input class="homepage-searchTerm" type="text" placeholder="Search Knowledge Base" onChange={event => this.setTitle(event.target.value)}/>
    <input class="homepage-searchbutton" type="button" onClick={this.showResults}></input>
    
    <CSSTransition
    in={this.state.showRes}
    timeout={300}
    classNames="ddlist"
    unmountOnExit
  >
    <div class="dropdown">
      {this.props.allPages.results.map((menuLink) => (
        <div class="searchrect">
        <li>
        <Populate value={menuLink} searchText={this.state.searchText} anchorText={this.state.anchorText} ddcls={true}/>    
      </li></div>))}  </div>
      </CSSTransition>
    </div>
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
      <div class="menuitem">
      
      <label class="unselectable" onClick={this.handleClick}>
       
        {!this.props.anchorText.test(this.state.contents.slice(0, -20)) ? '- ': this.state.isToggleOn ? '▼ ' : '▲ '}
      </label>
      
      <NextLink href={this.props.value.uid}>
        {this.props.value.data.pagetitle[0].text}
      </NextLink>
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

  return(
  <>
        
        <div class="submenu">
          <li>
          <NextLink href={uid}>
            {menuLink2.primary.tagname[0].text}
          </NextLink>
          
        </li>
        </div>

        </>
  )   
      
}

const HomeBanner =  ({ banner, menu, allPages }) => {
 
  return (
  <section
    className="homepage-banner"
    
  >
    

      <div className="banner-title">

         <h1> {RichText.asText(banner.title)} </h1>
        
      </div>
    
      <div className="banner-description">
        <h3>{RichText.asText(banner.tagline)}</h3>
      </div>
      
      <ul>
      <LandingSearch  menu={menu} allPages={allPages}/>
      </ul>
      
      
      <div class="widediv">
      <div class="landingnav">
      <img class="dispimg" src="https://images.prismic.io/xcelerate-help-site/65f8a465-20e3-4722-81e9-6bb7068e10d7_User+Manual.jpg"/>
      <h4>User Manual</h4>
      <a>Read through the Xcelerate User Manual</a>
      <NextLink href="/user_manual"><button>Read More</button></NextLink>
        </div>
        <div class="landingnav">
        <img class="dispimg" src="https://images.prismic.io/xcelerate-help-site/12000758-4908-4538-9031-47314565aad7_FAQs.png"/>
        <h4>FAQ's</h4>
        <a>Search our library of frequently asked questions</a>
        <NextLink href="/faq"><button>Read More</button></NextLink>
        </div>
        <div class="landingnav">
        <img class="dispimg" src="https://images.prismic.io/xcelerate-help-site/2cf4ad58-2586-44f0-b593-4165f31c919f_Deployment.png"/>
        <h4>Deployment Notes</h4>
        <a>All the latest deployment notes</a>
        <NextLink href="/deployment_notes"><button>Read More</button></NextLink>
        </div>
        </div>
    
    <style jsx global>{homeBannerStyles}</style>
  </section>
)}

export default HomeBanner
