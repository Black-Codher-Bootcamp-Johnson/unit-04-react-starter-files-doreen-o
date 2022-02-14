# React

## Task 1: Adding React to a Web Page

### Starter Files Task 1 and 2:

```
- session01
    |-- index.html
    |-- index.js
```

### Steps:

- Add a React element to your starter HTML page.
- Follow the steps below to add the React library and a button element to a HTML page.

### 1. Edit the index.html:

- Add the following script tags to the [**index.html**](index.html) file:

```html
<script src="https://unpkg.com/react@latest/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js" crossorigin></script>
<script type="text/javascript" src="index.js"></script>
```

### 2. Edit the index.js:

- Add the following code to the [**index.js**](index.js) file:

```javascript
'use strict';

function ClickButton() {

  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return 'Nothing here yet! Change this text to add more info.';
  }

  return React.createElement(
    'button', {
    style: {
      backgroundColor: "#3392e4",
      color: "#fff",
      border: "0",
      padding: "10px 20px",
      fontWeight: "bold",
      borderRadius: "5px",
      fontSize: "1.1em"
    },
    onClick: () => setClick(true)
  },
    'Click To Reveal'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);
```

### 3. Run the code in a browser

- Open the [**index.html**](index.html) file in a browser to test the code is working.