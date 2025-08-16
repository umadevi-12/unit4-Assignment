import React, { useEffect, useState } from "react";
import DailyLogForm from "../components/DailyLogForm";
import Dashboard from "../components/Dashboard";
import { getEntries } from "../utils/localStorage";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function StudentPage() {
  const [entries, setEntries] = useState([]);

  const refreshEntries = () => setEntries(getEntries());

  useEffect(() => {
    refreshEntries();
  }, []);

  const exportPDF = () => {
    const input = document.getElementById("journal");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("journal.pdf");
      toast.success("PDF exported!");
    });
  };

  return (
    <div className="page-container">
      <h1>Student Dashboard</h1>
      <DailyLogForm onNewEntry={refreshEntries} />
      <Dashboard entries={entries} onExportPDF={exportPDF} />
    </div>
  );
}
