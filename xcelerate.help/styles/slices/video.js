import css from 'styled-jsx/css'

export const videoStyles = css.global`
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 10px;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ansdiv{
  white-space: normal !important;
  overflow: hidden !important;
}
.ddlist-enter {
  max-height: 0px !important;
}
.ddlist-enter-active {
  max-height: 500px !important; 
  transition: all 300ms ease-in;
}
.ddlist-exit {
  max-height: 500px !important;
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


`
