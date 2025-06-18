## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Çalışma Zamanı Hatalarını İzleme  
#### ✅ Cevap 1408: Eklenti çalışma zamanı hatalarını izleme

Çalışma zamanı hatalarını izlemek için hata loglama ve merkezi raporlama sistemleri kullanılabilir. Rust'ta hatalar bir log dosyasına veya harici servise gönderilebilir.

```rust
use std::fs::OpenOptions;
use std::io::Write;

fn log_error(error: &str) {
    let mut file = OpenOptions::new().append(true).create(true).open("error.log").unwrap();
    writeln!(file, "{}", error).unwrap();
}

fn plugin_run() {
    if let Err(e) = do_work() {
        log_error(&e);
    }
}

fn do_work() -> Result<(), String> {
    Err("Çalışma zamanı hatası".to_string())
}
```
