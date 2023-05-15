import React from 'react'


const Navbar = ({markdown , setMarkdown}) => {

    // const items = [
    //     `H1` , `H2` ,`H3`
    // ]
    
  return (
    <nav>
      <div title='Developed by Abhinav' className="logo" onClick={()=>{window.open(`https://abhinavke.dev`)}}>
        Markdown
      </div>
      <div className="items">
        <div className="item">
            <span className="box01">
                Heading
            </span>
            <div className="box02">
                <span onClick={()=>{setMarkdown(markdown + '# H1')}}>
                    H1
                </span>
                <span onClick={()=>{setMarkdown(markdown + '## H2')}}>
                    H1
                </span>
                <span onClick={()=>{setMarkdown(markdown + '### H3')}}>
                    H1
                </span>
            </div>
        </div>

        <div className="item">
            <span className="box01">
                Text
            </span>
            <div className="box02">
                <span onClick={()=>{setMarkdown(markdown + '**Make it bold**')}}>
                    B
                </span>
                <span onClick={()=>{setMarkdown(markdown + '*italic*')}}>
                    <i>I</i>
                </span>
                <span onClick={()=>{setMarkdown(markdown + '	I need to highlight these ==very important words==.')}}>
                    {`H`}
                </span>
                <span onClick={()=>{setMarkdown(markdown + '> blockquote')}}>
                    Quote
                </span>
            </div>
        </div>

        <div className="item">
            <span className="box01">
                Lists
            </span>
            <div className="box02">
                <span onClick={()=>{setMarkdown(markdown + '1. First item')}}>
                    {`Number`}
                </span>
                <span onClick={()=>{setMarkdown(markdown + '- First item')}}>
                    Points
                </span>
            </div>
        </div>

        <div className="item">
            <span className="box01">
                Line
            </span>
            <div className="box02">
                <span onClick={()=>{setMarkdown(markdown + '---')}}>
                    {`draw`}
                </span>
            </div>
        </div>

        <div className="item">
            <span className="box01">
                More
            </span>
            <div className="box02">
                <span onClick={()=>{setMarkdown(markdown + '[title](https://www.example.com)')}}>
                    {`Link`}
                </span>
                <span onClick={()=>{setMarkdown(markdown + '![alt text](image.jpg)')}}>
                    {`Image`}
                </span>
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
