import{I as r}from"./index-5qB3zWAt.js";const e=r`
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-primary);
`,t=r`
  max-width: 1200px;
  margin: -3rem auto 4rem;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin: -2rem auto 3rem;
  }
`,o=r`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--line-gray);
`,i=r`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  
  @media (max-width: 320px) {
    padding: 0 0.75rem 3rem;
  }
`,n=r`
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
`,d=r`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,m=r`
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
`,s=r`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,c=r`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
`,g=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 3rem;
`,l=r`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,p=r`
  list-style: none;
  padding: 0;
  margin: 0;
`,x=r`
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
`,b=r`
  background: var(--linear-gradient);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 2rem 0;
`,h=r`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,f=r`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
`,v=r`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,w=r`
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
`,u=r`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,y=r`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`,k=r`
  overflow-x: scroll;
  scrollbar-width:none;
  margin: 2rem 0;
  border-radius: 0.75rem;
  border: 1px solid var(--line-gray);
  width: 100%;
`,z=r`
  width: 100%;
  border-collapse: collapse;
  background: var(--fading-gray);
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,C=r`
  background: var(--linear-gradient);
`,T=r`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid var(--line-gray);
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,I=r`
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,B=r`
  padding: 1rem;
  border-bottom: 1px solid var(--line-gray);
  color: var(--text-secondary);
  
  strong {
    color: var(--text-primary);
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,G=r`
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
`,H=r`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`,L=r`
  background: var(--accent-orange-faded);
  border: 1px solid rgba(255, 167, 38, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
`,j=r`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-orange);
  margin-bottom: 0.75rem;
`,D=r`
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
`,q=r`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  display: block;
`,A=r`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`,E=r`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`,F=r`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-orange);
  display: block;
`,J=r`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`;export{y as A,L as B,j as C,D,k as E,z as F,C as G,T as H,I,B as J,n as a,G as b,d as c,c as d,A as e,o as f,E as g,F as h,t as i,J as j,l as k,s as l,i as m,p as n,x as o,e as p,m as q,b as r,H as s,g as t,h as u,f as v,q as w,v as x,w as y,u as z};
