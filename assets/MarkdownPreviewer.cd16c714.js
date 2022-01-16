import{x as t,u as r,v as o}from"./vendor.e28c4fbf.js";const a=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;t.setOptions({breaks:!0,gfm:!0});function u(){const[n,i]=r.exports.useState(a),[d,l]=r.exports.useState(t(a,new t.Renderer));function s(e){i(e),e&&l(t(e,new t.Renderer))}return r.exports.useEffect(()=>{s()},[]),o.exports.jsxs("div",{className:"container mx-auto flex p-2 bg-gray-700 text-center w-full min-h-full justify-center rounded",children:[o.exports.jsx("textarea",{value:n,onChange:e=>s(e.target.value),id:"editor",className:"bg-gray-600 text-gray-100 w-1/2 min-h-100 p-2 rounded border-solid border-2 border-gray-800","aria-label":"Markdown Input Box"}),o.exports.jsx("div",{dangerouslySetInnerHTML:{__html:d},id:"preview",className:"prose min-h-100 p-2 w-1/2 rounded text-left bg-gray-100 border-solid border-2 border-blue-800"})]})}export{u as default};
