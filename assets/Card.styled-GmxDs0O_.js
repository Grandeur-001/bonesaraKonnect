import{U as r,T as a,H as o,I as e}from"./index-BrP7QYip.js";const s=a("div",{isTransform:Boolean})`
  ${r`relative flex flex-col items-start overflow-hidden space-y-3 shadow-lg md:shadow-lg group`}
  border-radius: 30px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-gray);
  background: linear-gradient(135deg, rgb(27, 26, 26) 0%, rgba(0, 0, 0, 0.8) 100%);


  &::after {
    content: '';
    position: absolute;
    background-image: var(--linear-gradient);
    width: 0;
    height: 2px;
    bottom: 0;
    right: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 4px 20px var(--accent-orange-faded);
    border-radius: 0px;
    transform: translateY(-10px);
  }

 ${({isTransform:t})=>t&&`
    &:hover {
      transform: rotateY(15deg) rotateX(10deg) scale(1.05);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
  `}
`,d=a("div")`
  ${r`px-[42px] py-[60px] min-h-[25rem]`}
`,l=a("figure")`
`;a("img")`
  
`;const n=o`
  display: inline-block;
  font-size: 50px;
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,p=e`
    ${n}
`,c=a("h4")`
  ${r`font-bold capitalize pb-2 text-[22px] md:text-[25px]`}
`,x=e`
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,g=a("p")`
  ${r`text-[1rem] leading-[32px]  md:leading-[38px] md:text-[1.1rem]`}
  color: var(--text-secondary);
`,b=a("span")`
  ${r` px-2.5 py-1 rounded-full font-medium text-[var(--text-secondary)]`}
  font-size: 11px;
  border: 1px solid var(--line-gray);
`;export{d as C,g as D,l as I,c as T,p as a,s as b,b as c,x as d};
