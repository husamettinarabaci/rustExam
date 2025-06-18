## 📘 Bölüm: Aktör Modeli İleri Konular
### 🔹 Kategori: Derleme zamanı güvenliği için tipli aktörler
#### ✅ Cevap 1189: Derleme zamanı güvenliği için tipli aktörler

Rust'ta tipli aktörler, yalnızca belirli mesaj tiplerini kabul edecek şekilde tanımlanabilir. Bu, derleme zamanında tip hatalarını önler ve güvenliği artırır.

```rust
// Tipli aktör örneği:
struct PrintActor;

impl PrintActor {
    fn handle(&self, msg: String) {
        println!("Received: {}", msg);
    }
}
// PrintActor yalnızca String tipinde mesaj kabul eder.
```
