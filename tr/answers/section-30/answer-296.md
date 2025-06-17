## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Harici Bağımlılıklar  
#### ✅ Cevap 296: `Cargo.toml`'da harici bağımlılıkları tanımlama

Bu örnekte, `Cargo.toml` dosyasına `rand` crate'i eklenir ve ana dosyada bu crate kullanılarak rastgele bir sayı üretilir. Harici bağımlılıklar, Rust projelerinde ek işlevsellik sağlar ve `Cargo.toml` dosyasında tanımlanır.

```toml
# Cargo.toml
[dependencies]
rand = "0.8"
```

```rust
// main.rs
tfn main() {
    let number: u8 = rand::random();
    println!("Random number: {}", number);
}
```
