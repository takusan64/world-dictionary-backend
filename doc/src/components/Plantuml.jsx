import React from 'react'

const Plantuml = () => {
  return (
    <>
      <title>plantuml</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      /**\n * prism.js Github theme based on GitHub\'s theme.\n * @author Sam Clarke\n */\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #333;\n  background: none;\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.4;\n\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n  tab-size: 8;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n  padding: .8em;\n  overflow: auto;\n  /* border: 1px solid #ddd; */\n  border-radius: 3px;\n  /* background: #fff; */\n  background: #f5f5f5;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal;\n  background: #f5f5f5;\n}\n\n.token.comment,\n.token.blockquote {\n  color: #969896;\n}\n\n.token.cdata {\n  color: #183691;\n}\n\n.token.doctype,\n.token.punctuation,\n.token.variable,\n.token.macro.property {\n  color: #333;\n}\n\n.token.operator,\n.token.important,\n.token.keyword,\n.token.rule,\n.token.builtin {\n  color: #a71d5d;\n}\n\n.token.string,\n.token.url,\n.token.regex,\n.token.attr-value {\n  color: #183691;\n}\n\n.token.property,\n.token.number,\n.token.boolean,\n.token.entity,\n.token.atrule,\n.token.constant,\n.token.symbol,\n.token.command,\n.token.code {\n  color: #0086b3;\n}\n\n.token.tag,\n.token.selector,\n.token.prolog {\n  color: #63a35c;\n}\n\n.token.function,\n.token.namespace,\n.token.pseudo-element,\n.token.class,\n.token.class-name,\n.token.pseudo-class,\n.token.id,\n.token.url-reference .token.variable,\n.token.attr-name {\n  color: #795da3;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.title,\n.token.title .token.punctuation {\n  font-weight: bold;\n  color: #1d3e81;\n}\n\n.token.list {\n  color: #ed6a43;\n}\n\n.token.inserted {\n  background-color: #eaffea;\n  color: #55a532;\n}\n\n.token.deleted {\n  background-color: #ffecec;\n  color: #bd2c00;\n}\n\n.token.bold {\n  font-weight: bold;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n\n/* JSON */\n.language-json .token.property {\n  color: #183691;\n}\n\n.language-markup .token.tag .token.punctuation {\n  color: #333;\n}\n\n/* CSS */\ncode.language-css,\n.language-css .token.function {\n  color: #0086b3;\n}\n\n/* YAML */\n.language-yaml .token.atrule {\n  color: #63a35c;\n}\n\ncode.language-yaml {\n  color: #183691;\n}\n\n/* Ruby */\n.language-ruby .token.function {\n  color: #333;\n}\n\n/* Markdown */\n.language-markdown .token.url {\n  color: #795da3;\n}\n\n/* Makefile */\n.language-makefile .token.symbol {\n  color: #795da3;\n}\n\n.language-makefile .token.variable {\n  color: #183691;\n}\n\n.language-makefile .token.builtin {\n  color: #0086b3;\n}\n\n/* Bash */\n.language-bash .token.keyword {\n  color: #0086b3;\n}\n\n/* highlight */\npre[data-line] {\n  position: relative;\n  padding: 1em 0 1em 3em;\n}\npre[data-line] .line-highlight-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  display: block;\n  width: 100%;\n}\n\npre[data-line] .line-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: inherit 0;\n  margin-top: 1em;\n  background: hsla(24, 20%, 50%,.08);\n  background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n  pointer-events: none;\n  line-height: inherit;\n  white-space: pre;\n}\n\npre[data-line] .line-highlight:before, \npre[data-line] .line-highlight[data-end]:after {\n  content: attr(data-start);\n  position: absolute;\n  top: .4em;\n  left: .6em;\n  min-width: 1em;\n  padding: 0 .5em;\n  background-color: hsla(24, 20%, 50%,.4);\n  color: hsl(24, 20%, 95%);\n  font: bold 65%/1.5 sans-serif;\n  text-align: center;\n  vertical-align: .3em;\n  border-radius: 999px;\n  text-shadow: none;\n  box-shadow: 0 1px white;\n}\n\npre[data-line] .line-highlight[data-end]:after {\n  content: attr(data-end);\n  top: auto;\n  bottom: .4em;\n}html body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}html body>:first-child{margin-top:0}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}html body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}html body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}html body h3{font-size:1.5em;font-weight:500}html body h4{font-size:1.25em;font-weight:600}html body h5{font-size:1.1em;font-weight:600}html body h6{font-size:1em;font-weight:600}html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:600}html body h5{font-size:1em}html body h6{color:#5c5c5c}html body strong{color:#000}html body del{color:#5c5c5c}html body a:not([href]){color:inherit;text-decoration:none}html body a{color:#08c;text-decoration:none}html body a:hover{color:#00a3f5;text-decoration:none}html body img{max-width:100%}html body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}html body>ul,html body>ol{margin-bottom:16px}html body ul,html body ol{padding-left:2em}html body ul.no-list,html body ol.no-list{padding:0;list-style-type:none}html body ul ul,html body ul ol,html body ol ol,html body ol ul{margin-top:0;margin-bottom:0}html body li{margin-bottom:0}html body li.task-list-item{list-style:none}html body li>p{margin-top:0;margin-bottom:0}html body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}html body .task-list-item-checkbox:hover{cursor:pointer}html body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;background-color:#f0f0f0;border-left:4px solid #d6d6d6}html body blockquote>:first-child{margin-top:0}html body blockquote>:last-child{margin-bottom:0}html body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}html body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}html body table th{font-weight:bold;color:#000}html body table td,html body table th{border:1px solid #d6d6d6;padding:6px 13px}html body dl{padding:0}html body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:bold}html body dl dd{padding:0 16px;margin-bottom:16px}html body code{font-family:Menlo,Monaco,Consolas,\'Courier New\',monospace;font-size:.85em !important;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}html body code::before,html body code::after{letter-spacing:-0.2em;content:"\\00a0"}html body pre>code{padding:0;margin:0;font-size:.85em !important;word-break:normal;white-space:pre;background:transparent;border:0}html body .highlight{margin-bottom:16px}html body .highlight pre,html body pre{padding:1em;overflow:auto;font-size:.85em !important;line-height:1.45;border:#d6d6d6;border-radius:3px}html body .highlight pre{margin-bottom:0;word-break:normal}html body pre code,html body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}html body pre code:before,html body pre tt:before,html body pre code:after,html body pre tt:after{content:normal}html body p,html body blockquote,html body ul,html body ol,html body dl,html body pre{margin-top:0;margin-bottom:16px}html body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}@media print{html body{background-color:#fff}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{color:#000;page-break-after:avoid}html body blockquote{color:#5c5c5c}html body pre{page-break-inside:avoid}html body table{display:table}html body img{display:block;max-width:100%;max-height:100%}html body pre,html body code{word-wrap:break-word;white-space:pre}}.markdown-preview{width:100%;height:100%;box-sizing:border-box}.markdown-preview .pagebreak,.markdown-preview .newpage{page-break-before:always}.markdown-preview pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}.markdown-preview pre.line-numbers>code{position:relative}.markdown-preview pre.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:1em;font-size:100%;left:0;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-preview pre.line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.markdown-preview pre.line-numbers .line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.markdown-preview .mathjax-exps .MathJax_Display{text-align:center !important}.markdown-preview:not([for="preview"]) .code-chunk .btn-group{display:none}.markdown-preview:not([for="preview"]) .code-chunk .status{display:none}.markdown-preview:not([for="preview"]) .code-chunk .output-div{margin-bottom:16px}.scrollbar-style::-webkit-scrollbar{width:8px}.scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode]){position:relative;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow:auto}html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{position:relative;top:0}@media screen and (min-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em calc(50% - 457px + 2em)}}@media screen and (max-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{font-size:14px !important;padding:1em}}@media print{html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{display:none}}html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{position:fixed;bottom:8px;left:8px;font-size:28px;cursor:pointer;color:inherit;z-index:99;width:32px;text-align:center;opacity:.4}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] #sidebar-toc-btn{opacity:1}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc{position:fixed;top:0;left:0;width:300px;height:100%;padding:32px 0 48px 0;font-size:14px;box-shadow:0 0 4px rgba(150,150,150,0.33);box-sizing:border-box;overflow:auto;background-color:inherit}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar{width:8px}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc a{text-decoration:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{padding:0 1.6em;margin-top:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc li{margin-bottom:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{list-style-type:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{left:300px;width:calc(100% -  300px);padding:2em calc(50% - 457px -  150px);margin:0;box-sizing:border-box}@media screen and (max-width:1274px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{width:100%}}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .markdown-preview{left:50%;transform:translateX(-50%)}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .md-sidebar-toc{display:none}\n/* Please visit the URL below for more information: */\n/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */\n\n      '
        }}
      />
      <div className="mume markdown-preview  ">
        <p>
          [<strong>JA Lang Table</strong>]
        </p>
        <p>
          {/*?xml version="1.0" encoding="UTF-8" standalone="no"?*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            contentScriptType="application/ecmascript"
            contentStyleType="text/css"
            height="343px"
            preserveAspectRatio="none"
            style={{ width: 484, height: 343, background: "#FFFFFF" }}
            version="1.1"
            viewBox="0 0 484 343"
            width="484px"
            zoomAndPan="magnify"
          >
            <defs>
              <filter height="300%" id="f1c251lsfb0sax" width="300%" x={-1} y={-1}>
                <feGaussianBlur result="blurOut" stdDeviation={2.0} />
                <feColorMatrix
                  in="blurOut"
                  result="blurOut2"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0"
                />
                <feOffset dx={4.0} dy={4.0} in="blurOut2" result="blurOut3" />
                <feBlend in="SourceGraphic" in2="blurOut3" mode="normal" />
              </filter>
            </defs>
            <g>
              {/*MD5=[05235c0dbfcc271e5bba7d1b222537f4]
class e01_ja*/}
              <rect
                codeline={8}
                fill="#FEFECE"
                filter="url(#f1c251lsfb0sax)"
                height="137.9453"
                id="e01_ja"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={219}
                x="109.5"
                y={7}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={61}
                x="188.5"
                y="24.457"
              >
                countris_ja
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1="110.5"
                x2="327.5"
                y1="32.0938"
                y2="32.0938"
              />
              <ellipse
                cx="120.5"
                cy="43.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={14}
                x="129.5"
                y="47.5127"
              >
                id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x="146.5"
                y="47.5127"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={25}
                x="180.5"
                y="47.5127"
              >
                [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="110.5"
                x2="327.5"
                y1="53.9297"
                y2="53.9297"
              />
              <rect
                fill="none"
                height={6}
                style={{ stroke: "#C82930", strokeWidth: 1.0 }}
                width={6}
                x="117.5"
                y="61.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={91}
                x="129.5"
                y="69.3486"
              >
                country_group_id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x="223.5"
                y="69.3486"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={65}
                x="257.5"
                y="69.3486"
              >
                [ FK, NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={30}
                x="129.5"
                y="83.1846"
              >
                code :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={55}
                x="162.5"
                y="83.1846"
              >
                varchar(2)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="220.5"
                y="83.1846"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={32}
                x="129.5"
                y="97.0205"
              >
                name :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={61}
                x="164.5"
                y="97.0205"
              >
                varchar(64)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x="228.5"
                y="97.0205"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={28}
                x="129.5"
                y="110.8564"
              >
                label :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={61}
                x="160.5"
                y="110.8564"
              >
                varchar(64)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x="224.5"
                y="110.8564"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x="129.5"
                y="124.6924"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x="190.5"
                y="124.6924"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="253.5"
                y="124.6924"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x="129.5"
                y="138.5283"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x="192.5"
                y="138.5283"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="255.5"
                y="138.5283"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[a33c37f103b40740c8cee953e0179d9e]
class e02_ja*/}
              <rect
                codeline={19}
                fill="#FEFECE"
                filter="url(#f1c251lsfb0sax)"
                height="124.1094"
                id="e02_ja"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={198}
                x={7}
                y={205}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={100}
                x={56}
                y="222.457"
              >
                country_details_ja
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={8}
                x2={204}
                y1="230.0938"
                y2="230.0938"
              />
              <ellipse
                cx={18}
                cy="241.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={14}
                x={27}
                y="245.5127"
              >
                id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x={44}
                y="245.5127"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={25}
                x={78}
                y="245.5127"
              >
                [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={8}
                x2={204}
                y1="251.9297"
                y2="251.9297"
              />
              <rect
                fill="none"
                height={6}
                style={{ stroke: "#C82930", strokeWidth: 1.0 }}
                width={6}
                x={15}
                y="259.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={57}
                x={27}
                y="267.3486"
              >
                country_id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x={87}
                y="267.3486"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={65}
                x={121}
                y="267.3486"
              >
                [ FK, NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={52}
                x={27}
                y="281.1846"
              >
                overview :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={21}
                x={82}
                y="281.1846"
              >
                text
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x={106}
                y="281.1846"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={31}
                x={27}
                y="295.0205"
              >
                other :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={21}
                x={61}
                y="295.0205"
              >
                text
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x={27}
                y="308.8564"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={88}
                y="308.8564"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={151}
                y="308.8564"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x={27}
                y="322.6924"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={90}
                y="322.6924"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={153}
                y="322.6924"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[8fa02f41f08630e6f6035ae04556248e]
class e03_ja*/}
              <rect
                codeline={29}
                fill="#FEFECE"
                filter="url(#f1c251lsfb0sax)"
                height="96.4375"
                id="e03_ja"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={184}
                x={240}
                y={219}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={102}
                x={281}
                y="236.457"
              >
                country_groups_ja
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={241}
                x2={423}
                y1="244.0938"
                y2="244.0938"
              />
              <ellipse
                cx={251}
                cy="255.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={71}
                x={260}
                y="259.5127"
              >
                id : serial [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={241}
                x2={423}
                y1="265.9297"
                y2="265.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={28}
                x={246}
                y="281.3486"
              >
                label :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={55}
                x={277}
                y="281.3486"
              >
                varchar(2)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={335}
                y="281.3486"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x={246}
                y="295.1846"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={307}
                y="295.1846"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={370}
                y="295.1846"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x={246}
                y="309.0205"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={309}
                y="309.0205"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={372}
                y="309.0205"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[184be91ca12efbbb94c31a3956b592d5]
class term*/}
              <rect
                codeline={37}
                fill="#FEFECE"
                filter="url(#f1c251lsfb0sax)"
                height="112.4375"
                id="term"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={106}
                x={364}
                y={20}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={25}
                x="404.5"
                y="37.457"
              >
                term
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={365}
                x2={469}
                y1="45.0938"
                y2="45.0938"
              />
              <ellipse
                cx={375}
                cy="56.0938"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={80}
                x={384}
                y="60.5127"
              >
                PK : Primary Key
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="66.9297"
                y2="66.9297"
              />
              <ellipse
                cx={375}
                cy="77.9297"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={78}
                x={384}
                y="82.3486"
              >
                FK : Forefin Key
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="88.7656"
                y2="88.7656"
              />
              <ellipse
                cx={375}
                cy="99.7656"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={59}
                x={384}
                y="104.1846"
              >
                NN : Not Null
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="110.6016"
                y2="110.6016"
              />
              <ellipse
                cx={375}
                cy="121.6016"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={78}
                x={384}
                y="126.0205"
              >
                UK : Unique Key
              </text>
              {/*MD5=[f426c37b312a7ba96b5759fd610230c1]
link e01_ja to e02_ja*/}
              <path
                codeline={47}
                d="M157.25,152.23 C157.25,152.23 157.25,197.98 157.25,197.98 "
                fill="none"
                id="e01_ja-e02_ja"
                style={{
                  stroke: "#A80036",
                  strokeWidth: 1.0,
                  strokeDasharray: "7.0,7.0"
                }}
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="161.25"
                x2="153.25"
                y1="200.98"
                y2="200.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="161.25"
                x2="153.25"
                y1="197.98"
                y2="197.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="157.25"
                x2="157.25"
                y1="196.98"
                y2="204.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="153.25"
                x2="161.25"
                y1="149.23"
                y2="149.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="153.25"
                x2="161.25"
                y1="152.23"
                y2="152.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="157.25"
                x2="157.25"
                y1="153.23"
                y2="145.23"
              />
              {/*MD5=[5d274bf9e85917e5d892fcb40ac8a456]
link e01_ja to e03_ja*/}
              <path
                codeline={48}
                d="M284.25,153.23 C284.25,153.23 284.25,210.92 284.25,210.92 "
                fill="none"
                id="e01_ja-e03_ja"
                style={{
                  stroke: "#A80036",
                  strokeWidth: 1.0,
                  strokeDasharray: "7.0,7.0"
                }}
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="288.25"
                x2="280.25"
                y1="214.92"
                y2="214.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="288.25"
                x2="280.25"
                y1="211.92"
                y2="211.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="284.25"
                y1="210.92"
                y2="218.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="278.25"
                y1="153.23"
                y2="145.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="290.25"
                y1="153.23"
                y2="145.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="284.25"
                y1="153.23"
                y2="145.23"
              />
              <ellipse
                cx="284.25"
                cy="159.23"
                rx={4}
                ry={4}
                style={{ stroke: "#A80036", strokeWidth: 1.0, fill: "none" }}
              />
              {/*MD5=[074862a7b5973c4b6fd380abad39ea4a]
@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "countris_ja" as e01_ja {
  +id : **serial** [ PK ]
  - -
  -country_group_id : **serial** [ FK, NN, UK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_details_ja" as e02_ja {
  +id : **serial** [ PK ]
  - -
  -country_id : **serial** [ FK, NN, UK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_groups_ja" as e03_ja {
  +id : serial [ PK ]
  - -
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "term" as term {
  *PK : Primary Key
  - -
  *FK : Forefin Key
  - -
  *NN : Not Null
  - -
  *UK : Unique Key
}

e01_ja ||..|| e02_ja
e01_ja }o..|| e03_ja
@enduml

@startuml

hide circle

skinparam linetype ortho

entity "countris_ja" as e01_ja {
  +id : **serial** [ PK ]
  - -
  -country_group_id : **serial** [ FK, NN, UK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_details_ja" as e02_ja {
  +id : **serial** [ PK ]
  - -
  -country_id : **serial** [ FK, NN, UK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_groups_ja" as e03_ja {
  +id : serial [ PK ]
  - -
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "term" as term {
  *PK : Primary Key
  - -
  *FK : Forefin Key
  - -
  *NN : Not Null
  - -
  *UK : Unique Key
}

e01_ja ||..|| e02_ja
e01_ja }o..|| e03_ja
@enduml

PlantUML version 1.2021.9(Sun Jul 25 19:13:56 JST 2021)
(GPL source distribution)
Java Runtime: Java(TM) SE Runtime Environment
JVM: Java HotSpot(TM) 64-Bit Server VM
Default Encoding: UTF-8
Language: ja
Country: JP
*/}
            </g>
          </svg>
        </p>
        <p>
          [<strong>EN Lang Table</strong>]
        </p>
        <p>
          {/*?xml version="1.0" encoding="UTF-8" standalone="no"?*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            contentScriptType="application/ecmascript"
            contentStyleType="text/css"
            height="343px"
            preserveAspectRatio="none"
            style={{ width: 484, height: 343, background: "#FFFFFF" }}
            version="1.1"
            viewBox="0 0 484 343"
            width="484px"
            zoomAndPan="magnify"
          >
            <defs>
              <filter height="300%" id="fmi25v2qxjlpr" width="300%" x={-1} y={-1}>
                <feGaussianBlur result="blurOut" stdDeviation={2.0} />
                <feColorMatrix
                  in="blurOut"
                  result="blurOut2"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0"
                />
                <feOffset dx={4.0} dy={4.0} in="blurOut2" result="blurOut3" />
                <feBlend in="SourceGraphic" in2="blurOut3" mode="normal" />
              </filter>
            </defs>
            <g>
              {/*MD5=[5e530e19685feeb99ab81ee28a534389]
class e01_en*/}
              <rect
                codeline={8}
                fill="#FEFECE"
                filter="url(#fmi25v2qxjlpr)"
                height="137.9453"
                id="e01_en"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={219}
                x="109.5"
                y={7}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={65}
                x="186.5"
                y="24.457"
              >
                countris_en
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1="110.5"
                x2="327.5"
                y1="32.0938"
                y2="32.0938"
              />
              <ellipse
                cx="120.5"
                cy="43.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={14}
                x="129.5"
                y="47.5127"
              >
                id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x="146.5"
                y="47.5127"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={25}
                x="180.5"
                y="47.5127"
              >
                [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="110.5"
                x2="327.5"
                y1="53.9297"
                y2="53.9297"
              />
              <rect
                fill="none"
                height={6}
                style={{ stroke: "#C82930", strokeWidth: 1.0 }}
                width={6}
                x="117.5"
                y="61.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={91}
                x="129.5"
                y="69.3486"
              >
                country_group_id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x="223.5"
                y="69.3486"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={65}
                x="257.5"
                y="69.3486"
              >
                [ FK, NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={30}
                x="129.5"
                y="83.1846"
              >
                code :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={55}
                x="162.5"
                y="83.1846"
              >
                varchar(2)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="220.5"
                y="83.1846"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={32}
                x="129.5"
                y="97.0205"
              >
                name :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={61}
                x="164.5"
                y="97.0205"
              >
                varchar(64)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x="228.5"
                y="97.0205"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={28}
                x="129.5"
                y="110.8564"
              >
                label :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={61}
                x="160.5"
                y="110.8564"
              >
                varchar(64)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x="224.5"
                y="110.8564"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x="129.5"
                y="124.6924"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x="190.5"
                y="124.6924"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="253.5"
                y="124.6924"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x="129.5"
                y="138.5283"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x="192.5"
                y="138.5283"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x="255.5"
                y="138.5283"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[7091b8641faf5a2ca16a1b7ebd00b24d]
class e02_en*/}
              <rect
                codeline={19}
                fill="#FEFECE"
                filter="url(#fmi25v2qxjlpr)"
                height="124.1094"
                id="e02_en"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={198}
                x={7}
                y={205}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={104}
                x={54}
                y="222.457"
              >
                country_details_en
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={8}
                x2={204}
                y1="230.0938"
                y2="230.0938"
              />
              <ellipse
                cx={18}
                cy="241.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={14}
                x={27}
                y="245.5127"
              >
                id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x={44}
                y="245.5127"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={25}
                x={78}
                y="245.5127"
              >
                [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={8}
                x2={204}
                y1="251.9297"
                y2="251.9297"
              />
              <rect
                fill="none"
                height={6}
                style={{ stroke: "#C82930", strokeWidth: 1.0 }}
                width={6}
                x={15}
                y="259.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={57}
                x={27}
                y="267.3486"
              >
                country_id :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={31}
                x={87}
                y="267.3486"
              >
                serial
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={65}
                x={121}
                y="267.3486"
              >
                [ FK, NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={52}
                x={27}
                y="281.1846"
              >
                overview :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={21}
                x={82}
                y="281.1846"
              >
                text
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={26}
                x={106}
                y="281.1846"
              >
                [ NN ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={31}
                x={27}
                y="295.0205"
              >
                other :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={21}
                x={61}
                y="295.0205"
              >
                text
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x={27}
                y="308.8564"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={88}
                y="308.8564"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={151}
                y="308.8564"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x={27}
                y="322.6924"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={90}
                y="322.6924"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={153}
                y="322.6924"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[fbd5f8b5259dce7204cfe5faf4f087af]
class e03_en*/}
              <rect
                codeline={29}
                fill="#FEFECE"
                filter="url(#fmi25v2qxjlpr)"
                height="96.4375"
                id="e03_en"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={184}
                x={240}
                y={219}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={106}
                x={279}
                y="236.457"
              >
                country_groups_en
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={241}
                x2={423}
                y1="244.0938"
                y2="244.0938"
              />
              <ellipse
                cx={251}
                cy="255.0938"
                rx={3}
                ry={3}
                style={{ stroke: "#038048", strokeWidth: 1.0, fill: "none" }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={71}
                x={260}
                y="259.5127"
              >
                id : serial [ PK ]
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={241}
                x2={423}
                y1="265.9297"
                y2="265.9297"
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={28}
                x={246}
                y="281.3486"
              >
                label :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={55}
                x={277}
                y="281.3486"
              >
                varchar(2)
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={335}
                y="281.3486"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={58}
                x={246}
                y="295.1846"
              >
                created_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={307}
                y="295.1846"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={370}
                y="295.1846"
              >
                [ NN, UK ]
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={60}
                x={246}
                y="309.0205"
              >
                updated_at :
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                fontWeight="bold"
                lengthAdjust="spacing"
                textLength={60}
                x={309}
                y="309.0205"
              >
                timestamp
              </text>
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={46}
                x={372}
                y="309.0205"
              >
                [ NN, UK ]
              </text>
              {/*MD5=[184be91ca12efbbb94c31a3956b592d5]
class term*/}
              <rect
                codeline={37}
                fill="#FEFECE"
                filter="url(#fmi25v2qxjlpr)"
                height="112.4375"
                id="term"
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                width={106}
                x={364}
                y={20}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={12}
                lengthAdjust="spacing"
                textLength={25}
                x="404.5"
                y="37.457"
              >
                term
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: "1.5" }}
                x1={365}
                x2={469}
                y1="45.0938"
                y2="45.0938"
              />
              <ellipse
                cx={375}
                cy="56.0938"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={80}
                x={384}
                y="60.5127"
              >
                PK : Primary Key
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="66.9297"
                y2="66.9297"
              />
              <ellipse
                cx={375}
                cy="77.9297"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={78}
                x={384}
                y="82.3486"
              >
                FK : Forefin Key
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="88.7656"
                y2="88.7656"
              />
              <ellipse
                cx={375}
                cy="99.7656"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={59}
                x={384}
                y="104.1846"
              >
                NN : Not Null
              </text>
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1={365}
                x2={469}
                y1="110.6016"
                y2="110.6016"
              />
              <ellipse
                cx={375}
                cy="121.6016"
                fill="#000000"
                rx={3}
                ry={3}
                style={{ stroke: "#000000", strokeWidth: 1.0 }}
              />
              <text
                fill="#000000"
                fontFamily="sans-serif"
                fontSize={11}
                lengthAdjust="spacing"
                textLength={78}
                x={384}
                y="126.0205"
              >
                UK : Unique Key
              </text>
              {/*MD5=[fb656f3021af0853a3d61a20ce3d2924]
link e01_en to e02_en*/}
              <path
                codeline={47}
                d="M157.25,152.23 C157.25,152.23 157.25,197.98 157.25,197.98 "
                fill="none"
                id="e01_en-e02_en"
                style={{
                  stroke: "#A80036",
                  strokeWidth: 1.0,
                  strokeDasharray: "7.0,7.0"
                }}
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="161.25"
                x2="153.25"
                y1="200.98"
                y2="200.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="161.25"
                x2="153.25"
                y1="197.98"
                y2="197.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="157.25"
                x2="157.25"
                y1="196.98"
                y2="204.98"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="153.25"
                x2="161.25"
                y1="149.23"
                y2="149.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="153.25"
                x2="161.25"
                y1="152.23"
                y2="152.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="157.25"
                x2="157.25"
                y1="153.23"
                y2="145.23"
              />
              {/*MD5=[dbff2ea42c3bf6b431eb669224143491]
link e01_en to e03_en*/}
              <path
                codeline={48}
                d="M284.25,153.23 C284.25,153.23 284.25,210.92 284.25,210.92 "
                fill="none"
                id="e01_en-e03_en"
                style={{
                  stroke: "#A80036",
                  strokeWidth: 1.0,
                  strokeDasharray: "7.0,7.0"
                }}
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="288.25"
                x2="280.25"
                y1="214.92"
                y2="214.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="288.25"
                x2="280.25"
                y1="211.92"
                y2="211.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="284.25"
                y1="210.92"
                y2="218.92"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="278.25"
                y1="153.23"
                y2="145.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="290.25"
                y1="153.23"
                y2="145.23"
              />
              <line
                style={{ stroke: "#A80036", strokeWidth: 1.0 }}
                x1="284.25"
                x2="284.25"
                y1="153.23"
                y2="145.23"
              />
              <ellipse
                cx="284.25"
                cy="159.23"
                rx={4}
                ry={4}
                style={{ stroke: "#A80036", strokeWidth: 1.0, fill: "none" }}
              />
              {/*MD5=[3419be4e97b5d46d10ebea29d96f5458]
@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "countris_en" as e01_en {
  +id : **serial** [ PK ]
  - -
  -country_group_id : **serial** [ FK, NN, UK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_details_en" as e02_en {
  +id : **serial** [ PK ]
  - -
  -country_id : **serial** [ FK, NN, UK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_groups_en" as e03_en {
  +id : serial [ PK ]
  - -
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "term" as term {
  *PK : Primary Key
  - -
  *FK : Forefin Key
  - -
  *NN : Not Null
  - -
  *UK : Unique Key
}

e01_en ||..|| e02_en
e01_en }o..|| e03_en
@enduml

@startuml

hide circle

skinparam linetype ortho

entity "countris_en" as e01_en {
  +id : **serial** [ PK ]
  - -
  -country_group_id : **serial** [ FK, NN, UK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_details_en" as e02_en {
  +id : **serial** [ PK ]
  - -
  -country_id : **serial** [ FK, NN, UK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "country_groups_en" as e03_en {
  +id : serial [ PK ]
  - -
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN, UK ]
  updated_at : **timestamp** [ NN, UK ]
}

entity "term" as term {
  *PK : Primary Key
  - -
  *FK : Forefin Key
  - -
  *NN : Not Null
  - -
  *UK : Unique Key
}

e01_en ||..|| e02_en
e01_en }o..|| e03_en
@enduml

PlantUML version 1.2021.9(Sun Jul 25 19:13:56 JST 2021)
(GPL source distribution)
Java Runtime: Java(TM) SE Runtime Environment
JVM: Java HotSpot(TM) 64-Bit Server VM
Default Encoding: UTF-8
Language: ja
Country: JP
*/}
            </g>
          </svg>
        </p>
      </div>
    </>

  )
}

export default Plantuml