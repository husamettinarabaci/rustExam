## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Derleme Betikleri
#### ✅ Cevap 1277: `build.rs` ile kod üretimi

Derleme zamanında kod üretmek için derleme betiği kullanılabilir:

`build.rs`:
```rust
use std::fs;
fn main() {
    fs::write("src/uretilen.rs", "pub const DEGER: u32 = 42;").unwrap();
}
```

`main.rs`:
```rust
include!("uretilen.rs");
fn main() {
    println!("DEGER = {}", DEGER);
}
```

Betik, derlemeden önce `uretilen.rs` dosyasını oluşturur.
