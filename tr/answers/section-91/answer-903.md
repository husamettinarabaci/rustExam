## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Döngüleri Rust'ta manuel vektörleştirme
#### ✅ Cevap 903: Döngüleri Rust'ta manuel vektörleştirme

Bu çözümde, iki dizinin eleman bazında toplanması manuel olarak bir döngü ile yapılır. SIMD veya ek crate kullanılmadan temel vektörleştirme yaklaşımı gösterilmiştir.

```rust
fn main() {
    let a = [1u32; 16];
    let b = [2u32; 16];
    let mut c = [0u32; 16];
    for i in 0..16 {
        c[i] = a[i] + b[i];
    }
    println!("{:?}", c);
}
```
