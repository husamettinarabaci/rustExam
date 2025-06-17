## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Kütüphane ve İkili Crate'leri Organize Etme En İyi Uygulamaları  
#### ✅ Cevap 298: Kütüphane ve ikili crate'leri organize etme en iyi uygulamaları

Rust projelerinde ortak kodun `src/lib.rs` dosyasında, uygulama giriş noktasının ise `src/main.rs` dosyasında tutulması önerilir. Böylece hem kütüphane hem de ikili crate aynı kodu paylaşabilir. `main.rs` dosyası, kütüphane fonksiyonlarını doğrudan kullanabilir.

**Proje yapısı:**
```
my_project/
├── Cargo.toml
└── src/
    ├── lib.rs
    └── main.rs
```

**src/lib.rs**
```rust
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

**src/main.rs**
```rust
use my_project::greet;

fn main() {
    println!("{}", greet("Rust"));
}
```

Bu yapı sayesinde ortak işlevler kütüphane crate'inde tutulur ve hem testlerde hem de ikili crate'te tekrar kullanılabilir.
