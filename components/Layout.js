import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import GlobalStyles from "./Global";
import Section from "./Section";
import HomePage from "./Homepage";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Meta from "./Meta";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
const FullpageWrapper = () => (
  <ReactFullpage
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Section>
            <HomePage />
          </Section>
          <Section>
            <div class="slide" data-anchor="slide1">
              Two 1
            </div>
            <div class="slide" data-anchor="slide1">
              Two 1
            </div>
          </Section>
          <Section>
            <h1>Third Page</h1>
          </Section>
        </div>
      );
    }}
  />
);

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Meta />
        <GlobalStyles />
        <FullpageWrapper />
      </React.Fragment>
    </ThemeProvider>
  );
};
export default Layout;
