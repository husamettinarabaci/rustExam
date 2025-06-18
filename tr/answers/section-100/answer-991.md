## 📘 Bölüm: Geleceğin Rust'ı ve Deneysel Özellikler  
### 🔹 Kategori: Nightly Özellikler ve Dil Evrimi  
#### ✅ Cevap 991: Nightly Rust özelliklerini keşfetme

Nightly Rust, henüz kararlı sürümlerde bulunmayan deneysel özellikleri kullanmanıza olanak tanır. Nightly'a özel bir özelliği kullanmak için:

- Nightly toolchain'i kullanmalısınız (`rustup default nightly` veya `cargo +nightly run`).
- Özelliği crate kökünde `#![feature(...)]` ile etkinleştirin.

Örnek: Hata yönetimini sadeleştiren `try_blocks` nightly özelliği.

```rust
#![feature(try_blocks)]

fn try_block_ornek() -> Result<i32, &'static str> {
    let sonuc: Result<i32, &'static str> = try {
        let x = "42".parse::<i32>().map_err(|_| "parse hatası")?;
        x + 1
    };
    sonuc
}

fn main() {
    match try_block_ornek() {
        Ok(val) => println!("Başarılı: {}", val),
        Err(e) => println!("Hata: {}", e),
    }
}
```

Bu kodu çalıştırmak için:
- `main.rs` olarak kaydedin.
- `cargo +nightly run` veya `rustc +nightly main.rs && ./main` ile derleyip çalıştırın.

Bu örnek, Rust'ta nightly'a özel bir özelliğin nasıl etkinleştirileceğini ve kullanılacağını gösterir.
