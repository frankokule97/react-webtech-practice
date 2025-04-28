import React from 'react';
import ReactDOM from 'react-dom/client';
// import ClassComponent from "./ClassComponent";
// import App from "./App";
// import HeaderComponent from "./HeaderComponent";
// import NavComponent from "./NavComponent";
// import MainComponent from "./MainComponent";
// import FooterComponent from "./FooterComponent";
// import App from "./App";
// import IncrementStateComponent from "./IncrementStateComponent";
import ButtonFn from "./ButtonFn";

let el = document.getElementById('root');
const root = ReactDOM.createRoot(el);



// we use fragments because we have to wrap more elements, JSX rule that we must return one element that is single one or wrapping others, so we use <></>

root.render(
    <>
        {/*<HeaderComponent/>
        <NavComponent />
        <MainComponent />
        <FooterComponent />
        <App />
        <IncrementStateComponent />*/}
        <ButtonFn />
    </>
);

// let myEl = React.createElement("h1", null, "Welcome to WebTechTalk");
// root.rented(myEl);