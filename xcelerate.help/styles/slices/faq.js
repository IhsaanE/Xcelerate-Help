import css from 'styled-jsx/css'

export const faqStyles = css.global`
.faqdiv p{
  margin-block-start: 0em !important;
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
h3 p{
  display: inline;
}
.searchTerm:focus{
  color: #577620;
}
.ansdiv{
  white-space: normal !important;
  overflow: hidden !important;
}
.faqlist-enter {
  max-height: 0px !important;
}
.faqlist-enter-active {
  max-height: 200px !important; 
  transition: all 300ms ease-in;
}
.faqlist-exit {
  max-height: 200px !important;
}
.faqlist-exit-active {
  max-height: 0px !important;
  transition: all 300ms ease-out;
}
.ddlist-enter {
  max-height: 0px !important;
}
.ddlist-enter-active {
  max-height: 300px !important; 
  transition: all 300ms ease-in;
}
.ddlist-exit {
  max-height: 300px !important;
}
.ddlist-exit-active {
  max-height: 0px !important;
  transition: all 300ms ease-out;
}
.togglelabel{
  font-weight: 700;
  font-size: 40px;
  float:left;
  width: 30px;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline;
  z-index: 999;
}
.headingdiv{
  padding-bottom:20px;
  padding-top:10px;
  white-space: normal !important;
  overflow: hidden !important;
}
.faqdiv{
  white-space: normal !important;
  overflow: hidden !important;
}

body h3{
  color: #577620;
  margin-top: 0;
  
}
body h4{
  color: #577620;

}
.ansdiv p{
  margin-bottom: 0px;
  padding-left: 40px;
  
}
.text-section-2col {
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2;
  -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
  -moz-column-gap: 40px; /* Firefox */
  column-gap: 40px;
}
.text-section-1col img,
.text-section-2col img,
.gallery img {
  margin-bottom: 1rem;
}
.text-section-1col p:last-child,
.text-section-2col p:last-child {
  margin-bottom: 0;
}
.content-section.text-section-2col {
  margin-bottom: 0;
}
@media  {
  .text-section-2col {
    -webkit-column-count: 1; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1;
    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;
  }
}

.ansdiv ol{
  margin-bottom: 0px;
  padding-left: 80px;
  
}

`
