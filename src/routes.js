import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


// Layout Types
import { DefaultLayout } from "./layouts";
import Test from './layouts/Test/Test'

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Signin from "./views/Signin"
import Chat from "./views/Chat"
import Dialog from "./views/dialog"
import Addproduct from "./views/Addproduct"
import Register from './views/Register'
import Showproduct from './views/Showproduct'
import Notification from './views/Notification'
import Editproduct from './views/editproduct'
import Offer from './views/Offer'


export default [

  <BrowserRouter>
    <Switch>
      <Route path="/detailoffer">
        <DefaultLayout>
          <Notification />
        </DefaultLayout>
      </Route>
      <Route path="/editprofile">
        <DefaultLayout>
          <UserProfileLite />
        </DefaultLayout>
      </Route>
      <Route path="/ex">
        <DefaultLayout>
          <ComponentsOverview />
        </DefaultLayout>
      </Route>
      <Route path="/editproduct">
        <DefaultLayout>
          <Editproduct />
        </DefaultLayout>
      </Route>
      <Route path="/signin">
        <Test>
          <Signin />
        </Test>
      </Route>
      <Route path="/offer/:id">
        <DefaultLayout>
          <Offer />
        </DefaultLayout>
      </Route>
      <Route path="/things/:id">
        <DefaultLayout>
          <Showproduct />
        </DefaultLayout>
      </Route>
      <Route path="/chat/:id">
        <DefaultLayout>
          <Chat />
        </DefaultLayout>
        {/* <Redirect to="chat/:id"/> */}
      </Route>
      <Route path="/register">
        <Test>
          <Register />
        </Test>
      </Route>

      <Route path="/things">
        <DefaultLayout>
          <BlogPosts />
        </DefaultLayout>
      </Route>
      <Route path="/addproduct">
        <DefaultLayout>
          <Addproduct />
        </DefaultLayout>
      </Route>
      <Route path="/chat">
        <DefaultLayout>
          <Chat />
        </DefaultLayout>
      </Route>
      <Route path="/">
        <Redirect to="/things" />
      </Route>
      {/* <Route from="*">
        <Errors />
      </Route> */}
    </Switch>
  </BrowserRouter>
]

// export default [
//   // {
//   //   path :'/404' ,
//   //   layout:Test,
//   //   component: Errors

//   // },
//   // {
//   //   from : '*',
//   //   layout:Test,
//   //   component: () => <Redirect to="/404"/>

//   // },
//   // {
//   //   path: "/",
//   //   exact: true,
//   //   layout: DefaultLayout,
//   //   component: () => <Redirect to="/things" />
//   // },
//   // {
//   //   path: "/editprofile",
//   //   layout: DefaultLayout,
//   //   component: UserProfileLite
//   // },
//   // {
//   //   path: "/add-new-post",
//   //   layout: DefaultLayout,
//   //   component: AddNewPost
//   // },
//   // {
//   //   path: "/ex",
//   //   layout: DefaultLayout,
//   //   component: ComponentsOverview
//   // },
//   // {
//   //   path: "/tables",
//   //   layout: DefaultLayout,
//   //   component: Tables
//   // },
//   // {
//   //   path: "/things",
//   //   layout: DefaultLayout,
//   //   component: BlogPosts
//   // },
//   // {
//   //   path: "/singin",
//   //   layout: Test,
//   //   component: Singin
//   // },
//   // {
//   //   path: "/chat/:id",
//   //   layout: DefaultLayout,
//   //   component: Chat
//   // },
//   //   {
//   //   path: "/chat",
//   //   layout: DefaultLayout,
//   //   component: Chat

//   // },


// ];
