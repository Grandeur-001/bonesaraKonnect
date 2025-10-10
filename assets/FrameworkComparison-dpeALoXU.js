import{I as r,a as n,b as o,d as e,i as p,n as t,w as h,f as fe,_ as k,t as i,F as l,l as d,h as v}from"./index-DMUNf7E1.js";import{_ as xe}from"./Hero-2-Hhbhwugl.js";import{b as ye}from"./Card.styled-lyE3WhCP.js";import{_ as we}from"./LinkBtn-D3WtliNk.js";import{_ as ke}from"./ArrowRightIcon-DpJmXzfy.js";const Ce={class:"p-7 md:p-9"},Te=["href"],Se=["id"],_e=["innerHTML"],Fe={class:"rotate-[200deg] group-hover:rotate-[180deg]"},Le={__name:"FrameworkComparison",setup(ze){const b={leadParagraph:"The frontend development landscape in 2025 continues to be dominated by three major players: React, Vue.js, and Angular. Each framework has evolved significantly, offering unique advantages and addressing different development needs. This comprehensive guide will help you make an informed decision for your next project.",secondParagraph:"With the rapid evolution of web technologies, choosing the right framework isn't just about current capabilities—it's about future-proofing your application, team productivity, and long-term maintainability. Let's dive deep into what makes each framework special and when you should choose one over the others."},C=[{id:"overview",href:"#overview",title:"Framework Overview"},{id:"react-deep-dive",href:"#react-deep-dive",title:"React: The Flexible Giant"},{id:"vue-deep-dive",href:"#vue-deep-dive",title:"Vue: The Progressive Framework"},{id:"angular-deep-dive",href:"#angular-deep-dive",title:"Angular: The Enterprise Solution"},{id:"comparison-table",href:"#comparison-table",title:"Detailed Comparison"},{id:"performance",href:"#performance",title:"Performance Analysis"},{id:"recommendations",href:"#recommendations",title:"Our Recommendations"}],T=[{name:"React",version:"v18.2+",description:"A JavaScript library for building user interfaces, maintained by Meta. Known for its component-based architecture and vast ecosystem."},{name:"Vue.js",version:"v3.4+",description:"A progressive framework that's approachable for beginners yet powerful enough for complex applications. Created by Evan You."},{name:"Angular",version:"v17+",description:"A full-featured framework by Google, built with TypeScript. Provides everything needed for large-scale applications out of the box."}],S=[{id:"react-deep-dive",title:"React: The Flexible Giant",strengths:["Massive ecosystem and community","Excellent job market and resources","Flexible architecture choices","Server-side rendering with Next.js","React Native for mobile development","Concurrent features and Suspense"],challenges:["Steep learning curve for beginners","Decision fatigue with tooling choices","Frequent ecosystem changes","JSX syntax learning requirement","State management complexity"],bestFor:"Large-scale applications, teams with React experience, projects requiring extensive third-party integrations, and when you need maximum flexibility in architecture decisions."},{id:"vue-deep-dive",title:"Vue: The Progressive Framework",strengths:["Gentle learning curve","Excellent documentation","Template syntax familiarity","Composition API flexibility","Built-in state management (Pinia)","Great developer experience"],challenges:["Smaller ecosystem than React","Less job market demand","Fewer large-scale examples","Limited mobile development options","Corporate backing concerns"],bestFor:"Rapid prototyping, small to medium-sized applications, teams new to modern frameworks, and projects where developer happiness and productivity are priorities."},{id:"angular-deep-dive",title:"Angular: The Enterprise Solution",strengths:["Complete framework solution","TypeScript by default","Powerful CLI and tooling","Dependency injection system","Strong testing capabilities","Enterprise-grade architecture"],challenges:["Steep learning curve","Verbose syntax and concepts","Large bundle sizes","Frequent breaking changes","Overkill for simple projects"],bestFor:"Enterprise applications, large development teams, projects requiring strict structure and conventions, and when TypeScript and comprehensive tooling are essential."}],f={frameworks:["React","Vue","Angular"],features:[{name:"Learning Curve",values:["Moderate to Steep","Gentle","Steep"]},{name:"Performance",values:["Excellent","Excellent","Good"]},{name:"Bundle Size",values:["Small (42KB)","Small (39KB)","Large (130KB+)"]},{name:"TypeScript",values:["Optional","Optional","Built-in"]},{name:"Mobile Development",values:["React Native","NativeScript Vue","Ionic"]},{name:"State Management",values:["Redux, Zustand, Context","Pinia, Vuex","NgRx, Services"]},{name:"Testing",values:["Jest, Testing Library","Vitest, Vue Test Utils","Jasmine, Karma"]},{name:"Job Market",values:["Excellent","Good","Good"]}]},_=[{name:"React",metrics:[{label:"First Contentful Paint",value:"1.2s"},{label:"Time to Interactive",value:"2.1s"},{label:"Bundle Size",value:"42KB"}]},{name:"Vue",metrics:[{label:"First Contentful Paint",value:"1.1s"},{label:"Time to Interactive",value:"1.9s"},{label:"Bundle Size",value:"39KB"}]},{name:"Angular",metrics:[{label:"First Contentful Paint",value:"1.4s"},{label:"Time to Interactive",value:"2.8s"},{label:"Bundle Size",value:"130KB+"}]}],F=[{icon:"🚀",title:"For Startups & MVPs",text:"<strong>Choose Vue.js</strong> - Its gentle learning curve, excellent documentation, and rapid development capabilities make it perfect for getting to market quickly."},{icon:"🏢",title:"For Enterprise Applications",text:"<strong>Choose Angular</strong> - Its opinionated structure, TypeScript integration, and comprehensive tooling provide the foundation needed for large-scale applications."},{icon:"⚡",title:"For Maximum Flexibility",text:"<strong>Choose React</strong> - When you need the largest ecosystem, most job opportunities, and complete control over your architecture decisions."}],z=[`The "best" framework doesn't exist in isolation—it depends entirely on your project requirements, team expertise, and long-term goals. All three frameworks are excellent choices that will serve you well in 2025 and beyond.`,"Consider starting with Vue if you're new to modern frameworks, React if you want maximum flexibility and job market opportunities, or Angular if you're building enterprise-grade applications with large teams."],B=r`
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-primary);
`,R=r`
  max-width: 1200px;
  margin: -3rem auto 4rem;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin: -2rem auto 3rem;
  }
`,V=r`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--line-gray);
`,j=r`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  
  @media (max-width: 320px) {
    padding: 0 0.75rem 3rem;
  }
`,P=r`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1rem;
  padding: 3rem;
  border: 1px solid var(--line-gray);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 320px) {
    padding: 1rem;
  }
`,c=r`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,g=r`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,A=r`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,u=r`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
`,L=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 3rem;
`,E=r`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,I=r`
  list-style: none;
  padding: 0;
  margin: 0;
`,G=r`
  color: var(--text-secondary);
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--accent-orange);
    padding-left: 0.5rem;
  }
`,$=r`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,D=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent-orange);
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`,M=r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,O=r`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`,N=r`
  background: var(--accent-orange-faded);
  color: var(--accent-orange);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
`,q=r`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`,K=r`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,J=r`
  background: var(--accent-orange-faded);
  border: 1px solid rgba(255, 167, 38, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,H=r`
  background: var(--accent-red-faded);
  border: 1px solid rgba(239, 83, 80, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,x=r`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,W=r`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--accent-orange);
      font-weight: bold;
    }
  }
`,Y=r`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '⚠';
      position: absolute;
      left: 0;
      color: var(--accent-red);
    }
  }
`,U=r`
  background: var(--linear-gradient);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
`,X=r`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,Z=r`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
`,Q=r`
  overflow-x: scroll;
  margin: 2rem 0;
  border-radius: 0.75rem;
  border: 1px solid var(--line-gray);
  width:150%;
`,ee=r`
  width: 100%;
  border-collapse: collapse;
  background: var(--fading-gray);

  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,te=r`
  background: var(--linear-gradient);
`,y=r`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid var(--line-gray);
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,re=r`
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,w=r`
  padding: 1rem;
  border-bottom: 1px solid var(--line-gray);
  color: var(--text-secondary);
  
  strong {
    color: var(--text-primary);
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,ae=r`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ne=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,oe=r`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`,ie=r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line-gray);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`,se=r`
  color: var(--text-secondary);
  font-size: 0.875rem;
`,le=r`
  color: var(--accent-orange);
  font-weight: 600;
`,de=r`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ce=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`,me=r`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,pe=r`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,ge=r`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  
  strong {
    color: var(--accent-orange);
  }
`,ue=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-top: 3rem;
`,he=r`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
`,ve=r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line-gray);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,be=r`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;return(Be,m)=>(o(),n("div",{class:t(B)},[e("div",Ce,[p(xe,{badge:"Development",title:"React vs Vue vs Angular: Choosing the Right Framework in 2025",paragraph:"A comprehensive deep dive into the most popular frontend frameworks, their strengths, weaknesses, and when to use each one for your next project.",metaInfo:"Published January 15, 2025 • 12 min read • Updated for 2025"})]),e("div",{class:t(R)},[e("img",{src:"https://themeselection.com/wp-content/uploads/2023/09/React-vs-Angular-Vs-VueJS.png",alt:"React vs Vue vs Angular Framework Comparison 2025",class:t(V)})]),e("main",{class:t(j)},[p(fe(ye),{class:t(P)},{default:h(()=>[e("section",{class:t(c)},[e("p",{class:t(A)},i(b.leadParagraph),1),e("p",{class:t(u)},i(b.secondParagraph),1)]),e("nav",{class:t(L)},[e("h3",{class:t(`${E} font-bold`)},"Table of Contents",2),e("ul",{class:t(I)},[(o(),n(l,null,d(C,a=>e("li",{key:a.id},[e("a",{href:a.href,class:t(G)},i(a.title),9,Te)])),64))])]),e("section",{id:"overview",class:t(c)},[e("h2",{class:t(`${g} font-bold`)},"Framework Overview",2),e("p",{class:t(u)}," Before diving into specifics, let's establish what each framework brings to the table in 2025: "),e("div",{class:t($)},[(o(),n(l,null,d(T,a=>e("div",{key:a.name,class:t(D)},[e("div",{class:t(M)},[e("h3",{class:t(O)},i(a.name),1),e("span",{class:t(N)},i(a.version),1)]),e("p",{class:t(q)},i(a.description),1)])),64))])]),(o(),n(l,null,d(S,a=>e("section",{key:a.id,id:a.id,class:t(c)},[e("h2",{class:t(`${g} font-bold`)},i(a.title),3),e("div",{class:t(K)},[e("div",{class:t(J)},[e("h4",{class:t(x)},"Strengths"),e("ul",{class:t(W)},[(o(!0),n(l,null,d(a.strengths,s=>(o(),n("li",{key:s},i(s),1))),128))])]),e("div",{class:t(H)},[e("h4",{class:t(x)},"Challenges"),e("ul",{class:t(Y)},[(o(!0),n(l,null,d(a.challenges,s=>(o(),n("li",{key:s},i(s),1))),128))])])]),e("div",{class:t(U)},[e("h4",{class:t(X)},"Best For:"),e("p",{class:t(Z)},i(a.bestFor),1)])],8,Se)),64)),e("section",{id:"comparison-table",class:t(c)},[e("h2",{class:t(`${g} font-bold`)},"Detailed Comparison",2),e("div",{class:t(`${Q}`)},[e("table",{class:t(`${ee}`)},[e("thead",null,[e("tr",{class:t(te)},[e("th",{class:t(y)},"Feature"),(o(!0),n(l,null,d(f.frameworks,a=>(o(),n("th",{key:a,class:t(y)},i(a),1))),128))])]),e("tbody",null,[(o(!0),n(l,null,d(f.features,a=>(o(),n("tr",{key:a.name,class:t(re)},[e("td",{class:t(w)},[e("strong",null,i(a.name),1)]),(o(!0),n(l,null,d(a.values,s=>(o(),n("td",{key:s,class:t(w)},i(s),1))),128))]))),128))])],2)],2)]),e("section",{id:"performance",class:t(c)},[e("h2",{class:t(`${g} font-bold`)},"Performance Analysis",2),e("p",{class:t(u)}," Performance is crucial for user experience and SEO. Here's how each framework performs in 2025: "),e("div",{class:t(ae)},[(o(),n(l,null,d(_,a=>e("div",{key:a.name,class:t(ne)},[e("h4",{class:t(oe)},i(a.name),1),(o(!0),n(l,null,d(a.metrics,s=>(o(),n("div",{key:s.label,class:t(ie)},[e("span",{class:t(se)},i(s.label)+":",1),e("span",{class:t(le)},i(s.value),1)]))),128))])),64))])]),e("section",{id:"recommendations",class:t(c)},[e("h2",{class:t(`${g} font-bold`)},"Our 2025 Recommendations",2),e("div",{class:t(de)},[(o(),n(l,null,d(F,a=>e("div",{key:a.title,class:t(ce)},[e("div",{class:t(me)},i(a.icon),1),e("h4",{class:t(pe)},i(a.title),1),e("p",{class:t(ge),innerHTML:a.text},null,8,_e)])),64))]),e("div",{class:t(ue)},[e("h3",{class:t(he)},"Final Thoughts"),(o(),n(l,null,d(z,a=>e("p",{key:a,class:t(u)},i(a),1)),64))])])]),_:1}),e("nav",{class:t(ve)},[p(we,{href:"/blog"},{default:h(()=>[e("div",Fe,[p(ke)]),m[0]||(m[0]=v(" Back to Blog "))]),_:1,__:[0]}),e("div",{class:t(be)},[p(k,null,{default:h(()=>m[1]||(m[1]=[v("Share on Twitter")])),_:1,__:[1]}),p(k,null,{default:h(()=>m[2]||(m[2]=[v("Share on LinkedIn")])),_:1,__:[2]})])])])]))}};export{Le as default};
