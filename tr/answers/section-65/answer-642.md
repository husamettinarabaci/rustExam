## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 642: `perf` ve flamegraph ile profil çıkarma

`perf` ve flamegraph araçları, Rust programlarının performansını analiz etmek için kullanılır. `perf` ile ham profil verisi toplanır, flamegraph ile bu veriler görselleştirilir.

```rust
fn main() {
    let mut sum = 0;
    for i in 0..1_000_000 {
        sum += i;
    }
    println!("Sum: {}", sum);
}
```

Profil çıkarma adımları:

1. Programı `--release` ile derleyin.
2. `perf record ./target/release/your_program`
3. `perf script | flamegraph > flamegraph.svg`

Flamegraph ile hangi fonksiyonların ne kadar zaman aldığını görsel olarak analiz edebilirsiniz.
