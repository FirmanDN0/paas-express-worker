import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

// Middleware: Express Logger (Challenge Pengayaan)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 1. Endpoint Root (Bagian 4 Modul)
app.get("/", (req, res) => {
  res.json({ message: "Hello Express on Cloudflare Workers!" });
});

// 2. Endpoint Status (Bagian 4 Modul)
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

// 3. Endpoint Info (Bagian 9 Challenge Redeploy)
app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

// 4. Endpoint Log Test (Bagian 10 Logs & Observability)
app.get("/api/log-test", (req, res) => {
  console.log("Endpoint /api/log-test dipanggil");
  res.json({ logged: true });
});

// 5. Endpoint Waktu Server (Bagian 12 Challenge Pengayaan #1)
app.get("/api/time", (req, res) => {
  res.json({
    iso: new Date().toISOString(),
    timestamp: Date.now(),
    timezone: "UTC"
  });
});

// 6. Endpoint Parameter Dinamis (Bagian 12 Challenge Pengayaan #2)
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Halo, ${name}! Selamat datang di Express on Cloudflare Workers.`
  });
});

// 7. Response HTML Sederhana (Bagian 12 Challenge Pengayaan #3)
app.get("/html", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PaaS Minggu 5 — Express Worker</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            background: #0f172a;
            color: #f8fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 1rem;
          }
          .card {
            background: #1e293b;
            border-radius: 12px;
            padding: 2rem;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            border: 1px solid #334155;
          }
          h1 { color: #38bdf8; margin-top: 0; font-size: 1.5rem; }
          p { color: #94a3b8; line-height: 1.6; }
          ul { list-style: none; padding: 0; margin-top: 1.5rem; }
          li { margin-bottom: 0.75rem; }
          a {
            color: #f59e0b;
            text-decoration: none;
            display: inline-block;
            background: #0f172a;
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            transition: all 0.2s ease;
          }
          a:hover { background: #334155; color: #fbbf24; }
          .badge {
            background: #059669;
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">Cloudflare Workers</span>
          <h1>Express.js Backend</h1>
          <p>Materi Praktikum Minggu 5: Deploy Node.js + Express ke Serverless Edge Workers.</p>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 1rem 0;">
          <strong>Daftar Endpoint API:</strong>
          <ul>
            <li><a href="/">GET /</a> - Root Greeting</li>
            <li><a href="/api/status">GET /api/status</a> - API Status</li>
            <li><a href="/api/info">GET /api/info</a> - Info Course</li>
            <li><a href="/api/time">GET /api/time</a> - Server Timestamp</li>
            <li><a href="/hello/Firman">GET /hello/:name</a> - Route Parameter</li>
            <li><a href="/api/log-test">GET /api/log-test</a> - Log Observability</li>
          </ul>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
