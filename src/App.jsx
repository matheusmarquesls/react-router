import { RouterProvider } from "react-router-dom"
import { routes } from "./routes.jsx"


function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
  {/* <div className="flex justify-center  items-center h-screen">
     <div className="bg-[#dcdcdc]  rounded-[50px] broder border-l-red 500 text-center border p-8"> 
      <h1>  tailwind é muito legal 
      </h1>
      <span className="text-sm">tailwind usa o conceito de Atomic CSS
      </span>
      <div className="flex justify-center" >
         <img className="w-10 animate-bounce"  src="https://th.bing.com/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?rs=1&pid=ImgDetMain" alt="">
      </img>
      </div>
     </div>
     </div> */}