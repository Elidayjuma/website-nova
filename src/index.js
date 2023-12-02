import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import HomePage from "./greenlandPages/homePage";
import ErrorPage from './greenlandPages/errorPage';
import AboutUsPage from './greenlandPages/aboutUs';
import TrainingPage from './greenlandPages/training';
import CommunityActivitiesPage from './greenlandPages/communityActivities';
import BlackImmigrantVoicesPage from './greenlandPages/blackImmigrantVoices';
import AwardsPage from './greenlandPages/awards';
import ActionForumsPage from './greenlandPages/actionForums';
import SupportServicesPage from './greenlandPages/supportServices';
import AdvocacyPage from './greenlandPages/advocacy';
import GetInvolvedPage from './greenlandPages/getInvolved';
import HireUsPage from './greenlandPages/hireUs';
import ContactUsPage from './greenlandPages/contact';
import EventsPage from './greenlandPages/events';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
  },
  {
    path: "/training",
    element: <TrainingPage/>
  },
  {
    path: "/community-activities",
    element: <CommunityActivitiesPage/>
  },
  {
    path: "/black-immigrant-voices",
    element: <BlackImmigrantVoicesPage/>
  },
  {
    path: "/awards",
    element: <AwardsPage/>
  },
  {
    path: "/action-forums",
    element: <ActionForumsPage/>
  },
  {
    path: "/support-services",
    element: <SupportServicesPage/>
  },
  {
    path: "/advocacy",
    element: <AdvocacyPage/>
  },
  {
    path: "/get-involved",
    element: <GetInvolvedPage/>
  },
  {
    path: "/hire-us",
    element: <HireUsPage/>
  },
  {
    path: "/contact-us",
    element: <ContactUsPage/>
  },
  {
    path: "/events",
    element: <EventsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


