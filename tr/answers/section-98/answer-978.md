## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Async Kod ve Future'ları Profil Etme  
#### ✅ Cevap 978: Async kod ve future'ları profil etme

Async Rust uygulamalarında darboğazları tespit etmek için `tokio-console` gibi araçlar kullanılabilir. Bu araçlar, hangi future'ın veya görevin ne kadar süre çalıştığını görsel olarak sunar.

Örnek kullanım:

Cargo.toml'a ekleyin:
```toml
[dependencies]
tokio = { version = "1", features = ["full"] }
tokio-console = "0.1"
```

Kodda:
```rust
#[tokio::main]
async fn main() {
    console_subscriber::init();
    // async görevleriniz burada
}
```

Terminalde:
```
cargo run
```
`tokio-console` ile hangi future'ların yavaşladığını analiz edebilirsiniz.
