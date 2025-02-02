import React, { useState } from 'react'
import File_Explorer from './File_Explorer'

const data = [
  {
    type : "folder",
    id : 1,
    name : "src",
    children :[{
      id:2,
      type : "folder",
      name : "src",
      children:[]
    }]
  },
  {
    type : "folder",
    id : 1,
    name : "src",
    children :[{
      id:2,
      type : "folder",
      name : "src",
      children:[]
    }]
  },
  {
    type : "folder",
    id : 1,
    name : "src",
    children :[{
      id:2,
      type : "folder",
      name : "src",
      children:[]
    }]
  }
]
function App() {
  const [file_data,setFileData] = useState(data)
  function handleAddContent(path,file){
    let arr = [...file_data]
    const original = arr
    arr = arr[path[0]]
    for(let i of path.substring(1,path.length)){
      arr = arr.children[i]
      console.log(arr,i)
    }
    arr.children.push(file)
    setFileData(original)
  }

  return (
    <>
     {file_data.map((data,index)=> <File_Explorer key={index} path={String(index)} handleAddContent={handleAddContent} file_data={data}/>)}
    </>
  )
}

export default App
