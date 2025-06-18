## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Bellek Analizi  
#### ✅ Cevap 973: `valgrind` ve `massif` ile bellek profil çıkarma

`valgrind`'in `massif` aracı, bir programın bellek kullanımını zaman içinde analiz eder. Rust programınızı aşağıdaki gibi çalıştırabilirsiniz:

```rust
fn main() {
    let mut v = Vec::new();
    for i in 0..10_000_000 {
        v.push(i);
    }
    println!("Length: {}", v.len());
}
```

Terminalde:
```
cargo build --release
valgrind --tool=massif ./target/release/<program_adı>
ms_print massif.out.<pid>
```
`ms_print` çıktısı, bellek kullanımının zaman içindeki değişimini ve en çok bellek kullanan fonksiyonları gösterir.
