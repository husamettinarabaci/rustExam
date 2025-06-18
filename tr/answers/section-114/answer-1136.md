## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Lazy başlatma için `OnceCell` ve `Lazy`
#### ✅ Cevap 1136: Lazy başlatma için `OnceCell` ve `Lazy`

`OnceCell` ve `Lazy`, bir değerin yalnızca ilk erişimde başlatılmasını sağlar.

```rust
use once_cell::sync::Lazy;

static CONFIG: Lazy<String> = Lazy::new(|| {
    println!("Başlatılıyor...");
    "Ayarlar".to_string()
});

fn main() {
    println!("{}", *CONFIG);
}
```
Bu örnekte, `CONFIG` ilk erişimde başlatılır.
