import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  
};

:root {
  --toastify-color-info: #3498db;
  --toastify-color-success: #618c03;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-toast-width: 350px;
  --toastify-font-family: inherit;

  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #f4e9c9;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

}

body {
  margin: 0;
  padding:0;
  font-family: 'Architects Daughter', sans-serif;
  font-size: 112.5%;
  background-image: linear-gradient( #D97904 0%, #F2B705 100%);
  background-attachment: fixed;
  
}

h1, h2, h3, h4, h5, h6 {
  padding: 0px;
  margin: 0px;
}

input, label, textarea {
  font-size: 1em
}

button {
  font-size: 1em;
  border: none;
  background: transparent;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

}`;
