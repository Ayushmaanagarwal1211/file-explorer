import React, { use, useState } from 'react'
import {FaFolder,FaFile} from 'react-icons/fa6'
export default function File_Explorer({path,file_data,handleAddContent}) {
    const [showInput,setShowInput] = useState("")
    const [name,setName] = useState("")
    const [showChilds,setShowChilds] = useState(false)

    function handleSubmit(){
        const file = {
            name,type : showInput,children:[]
        }
        reset()
       return  handleAddContent(path,file)
    }

    function reset(){
        setName('')
        setShowInput('')
    }

    function handleUpload(e){
        e.stopPropagation()
        setShowInput(e.target.name)
    }
    console.log("RENDERING",path)
  return (

          <div className='h-[auto] w-auto my-2'>
            <div  onClick={()=>setShowChilds(!showChilds)} className='flex gap-[10px]'>
                <h1 className='flex gap-2'>{file_data.type=="folder"?<FaFolder color='#d59b02' size={'1.5rem'}/>:<FaFile color='#d59b02' size={'1.5rem'}/>}{file_data.name}</h1>
          {file_data.type == "folder" && <>  <button className='border-[1px] border-black px-3 py-1' name='folder' onClick={handleUpload}>+ Folder</button>
            <button className='border-[1px] border-black px-3 py-1' name='file'  onClick={handleUpload}>+ File</button></>}
                </div>
                <div className='h-auto ml-10'>
                {
                  file_data.children && showChilds &&  file_data.children.map((d,index)=><File_Explorer key={path+index} handleAddContent={handleAddContent} path={path + index} file_data={d}/>) 
                }
                </div>
                {
                    showInput && <><input className='border-[1px] p-2 border-black' value={name} onChange={(e)=>setName(e.target.value)} ></input><button onClick={()=>handleSubmit()}>Submit</button></>
                }
        </div>
  )
}
