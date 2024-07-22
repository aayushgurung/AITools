// pages/mergepdf.tsx

import { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const MergePDFPage = () => {
  const [pdfFiles, setPdfFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFiles(e.target.files);
    }
  };

  const mergePDFs = async () => {
    if (!pdfFiles || pdfFiles.length < 2) {
      alert('Please select at least 2 PDF files to merge.');
      return;
    }

    try {
      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < pdfFiles.length; i++) {
        const file = pdfFiles[i];
        const pdfBytes = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const mergedPdfBytes = await mergedPdf.save();

      // You can now use `mergedPdfBytes` to display or download the merged PDF.
    } catch (error) {
      console.error('Error merging PDFs:', error);
    }
  };

  return (
    <div>
      <h1>Merge PDFs</h1>
      <input type="file" multiple onChange={handleFileChange} accept=".pdf" />
      <button onClick={mergePDFs}>Merge PDFs</button>
    </div>
  );
};

export default MergePDFPage;
