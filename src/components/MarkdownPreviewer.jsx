import { useState, useEffect } from "react";
import { marked } from "marked";

const placeholder = `# Welcome to my React Markdown Previewer!

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
`;

export default function Quotes() {
  const [markdownInput, setMarkdownInput] = useState(placeholder);
  const [preview, setPreview] = useState("");
  const updatePreview = async () => {
    setPreview(marked(markdownInput, new marked.Renderer()));
    console.log(preview);
  };
  useEffect(() => {
    updatePreview();
  }, []);

  return (
    <div className="container mx-auto grid grid-rows-1 grid-cols-2 p-2 bg-gray-700 text-center w-full min-h-full justify-center rounded shadow-xl">
      <textarea
        value={markdownInput}
        onChange={(e) => setMarkdownInput(e.target.value)}
        id="editor"
        className="bg-gray-100 text-gray-600 min-h-100 p-2 rounded"
      >
      </textarea>
      <div
        dangerouslySetInnerHTML={{__html: preview}}
        id="preview"
        className="markdown bg-gray-600 text-gray-100 min-h-100 p-2 rounded text-left"
      ></div>
    </div>
  );
}
