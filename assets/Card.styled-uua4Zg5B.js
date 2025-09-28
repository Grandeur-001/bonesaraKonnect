import{R as r,K as a,a3 as e,I as t}from"./index-5qB3zWAt.js";const i=a("div")`
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
`,s=a("div")`
  ${r`px-[42px] py-[60px] min-h-[25rem]`}
`,d=a("figure")`
`;a("img")`
  
`;const o=e`
  display: inline-block;
  font-size: 50px;
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,l=t`
    ${o}
`,p=a("h4")`
  ${r`font-bold capitalize pb-2 text-[22px] md:text-[25px]`}
`,c=t`
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,x=a("p")`
  ${r`text-[1rem] leading-[32px]  md:leading-[38px] md:text-[1.1rem]`}
  color: var(--text-secondary);
`,g=a("span")`
  ${r` px-2.5 py-1 rounded-full font-medium text-[var(--text-secondary)]`}
  font-size: 11px;
  border: 1px solid var(--line-gray);
`;export{s as C,x as D,d as I,p as T,l as a,i as b,g as c,c as d};
