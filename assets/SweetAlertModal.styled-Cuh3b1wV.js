import{a5 as t}from"./index-DMUNf7E1.js";const a=t`
  .swal2-container{
    z-index: 9999999 !important;
  }
  .swal2-close{
    color: var(--text-secondary) !important;
    font-size: 24px !important;
    top: 16px !important;
    right: 16px !important;
  }
  .dialog-popup {
    border: 1px solid var(--border-gray) !important;
    border-radius: 16px !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
    width: 95vw !important;
    max-width: 800px !important;
    margin: 10px !important;
  }
  
  .dialog-content {
    padding: 24px !important;
    max-height: 70vh !important;
    overflow-y: auto !important;
  }
  
  .dialog-title {
    background: var(--linear-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: clamp(20px, 4vw, 28px);
    font-weight: bold;
    display: block;
    margin-bottom: 16px;
  }
  
  .dialog-body {
    text-align: left;
    color: var(--text-primary);
    line-height: 1.6;
  }
  
  .content-section {
    margin-bottom: clamp(16px, 4vw, 24px);
  }
  
  .lead-text {
    font-size: clamp(14px, 3vw, 16px);
    color: var(--text-primary);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  
  .section-heading {
    color: var(--accent-orange);
    font-size: clamp(16px, 3.5vw, 18px);
    font-weight: 600;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }
  
  .heading-accent {
    width: 4px;
    height: clamp(16px, 4vw, 20px);
    background: var(--linear-gradient);
    margin-right: 8px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  
  /* Generic List Styles */
  .grid-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .list-item {
    display: flex;
    align-items: flex-start;
    padding: 4px 0;
  }
  
  .list-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 12px;
    margin-top: 6px;
    flex-shrink: 0;
  }
  
  .list-text {
    font-size: clamp(13px, 3vw, 14px);
    line-height: 1.4;
  }
  
  /* Tag Styles */
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .tag {
    padding: 6px 12px;
    background-color: #444444;
    border-radius: 20px;
    font-size: clamp(11px, 2.5vw, 13px);
    white-space: nowrap;
  }
  
  .tag-label {
    font-size: inherit;
  }
  
  /* Numbered List Styles */
  .numbered-list {
    list-style: none;
    padding: 0;
  }
  
  .numbered-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  
  .number-badge {
    width: clamp(20px, 5vw, 24px);
    height: clamp(20px, 5vw, 24px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(10px, 2.5vw, 12px);
    font-weight: bold;
    color: white;
    margin-right: 12px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .numbered-text {
    font-size: clamp(13px, 3vw, 14px);
    line-height: 1.4;
  }
  
  /* Button Styles */
  .dialog-button {
    background: var(--linear-gradient) !important;
    border: none !important;
    border-radius: 8px !important;
    padding: clamp(10px, 3vw, 12px) clamp(16px, 4vw, 24px) !important;
    font-size: clamp(12px, 3vw, 14px) !important;
    transition: opacity 0.3s ease !important;
    width: auto !important;
    min-width: 120px !important;
  }
  
  .dialog-button:hover {
    opacity: 0.9 !important;
  }
  
  .dialog-close {
    color: #9E9E9E !important;
    font-size: clamp(20px, 5vw, 24px) !important;
    top: 16px !important;
    right: 16px !important;
  }
  
  .dialog-close:hover {
    color: var(--accent-orange) !important;
  }
  
  /* Scrollbar */
  .dialog-content::-webkit-scrollbar {
    width: 6px;
  }
  
  .dialog-content::-webkit-scrollbar-track {
    background: #333333;
    border-radius: 3px;
  }
  
  .dialog-content::-webkit-scrollbar-thumb {
    background: var(--accent-orange);
    border-radius: 3px;
  }
  
  .dialog-content::-webkit-scrollbar-thumb:hover {
    background: var(--accent-red);
  }
  
  /* Responsive Breakpoints */
  @media (min-width: 480px) {
    .grid-list {
      grid-template-columns: 1fr 1fr;
      gap: 12px 16px;
    }
    
    .dialog-content {
      padding: 32px !important;
    }
  }
  
  @media (min-width: 768px) {
    .dialog-popup {
      margin: 20px !important;
    }
    
    .grid-list {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  /* Extra small screens (320px and below) */
  @media (max-width: 320px) {
    .dialog-popup {
      width: 98vw !important;
      margin: 5px !important;
    }
    
    .dialog-content {
      padding: 16px !important;
    }
    
    .content-section {
      margin-bottom: 16px;
    }
    
    .list-bullet {
      width: 6px;
      height: 6px;
      margin-right: 8px;
    }
    
    .number-badge {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    
    .tag {
      padding: 4px 8px;
      font-size: 11px;
    }
  }
`;export{a as S};
