import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { AppLayout } from './layout/AppLayout';
import { ErrorPage } from './components/ErrorPage';
import Home from './components/Home';
import "./App.css";

const router = createBrowserRouter([{
  path: "/", element: <AppLayout />, errorElement: <ErrorPage />,
  children: [
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'technologies', element: <Technologies /> },
    { path: 'projects', element: <Projects /> },
    { path: 'education', element: <Education /> },
    { path: 'contact', element: <Contact /> },
  ]
}]);

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slectio:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      </div>

    {/* // <div class="relative h-full w-full bg-slate-950">
    //   <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    //   <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
    //   </div></div> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}