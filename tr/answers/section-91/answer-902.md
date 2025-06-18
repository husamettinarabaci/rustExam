## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: `packed_simd` ile SIMD destekli kod yazma
#### ✅ Cevap 902: `packed_simd` ile SIMD destekli kod yazma

Bu çözümde, `packed_simd` crate'i ile SIMD toplama işlemi gösterilmektedir. `f32x8` tipi, iki adet 8 elemanlı `f32` dizisini SIMD talimatlarıyla paralel olarak toplamanıza olanak tanır.

```rust
use packed_simd::f32x8;

fn main() {
    let a = f32x8::from_slice_aligned(&[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]);
    let b = f32x8::from_slice_aligned(&[8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0]);
    let c = a + b;
    println!("{:?}", c);
}
```
