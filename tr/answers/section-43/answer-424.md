## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Enumlar üzerinde metotlar uygulama  
#### ✅ Cevap 424: Enumlar üzerinde metotlar uygulama

Enumlar üzerinde `impl` bloğu ile metotlar tanımlanabilir. Bu metotlar enumun kendisine veya varyantlarına özel işlemler yapabilir.

```rust
enum Status {
    Success,
    Error(String),
}

impl Status {
    fn is_success(&self) -> bool {
        matches!(self, Status::Success)
    }
}

fn main() {
    let s = Status::Success;
    println!("Başarılı mı? {}", s.is_success());
}
```
