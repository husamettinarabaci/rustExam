## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo.toml'da Özellik Kullanımı  
#### ✅ Cevap 148: Cargo.toml'da özellik kullanımı

Rust crate'lerinde özellik (feature) kullanmak için, `Cargo.toml` dosyasındaki `[features]` bölümünde tanımlama yaparsınız:

```toml
[features]
extras = []
```

Bir özelliği derlerken veya çalıştırırken etkinleştirmek için:
```bash
cargo build --features extras
```

Özellikleri koşullu derleme için `#[cfg(feature = "extras")]` ile kullanabilirsiniz:

```rust
#[cfg(feature = "extras")]
fn ekstra_fonksiyon() {
    println!("Ekstra özellik etkin!");
}
```

Özellikler, isteğe bağlı işlevsellik eklemenizi ve crate'inizde derleme kontrolü sağlamanızı sağlar.
