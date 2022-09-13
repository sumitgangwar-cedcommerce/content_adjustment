import React ,{useState} from 'react'
import "./Component1.css"
import {data} from "./Data"
import Drawer from '@mui/material/Drawer';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import TextIncreaseOutlinedIcon from '@mui/icons-material/TextIncreaseOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import SpaceBarOutlinedIcon from '@mui/icons-material/SpaceBarOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';






export default function Component1() {
    const[flag ,setFlag]=useState(false)
    const[zoom , setZoom]=useState(1)
    const[readablefonts1 , setReadablefonts1]=useState(false)
    const[txtdecor ,setTxtdecor]=useState(false)
    const[highlighttitles,setHighlighttitles]=useState(false)
    const[alignc,setAlignc]=useState(false)
    const[alignl,setAlignl]=useState(false)
    const[alignr,setAlignr]=useState(false)
    const[fs,setFs]=useState(1.5)
    const[lh,setLh]=useState(15)
    const[ls,setLs]=useState(2)
    const[selected,setSelected]=useState(false)
    const[selectedcontent,setSelectedcontent]=useState('')
  


    const styleinnerdiv={
        zoom: zoom,
        letterSpacing:readablefonts1?ls+"px":'',  
        textAlign:alignc?'center':alignl?'left':alignr?'right':'',
        fontSize:fs+"vw" ,
        lineHeight:lh +"px"
    } 
    const highlighttitlemodule={
        border:highlighttitles?'1px solid black':'none'
    }
    const textdecormodule={
        textDecoration:'none',
        color:txtdecor ? 'white':'black',
        backgroundColor:txtdecor?'orangered':'white'
    }

    const textalign_fun=(d)=>{
        setAlignc(false)
        setAlignl(false)
        setAlignr(false)
        if(d===1){
            setAlignc(true)
        }
        if(d===2){
            setAlignl(true)
        }
        if(d===3){
            setAlignr(true)
        }
    }

    const changefs=(d)=>{
        if(d===1){
           setFs(fs - 0.2)
        }
        if(d===2){
            setFs(fs + 0.2)
        }
    }

    const changelh=(d)=>{
        if(d===1){
           setLh(lh - 2)
        }
        if(d===2){
            setLh(lh + 2)
        }
    }
    const changels=(d)=>{
        setReadablefonts1(true)
        if(d===1){
           setLs(ls - 1)
        }
        if(d===2){
            setLs(ls + 1)
        }
    }
    const zoomfun=(d)=>{
        if(d===1){
           setZoom(zoom - 0.1)
        }
        if(d===2){
            setZoom(zoom + 0.1)
        }
    }
    const readablefonts_fun=()=>{
        setReadablefonts1(!readablefonts1)
        setLs(2)
    }

    const textmagni_fun=()=>{
        document.getElementById('hidden_div').style.display='none'
        setSelected(!selected)
    }
    const fun1=(e)=>{
       if(selected){
        document.getElementById('hidden_div').style.display='block'
         if(e.target.nodeName==='DIV' || e.target.nodeName==='P' ){
           setSelectedcontent(e.target.textContent) 
         } 
        }  
    }
    
    // const my = (
    //     <h1>Hello</h1>
    // )

    // console.log(my)

   
  return (
    <div id="component1_main_div_id">
         <div id="hidden_div">{selectedcontent}</div>
        <div id="component1_inner_div_id" style={styleinnerdiv} onMouseOver={fun1}>
        <button id="tool_btn_id" onClick={()=>setFlag(true)}><AccessibilityNewIcon/></button>
        {data.map((d)=>{
            return(<div id="repetitive_div_id">
                <p id="title_p_id" style={highlighttitlemodule}>Title:{d.title}</p>
                <p id="content_p_id" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p id="anchor_p_id"><a href="facebook.com" style={textdecormodule}>Click here</a></p>
                </div>
            )
        })}
       
        <Drawer
            anchor='right'
            open={flag}
            onClose={()=>setFlag(false)}
          >
            <div id="drawer_main_div_id">
                {console.log(document.getElementById('repetitive_div_id'))}
                <p id='conP'>Content Adjustment <span onClick={()=>setFlag(false)}>X</span> </p>
                <div id="drawer1">
                    <div id="drawer11">
                    <p id="drawer11_p1_id"><FitScreenIcon/><span>Content Scaling</span></p>
                    <p id="drawer11_p2_id"><i class="fa-solid fa-circle-arrow-down contentzoomclass" onClick={()=>zoomfun(1)}></i> <span onClick={()=>setZoom(1)} style={{cursor:'pointer'}}>Default</span> <i class="fa-solid fa-circle-arrow-up contentzoomclass" onClick={()=>zoomfun(2)}></i></p>
                    </div>
                    <div id="drawer12" onClick={readablefonts_fun}>
                        <p id="drawer12_p1_id"><TextIncreaseOutlinedIcon/></p>
                        <p id="drawer12_p2_id">Readable fonts</p>
                    </div>
                </div>
                <div id="drawer2">
                    <div id="drawer21_div_id" onClick={()=>setHighlighttitles(!highlighttitles)}><p className="p21_id"><TitleOutlinedIcon/></p><p>Highlight titles</p></div>
                    <div id="drawer22_div_id"  onClick={()=>setTxtdecor(!txtdecor)}><p className="p21_id"><InsertLinkOutlinedIcon/></p><p>Highlight links</p></div>
                    <div id="drawer23_div_id" onClick={textmagni_fun}><p className="p21_id"><ZoomInOutlinedIcon/></p><p>Text magnifier</p></div>
                </div>
                <div id="drawer3">
                    <div id="drawer11">
                    <p id="drawer11_p1_id"><FormatSizeOutlinedIcon/><span>Adjust Font Sizing</span></p>
                    <p id="drawer11_p2_id"><i class="fa-solid fa-circle-arrow-down contentzoomclass" onClick={()=>changefs(1)}></i> <span onClick={()=>setFs(1.5)} style={{cursor:'pointer'}}>Default</span><i class="fa-solid fa-circle-arrow-up contentzoomclass" onClick={()=>changefs(2)}></i></p>
                    </div>
                    <div id="drawer12" onClick={()=>textalign_fun(1)}>
                        <p id="drawer12_p1_id"><FormatAlignCenterOutlinedIcon/></p>
                        <p id="drawer12_p2_id">Align Center</p>
                    </div>
                </div>
                <div id="drawer4">
                    <div id="drawer11">
                    <p id="drawer11_p1_id"><HeightOutlinedIcon/><span>Adjust Line Height</span></p>
                    <p id="drawer11_p2_id"><i class="fa-solid fa-circle-arrow-down contentzoomclass" onClick={()=>changelh(1)}></i> <span onClick={()=>setLh(15)} style={{cursor:'pointer'}}>Default</span> <i class="fa-solid fa-circle-arrow-up contentzoomclass" onClick={()=>changelh(2)}></i></p>
                    </div>
                    <div id="drawer12" onClick={()=>textalign_fun(2)}>
                        <p id="drawer12_p1_id"><FormatAlignLeftOutlinedIcon/></p>
                        <p id="drawer12_p2_id">Align Left</p>
                    </div>
                </div>
                <div id="drawer5">
                    <div id="drawer11">
                    <p id="drawer11_p1_id"><SpaceBarOutlinedIcon/><span>Adjust Letter Spacing</span></p>
                    <p id="drawer11_p2_id"><i class="fa-solid fa-circle-arrow-down contentzoomclass" onClick={()=>changels(1)}></i> <span onClick={()=>setLs(2)} style={{cursor:'pointer'}}>Default</span> <i class="fa-solid fa-circle-arrow-up contentzoomclass" onClick={()=>changels(2)}></i></p>
                    </div>
                    <div id="drawer12" onClick={()=>textalign_fun(3)}>
                        <p id="drawer12_p1_id"><FormatAlignRightOutlinedIcon/></p>
                        <p id="drawer12_p2_id">Align Right</p>
                    </div>
                </div>
            </div>
       
          </Drawer>
          </div>
    </div>
  )
}