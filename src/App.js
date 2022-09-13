import logo from './logo.svg';
import './App.css';
import Component1 from "./Component1.js"
// import { useState } from 'react';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
// import { Modal } from '@mui/material';
// import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
// import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
// import TitleIcon from '@mui/icons-material/Title';
// import LinkIcon from '@mui/icons-material/Link';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
// import SocialDistanceIcon from '@mui/icons-material/SocialDistance';

function App() {
  // const [open , setOpen] = useState(false);
  return (
    <div className="App">
       <Component1/>
      {/* <h1 className="title">
        What is Lorem Ipsum?
      </h1>
      <div className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div className='fixed'>
        <i onClick={()=>setOpen(true)}><AccessibilityNewIcon sx={{fontSize: '40px'}} /></i>
      </div> 

      <Modal
        open={open}
        onClose={()=>setOpen(false)}
      >
        <div className='modal controls'>

          <div className='cdiv-main'>
            <div className='cdiv-1'>
                <i><ZoomOutMapIcon /></i>
                <span>Content Scaling</span>
            </div>
            <div className='cdiv-2'>
                <i><FormatColorTextIcon /></i>
                <span>Readable Font</span>
            </div>
          </div>
          <div className='cdiv-main'>
            <div className='cdiv-1 cdiv-11'>
              <div>
                <i><TitleIcon /></i>
                <span>Highlight Title</span>
              </div>
              <div>
                <i><LinkIcon /></i>
                <span>Heighlight Links</span>
              </div>
            </div>
            <div className='cdiv-2'>
              <i><ZoomInIcon /></i>
              <span>Text Magnifier</span>
            </div>
          </div>
          <div className='cdiv-main'>
            <div className='cdiv-1'>
              <i><SortByAlphaIcon /></i>
              <span>Adjust Font Size</span>
            </div>
            <div className='cdiv-2'>
              <i><FormatAlignCenterIcon /></i>
              <span>Align Center</span>
            </div>
          </div>
          <div className='cdiv-main'>
            <div className='cdiv-1'>
              <i><FormatLineSpacingIcon /></i>
              <span>Adjust Line Height</span>
            </div>
            <div className='cdiv-2'>
              <i><FormatAlignRightIcon /></i>
              <span>Align Right</span>
            </div>
          </div>
          <div className='cdiv-main'>
            <div className='cdiv-1'>
              <i><SocialDistanceIcon /></i>
              <span>Letter Spacing</span>
            </div>
            <div className='cdiv-2'>
              <i><FormatAlignLeftIcon /></i>
              <span>Align Left</span>
            </div>
          </div>

        </div> 
      </Modal> */}
    </div>
  )
}

export default App;
