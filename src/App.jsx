import resumePdf from "./assets/Manusree_Gurijala_SDE_Resume.pdf";
import React from "react";


export default function App() {
  // IMPORTANT: Put your resume inside public folder
  // public/Manusree_Gurijala_SDE_Resume.pdf
  const resumeFile = resumePdf;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.name}>Manusree Gurijala</h1>

        <h2 style={styles.title}>Software Development Engineer</h2>

        <p style={styles.summary}>
          Software Development Engineer focused on backend systems,
          distributed services, and cloud-native application development.
          Passionate about building scalable production software with strong
          focus on performance, reliability, and maintainability.
        </p>

        <div style={styles.skills}>
          <p><b>Languages:</b> Python, Java, JavaScript, TypeScript</p>
          <p><b>Backend:</b> Node.js, REST APIs, Microservices</p>
          <p><b>Cloud:</b> AWS, GCP, Azure</p>
          <p><b>Engineering:</b> Testing, Debugging, Performance Optimization</p>
          <p><b>AI Tools:</b> Claude, Codex, Cursor AI</p>
        </div>

        <div style={styles.buttonContainer}>
          <a
            href={resumeFile}
            download="Manusree_Resume.pdf"
            style={styles.downloadButton}
          >
            Download Resume
          </a>
        </div>

        <div style={styles.previewContainer}>
          <iframe
            title="Manusree Resume"
            src={resumeFile}
            style={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0b0f19",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },

  card: {
    width: "100%",
    backgroundColor: "#111827",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
  },

  name: {
    fontSize: "36px",
    marginBottom: "10px"
  },

  title: {
    color: "#a78bfa",
    marginBottom: "20px"
  },

  summary: {
    lineHeight: "1.6",
    color: "#cbd5e1"
  },

  skills: {
    marginTop: "20px",
    lineHeight: "1.8",
    color: "#e2e8f0"
  },

  buttonContainer: {
    marginTop: "30px"
  },

  downloadButton: {
    backgroundColor: "#7c3aed",
    padding: "12px 22px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  },

  previewContainer: {
    marginTop: "30px",
    height: "600px",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #374151"
  },

  iframe: {
    width: "100%",
    height: "100%",
    border: "none"
  }
};
