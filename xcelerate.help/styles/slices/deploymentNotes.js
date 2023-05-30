import css from 'styled-jsx/css'

export const deploymentNotesStyles = css.global`
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
.depdiv{
  white-space: normal !important;
  overflow: hidden !important;
}
.deplist-enter {
  max-height: 0px !important;
}
.deplist-enter-active {
  max-height: 100px !important; 
  transition: all 300ms ease-in;
}
.deplist-exit {
  max-height: 100px !important;
}
.deplist-exit-active {
  max-height: 0px !important;
  transition: all 300ms ease-out;
}
body h2{
  color: white;
  background-image: url('https://images.prismic.io/xcelerate-help-site/81a93fdb-926f-41fa-87ce-89bdc7c7e69b_manual_header.png');
  background-repeat: no-repeat;
  padding-left: 15px;
}
body h3{
  color: #577620;
  width: relative;
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


`
