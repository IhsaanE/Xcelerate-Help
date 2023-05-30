import css from 'styled-jsx/css'

export const textSectionStyles = css.global`
p{
  display: block;
}
.block-img img{
  display: inline !important;
  margin-bottom: 0 !important;

}
.tsvideoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 10px;
  z-index: 0;
}
.tsvideoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
body h2{
  color: white;
  background-image: url('https://images.prismic.io/xcelerate-help-site/81a93fdb-926f-41fa-87ce-89bdc7c7e69b_manual_header.png');
  background-repeat: no-repeat;
  background-size: cover;                      
  padding-left: 15px;
}
body h3{
  color: #577620;
}
body h4{
  color: #577620;
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

ol { list-style-type: none; padding-left: 20px;}
    ol li:before
    {
      counter-increment: mycounter;
      content: counter(mycounter) ".\00A0\00A0";
    }
    ol li
    {
      text-indent: -1.3em;
    }
    ol.start { counter-reset: mycounter; }

.content-section ul{
  list-style-type: disc !important;
  padding-left: 20px;
  margin: 0;
}

`
