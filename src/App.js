import logo from './logo.svg';
import './App.css';
import MyEditor from './texteditor';
import DisplayContent from './displayContent';
import MyComponent from './react-spring/React-Animey';
import Gridcss from './react-spring/grid/Gridcss';
import VoiceRecognition from './VoiceRecognition';
import Navbar from './website/navbar';
import Fullcardone from './website/Fullcardone';
import Cardgroup from './website/Cardgroup';
import Accordians from './website/Accordians';
import SessionOnecard from './website/sessionOnecard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './crudopp/Home';
import Create from './crudopp/Create';
import Update from './crudopp/Update';
import Read from './crudopp/Read';



function App() {
  return (
   <div>
      <MyEditor/>
      <DisplayContent/>
      <MyComponent />
      <Gridcss />
      {/* <VoiceRecognition /> */}

      {/* Website */}
      {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}

      {/* <div className='animate__animated '>     
         <Navbar />
      </div>
      <div className='mt-5 mb-5 animate__animated  animate__pulse animate__flipInX animate__hinge animate__delay-2s'>     
         <SessionOnecard />
      </div>
      <div className='mt-5 mb-5 animate__animated animate__bounce'>     
         <Cardgroup />
      </div>
      <div className='mt-5 mb-5 d-flex justify-content-start p-5 w-50'>   
         <Accordians />
        
      </div>
      <div className='d-flex justify-content-end w-50 animate__animated  animate__pulse animate__flipInX'> <Accordians /></div>
      <Fullcardone /> */}

<BrowserRouter>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/create' element={<Create />}></Route>
<Route path='/update/:id' element={<Update />}></Route>
<Route path='/read/:id' element={<Read />}></Route>

</Routes>
</BrowserRouter>

</div>
   
  )
}

export default App;
