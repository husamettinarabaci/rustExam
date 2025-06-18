## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: Tokio thread havuzu davranışını özelleştirme  
#### ✅ Cevap 1077: Tokio thread havuzu davranışını özelleştirme

Tokio'da thread havuzu, runtime başlatılırken yapılandırılabilir. `Builder` ile thread sayısı ve isimlendirme gibi ayarlar yapılabilir.

Örnek:
```rust
use tokio::runtime::Builder;

fn main() {
    let rt = Builder::new_multi_thread()
        .worker_threads(4)
        .thread_name("my-worker")
        .enable_all()
        .build()
        .unwrap();
    rt.block_on(async {
        // async kod
    });
}
```
İş yüküne göre thread sayısı ve davranışı optimize edilebilir.
