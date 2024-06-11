import { createRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import './App.css';
import Invoice from './Invoice';

// NPM: https://www.npmjs.com/package/@progress/kendo-react-pdf
// DOCS: https://www.telerik.com/kendo-react-ui/components/pdfprocessing/
const App = () => {
  const ref = createRef();

  return (
    <div className='container'>
      <button
        className='download-btn'
        onClick={() => {
          if (ref.current) ref.current.save();
        }}
      >
        Download Invoice
      </button>
      <div id='pdf'>
        <PDFExport
          paperSize='A4'
          margin='1cm'
          fileName={`Invoice_${Date.now()}`}
          author='Zervise Team'
          ref={ref}
        >
          <Invoice />
        </PDFExport>
      </div>
    </div>
  );
};

export default App;
