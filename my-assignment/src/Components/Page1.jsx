import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'

const Page1 = () => {
  return (
    <div style={{display:"flex",
    justifyContent:"center"}}>
        <div>
            <div><span>Write, plan, share.<br></br>With AI at your side.</span></div>
            <div><span>Notion is the connected workspace where better, faster work happens.</span></div>
            <div><button>Get Notion Free<ArrowRightOutlined/></button></div>
            <div><img width={"50%"} src='https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png'/></div>
            <div></div>

        </div>
    </div>
  )
}

export default Page1