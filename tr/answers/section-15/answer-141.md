## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo ile Yeni Crate Oluşturma  
#### ✅ Cevap 141: Cargo ile yeni crate oluşturma

Crate, Rust'ta derleme birimidir. Cargo, Rust'ın paket yöneticisi ve derleyicisidir. Yeni bir crate oluşturmak için:

- Yeni bir binary crate (çalıştırılabilir proje) oluşturmak için:

```bash
cargo new benim_projem
```

- Yeni bir kütüphane (library) crate oluşturmak için:

```bash
cargo new benim_kutuphanem --lib
```

Cargo aşağıdaki yapıyı oluşturur:

```
benim_projem/
├── Cargo.toml
└── src/
    └── main.rs

benim_kutuphanem/
├── Cargo.toml
└── src/
    └── lib.rs
```

- **Binary crate**: `main.rs` dosyasına sahiptir ve çalıştırılabilir dosya üretir.
- **Library crate**: `lib.rs` dosyasına sahiptir ve tekrar kullanılabilir bir kütüphane üretir.

Cargo.toml bağımlılık ve proje bilgilerini tutan manifest dosyasıdır.
