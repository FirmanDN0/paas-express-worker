# PaaS Minggu 5 — Deploy Node.js + Express ke Cloudflare Workers

Repository ini berisi implementasi praktikum Minggu 5 mata pelajaran **Platform as a Service (PaaS)**: transisi dari deployment statis menuju backend dinamis menggunakan Express.js pada runtime serverless Cloudflare Workers.

---

## 🔗 Tautan Penting
- **GitHub Repository**: [https://github.com/FirmanDN0/paas-express-worker](https://github.com/FirmanDN0/paas-express-worker)
- **Production URL**: [https://paas-express-worker.samnamrif8.workers.dev](https://paas-express-worker.samnamrif8.workers.dev)

---

## 🚀 Endpoint API yang Tersedia

| Method | Endpoint | Deskripsi | Respon Contoh |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Root greeting | `{"message":"Hello Express on Cloudflare Workers!"}` |
| `GET` | `/api/status` | Status layanan | `{"status":"ok","subject":"PaaS","week":5,"platform":"Cloudflare Workers"}` |
| `GET` | `/api/info` | Info materi pembelajaran | `{"framework":"Express","runtime":"Cloudflare Workers","course":"Platform as a Service"}` |
| `GET` | `/api/time` | Waktu server realtime | `{"iso":"...","timestamp":...,"timezone":"UTC"}` |
| `GET` | `/hello/:name` | Parameter dinamis | `{"message":"Halo, Firman! Selamat datang di Express on Cloudflare Workers."}` |
| `GET` | `/api/log-test` | Observabilitas logging | `{"logged":true}` *(merekam console.log di Workers tail)* |
| `GET` | `/html` | Tampilan Web Responsif | Halaman HTML interaktif dengan visualisasi endpoint |

---

## 🛠️ Cara Menjalankan Lokal

1. **Install dependensi**:
   ```bash
   npm install
   ```
2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
3. Buka browser di [http://localhost:8787](http://localhost:8787).

---

## ☁️ Deployment ke Cloudflare

Untuk mendeploy ulang aplikasi:
```bash
npm run deploy
```

Untuk memantau log request secara langsung:
```bash
npx wrangler tail
```

---

## 📚 Jawaban Observasi & Refleksi Modul

### Pertanyaan Observasi
1. **Fungsi Express**: Sebagai framework routing dan middleware untuk menangani permintaan HTTP klien secara terstruktur dan fleksibel.
2. **Fungsi `httpServerHandler`**: Adapter dari `cloudflare:node` yang menghubungkan runtime Cloudflare Workers (*workerd*) dengan aplikasi Node.js Express.
3. **Perbedaan `npm run dev` vs `npm run deploy`**: `npm run dev` menjalankan server simulasi lokal di komputer, sedangkan `npm run deploy` mengunggah dan mendistribusikan kode ke jaringan global edge Cloudflare.
4. **Setelah Worker dideploy**: Kode dibundel dan didistribusikan ke ratusan data center Cloudflare di seluruh dunia untuk dieksekusi sedekat mungkin dengan pengguna.
5. **Mengapa tidak perlu konfigurasi port**: Cloudflare Workers berada di belakang sistem reverse proxy Cloudflare yang secara otomatis mengelola routing domain HTTPS (port 443) ke Worker.
6. **Perbedaan dengan server Node.js tradisional**: Server tradisional selalu menyala (*always-on*) pada suatu VM/OS. Cloudflare Worker bersifat serverless, dijalankan sesuai permintaan (*on-demand isolate*), dan diskalakan otomatis tanpa server fisik yang dikelola sendiri.
