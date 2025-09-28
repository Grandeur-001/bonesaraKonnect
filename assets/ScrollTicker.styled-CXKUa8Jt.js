import{K as t,a0 as e}from"./index-5qB3zWAt.js";const n=t.div`
  position: relative;
  width: 90%;
  height: 80px;
  background: var(--bg-dark);
  border-top: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-gray);
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 auto;
`,i=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,r=e`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
`,o=t.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  will-change: transform;
  animation: ${r} 30s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
  }
`,s=t.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`,l=t.span`
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(255, 167, 38, 0.3);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
  }
`,d=t.span`
  color: var(--accent-orange);
  font-size: 1.5rem;
  margin-left: 3rem;
  opacity: 0.6;
  font-weight: bold;
`,c=t.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  
  &.left {
    left: 0;
    background: linear-gradient(90deg, var(--bg-dark) 0%, transparent 100%);
  }
  
  &.right {
    right: 0;
    background: linear-gradient(270deg, var(--bg-dark) 0%, transparent 100%);
  }
`;export{c as G,l as I,d as S,i as T,o as a,s as b,n as c};
