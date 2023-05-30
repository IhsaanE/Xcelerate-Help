import css from 'styled-jsx/css'

export const globals = css.global`
* {
  -webkit-font-smoothing: antialiased;
}
::selection {
  background:   #89AB31; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background:   #89AB31; /* Gecko Browsers */
}

/*
* Globals
*/
body {
  padding: 20px;
  color: #72767b;
  font-family: 'Malgun Gothic', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.4;
  line-height: 28px;
}
a {
  color: #72767B;
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.35;
  line-height: 28px;
  text-decoration: none;
}
p a {
  text-decoration: underline;

}
h2, h3, h4, h5, h6 {
  font-family: 'Malgun Gothic', sans-serif;
  display: block;
  margin-top: 15px;
}
h1 {
  font-family: 'Malgun Gothic', Serif; 
  font-size: 60px; 
  font-weight: bold; 
  color: #484D52; 
  line-height: 70px; 
  letter-spacing : 1.14;
  margin-bottom: 1rem;
}
body h2{
  color: white;
  background-image: url('https://images.prismic.io/xcelerate-help-site/81a93fdb-926f-41fa-87ce-89bdc7c7e69b_manual_header.png');
  background-repeat: no-repeat;
  padding-left: 15px;
  margin-top: 0px;
  padding-bottom: 5px;
}
h2, h2 a {
  margin-bottom: 1rem;
  color: #484d52;
  font-size: 32px;
  font-weight: 700;
  letter-spacing : 0.85;
  line-height: 42px;
}
h3, h3 a {
  margin-bottom: 1rem;
  Color: #484d52;
  font-size: 20px;
  font-weight: 400;
  letter-spacing : 0.52;
  line-height: 34px;
}
p {
  margin-bottom: 1rem;
  white-space: pre-wrap !important;
}
pre, ul {
 
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
img {
  max-width: 100%;
}
.container, header, footer {
  max-width: 980px;
  margin-left: max(calc(65% - 640px), 10px);
  margin-top: 0;
  top: 0;
}
.content-section {
  margin-bottom: 0;
}
.quote blockquote {
  quotes: "\201C" "\201D" "\2018" "\2019";
}

@media (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 0rem;
  }
}
`
