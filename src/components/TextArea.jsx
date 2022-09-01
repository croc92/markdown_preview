import { useState } from "react";
// import Markdown from "marked-react";
import { marked } from "marked";

export const TextArea = () => {
  const [text, setText] = useState(
    "# H1" +
      "\n## H2" +
      "\n\nHere is a [link](https://www.hakanayata.com)" +
      "\n\n `<p>inline code</p>`\n" +
      "``` \n console.log('Markdown Preview') \n ``` \n" +
      "\n1. First Item \n2. Second Item \n- Third Item" +
      "\n> what a quote" +
      "\n\n![lamp](https://www.w3schools.com/images/lamp.jpg)" +
      "\nit is **on**" +
      "\n - [x] Markdown Preview Assignment"
  );

  const getMarkdownText = () => {
    let rawText = marked.parse(text);
    return { __html: rawText };
  };

  return (
    <div className="textarea">
      <textarea
        id="editor"
        placeholder="type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      {/* <Markdown id="preview">{text}</Markdown> */}
    </div>
  );
};
