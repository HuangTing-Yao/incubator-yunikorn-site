"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49373:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"coding_guidelines",title:"Coding Guidelines"},s=void 0,p={type:"mdx",permalink:"/community/coding_guidelines",source:"@site/src/pages/community/coding_guidelines.md",title:"Coding Guidelines",description:"\x3c!--",frontMatter:{id:"coding_guidelines",title:"Coding Guidelines"}},c=[{value:"The basics",id:"the-basics",level:2},{value:"Automated checks",id:"automated-checks",level:2},{value:"Installing and running locally",id:"installing-and-running-locally",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Integration in pull requests",id:"integration-in-pull-requests",level:3},{value:"False positives",id:"false-positives",level:2},{value:"GoLand IDE setup",id:"goland-ide-setup",level:2},{value:"Editor preferences",id:"editor-preferences",level:3},{value:"Inspections",id:"inspections",level:3}],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-guidelines"},"Coding Guidelines"),(0,o.kt)("h2",{id:"the-basics"},"The basics"),(0,o.kt)("p",null,"GO as a language provides a build in formatter for the code: ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt"),".\nThe project uses the predefined format as implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt"),".\nThat means tabs and not spaces etc.\nRead the ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/effective_go.html"},"Effective GO")," page for further details.\nBefore creating a pull request make sure the code at least is formatted using ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt"),"."),(0,o.kt)("p",null,"Beside the effective GO guide follow the recommendations from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"CodeReviewComments")," wiki page.\nThe wiki provides a good collection of comments from code reviews.\nMost of the comments will be checked in the automated checks described below."),(0,o.kt)("p",null,"When using an IDE, like GoLand or Visual Studio Code, use the builtin options.\nMost IDEs will provide an extensive list of checks or formatting options that help formatting and point out code issues.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#goland-ide-setup"},"IDE setup")," for a basic setup for the GoLand IDE. "),(0,o.kt)("h2",{id:"automated-checks"},"Automated checks"),(0,o.kt)("p",null,"Not all code will be written using an IDE.\nEven between contributors the settings might not be the same in all installs.\nTo help keep code formatted consistently a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lint_(software)"},"lint")," tool is part of the code approval.   "),(0,o.kt)("p",null,"There are a large number of lint tools are available for Go.\nMost of the lint tools only check one specific thing.\nSome of the tools will aggregate a number of linters and provide an overview of all the issues found.\nFor the project we have chosen the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},"golangci-lint")," tool.\nThe tool can be run locally and will be integrated into the GitHub PR flow."),(0,o.kt)("h3",{id:"installing-and-running-locally"},"Installing and running locally"),(0,o.kt)("p",null,"Depending on your development system the instructions might differ slightly.\nFollow the ",(0,o.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"installation instructions")," provided by the project."),(0,o.kt)("p",null,"After the tool is installed you can run it using the standard command line: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"golangci-lint run\n")),(0,o.kt)("p",null,"The projects still generate a number of warnings.\nThe high impact warnings have been fixed or ignored via comments, see ",(0,o.kt)("a",{parentName:"p",href:"#false-positives"},"False positives"),"."),(0,o.kt)("p",null,"If you have been working on a new feature, or a bug fix you only want to check the files that have changed.\nYou can run the tool with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--new")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--new-from-rev")," option.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"--new")," option will only check uncommitted files.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"--new-from-rev")," option will check changes against a specific committed revision."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# for uncommitted changes\ngolangci-lint run --new\n# for committed changes against a revision\ngolangci-lint run --new-from-rev=origin/master\n")),(0,o.kt)("p",null,"The make target is ",(0,o.kt)("inlineCode",{parentName:"p"},"lint"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make lint\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," integration checks two locations for the linter executable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$(go env GOPATH)/bin/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./bin/"))),(0,o.kt)("p",null,"The location for a standard installation is slightly different for a developer and CI install.\nBy checking both locations we can run locally and during our automated builds."),(0,o.kt)("p",null,"The make integration uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"--new-from-rev")," command line option.\nThe revision to check against is determined as part of the run to allow it to run on different branches and on pull requests during our CI build.\nA lint check is part of the standard CI build run for the project. "),(0,o.kt)("p",null,"See the golangci-lint product documentation for more options and information on how to run the tool."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A predefined configuration is provided for the two projects that use them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim"},"YuniKorn k8shim"),", configuration file ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/blob/master/.golangci.yml"},"golangci.yml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core"},"YuniKorn core"),", configuration file ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core/blob/master/.golangci.yml"},"golangci.yml"),". ")),(0,o.kt)("p",null,"The web interface is a javascript project and the scheduler interface only has generated Go code and thus do not use it. "),(0,o.kt)("h3",{id:"integration-in-pull-requests"},"Integration in pull requests"),(0,o.kt)("p",null,"The planning is to integrate the ",(0,o.kt)("inlineCode",{parentName:"p"},"golangci-lint")," check into the GitHub PR flow. "),(0,o.kt)("h2",{id:"false-positives"},"False positives"),(0,o.kt)("p",null,"Tools are never 100% correct and neither is this one.\nCertain issue are too hard to correct or are not important enough to fix."),(0,o.kt)("p",null,"The tool allows adding a comment to the code to ignore the issue.\nThese comments should be used sparingly as they could hide issues.\nIf they are used they should be accompanied by a comment to explain why they are used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'    var s1 = "ignored by all linters" //nolint\n    var s2 = "ignored by the linter unused" //nolint:unused\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"nolint")," comment without a specific linter is discouraged.  "),(0,o.kt)("h2",{id:"goland-ide-setup"},"GoLand IDE setup"),(0,o.kt)("p",null,"GoLand has a number of checks turned on by default.\nThese defaults already provide a good coverage and mark a lot of issues found by the linters as issues.\nTo extend the coverage further and help mark issues proactively check the following settings and change them to the settings as per the screenshots."),(0,o.kt)("h3",{id:"editor-preferences"},"Editor preferences"),(0,o.kt)("p",null,"Open the preferences pane and go to: Editor -> Code Style -> Go.\nThere are three tabs to configure, the first two are crucial to comply with the basic rules from ",(0,o.kt)("inlineCode",{parentName:"p"},"gofmt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"goimports"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tabs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"tabs",src:n(33238).Z,width:"605",height:"328"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Imports"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"imports",src:n(1229).Z,width:"601",height:"438"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Other"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"other",src:n(45265).Z,width:"684",height:"387"}))))),(0,o.kt)("p",null,"The imports as configured above should create 3 groups of imports in a file when they are used:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"standard library imports"),(0,o.kt)("li",{parentName:"ol"},"third-party imports"),(0,o.kt)("li",{parentName:"ol"},"YuniKorn internal imports")),(0,o.kt)("p",null,"In the file it will give you an import that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"import (\n  // standard libraries\n\n  // third-party\n\n  // YuniKorn project imports\n)\n")),(0,o.kt)("h3",{id:"inspections"},"Inspections"),(0,o.kt)("p",null,"The default inspections can be used except for one that helps highlight shadowing variables.\nShadowing can cause difficult to trace and obscure bugs in the code and should be prevented whenever possible. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inspections",src:n(69399).Z,width:"930",height:"552"})))}d.isMDXComponent=!0},1229:function(e,t,n){t.Z=n.p+"assets/images/goland_ide_pref_imports-853b75298463f39a6cdffb70a1228a5e.png"},69399:function(e,t,n){t.Z=n.p+"assets/images/goland_ide_pref_inspections-808d7022dc77eb23848adcea32557746.png"},45265:function(e,t,n){t.Z=n.p+"assets/images/goland_ide_pref_other-f4969d5ecf1ad8a61e727cf4b93164e1.png"},33238:function(e,t,n){t.Z=n.p+"assets/images/goland_ide_pref_tabs-35f887a9c67980c3a703b2463d869dba.png"}}]);