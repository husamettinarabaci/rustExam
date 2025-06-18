## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: SIMD ve Açık Vektörleştirme  
#### ✅ Cevap 599: SIMD ve açık vektörleştirme kullanımı

Rust'ta SIMD için std::arch veya ilgili crate'ler kullanılabilir. Aşağıda x86_64 SSE2 ile vektör toplama örneği verilmiştir:

```rust
#[cfg(target_arch = "x86_64")]
use std::arch::x86_64::*;
use std::time::Instant;

fn main() {
    let a = [1.0f32; 4];
    let b = [2.0f32; 4];
    let mut c = [0.0f32; 4];
    let start = Instant::now();
    unsafe {
        let va = _mm_loadu_ps(a.as_ptr());
        let vb = _mm_loadu_ps(b.as_ptr());
        let vc = _mm_add_ps(va, vb);
        _mm_storeu_ps(c.as_mut_ptr(), vc);
    }
    println!("SIMD result: {:?}", c);
    println!("Elapsed: {:?}", start.elapsed());
}
```
