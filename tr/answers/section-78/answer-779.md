## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Çoklu platform oyun dağıtımı  
#### ✅ Cevap 779: Çoklu platform oyun dağıtımı

Rust ile çoklu platform oyun dağıtımı için temel adımlar şunlardır:

- `cargo build --release` ile hedef platformda derleme yapılır.
- Platforma özel bağımlılıklar (ör. SDL2, OpenGL) için uygun kütüphaneler yüklenir.
- Windows için: `cargo build --release --target x86_64-pc-windows-gnu`
- Linux için: `cargo build --release --target x86_64-unknown-linux-gnu`
- macOS için: `cargo build --release --target x86_64-apple-darwin`
- Dağıtım için `cross`, `cargo-bundle` veya `cargo-dist` gibi araçlar kullanılabilir.

Her platformda test etmek ve bağımlılıkların eksiksiz olduğundan emin olmak önemlidir.
