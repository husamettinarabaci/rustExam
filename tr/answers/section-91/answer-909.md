## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Otomatik vektörleştirme ve derleyici bayrakları
#### ✅ Cevap 909: Otomatik vektörleştirme ve derleyici bayrakları

Otomatik vektörleştirme, derleyicinin skaler işlemleri (ör: döngü) otomatik olarak SIMD talimatlarına dönüştürmesidir. Rust'ın LLVM altyapısı, optimizasyon bayraklarıyla bunu yapabilir.

`-C target-cpu=native -C opt-level=3` ile agresif optimizasyon ve vektörleştirme etkinleştirilir.

Örnek:

```rust
fn main() {
    let mut a = [1.0f32; 1024];
    let b = [2.0f32; 1024];
    for i in 0..1024 {
        a[i] += b[i];
    }
    println!("{}", a[0]);
}
```

Şu şekilde derleyin:
```
cargo rustc --release -- -C target-cpu=native -C opt-level=3
```
