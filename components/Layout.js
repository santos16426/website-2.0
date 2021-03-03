import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import GlobalStyles from "./Global";
import Section from "./Section";
import HomePage from "./Homepage";
import ProjectPage from "./Projectpage";
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
    scrollingSpeed={500} /* Options here */
    sectionsColor={["#282c34", "#00000", "#282c34"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Section>
            <HomePage fullpageApi={fullpageApi} />
          </Section>
          <Section>
            <ProjectPage />
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
