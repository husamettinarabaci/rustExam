## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Profil ve Analiz Araçları  
#### ✅ Cevap 971: `perf` ve Linux profil araçları ile analiz

`perf`, Linux'ta programların hangi fonksiyonlarda ne kadar zaman harcadığını analiz etmek için kullanılır. Rust programınızı `--release` ile derleyip çalıştırdıktan sonra `perf record` ve `perf report` komutları ile fonksiyon düzeyinde analiz yapabilirsiniz.

```rust
fn main() {
    let mut sum = 0u64;
    for i in 0..1_000_000_000 {
        sum = sum.wrapping_add(i);
    }
    println!("Sum: {}", sum);
}
```

Terminalde:
```
cargo build --release
perf record ./target/release/<program_adı>
perf report
```
`perf report` çıktısında en çok zaman harcanan fonksiyonları görebilirsiniz.
