## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 645: Inline anotasyonları ve fonksiyon çağrı maliyeti

`#[inline]` ve `#[inline(always)]` anotasyonları, derleyiciye fonksiyonları satır içi (inline) yapmasını önerir. Bu, fonksiyon çağrı maliyetini azaltabilir.

```rust
#[inline(always)]
fn add(a: u32, b: u32) -> u32 {
    a + b
}

fn main() {
    let mut sum = 0;
    for i in 0..1000 {
        sum += add(i, i);
    }
    println!("{}", sum);
}
```

Satır içi yapılan fonksiyonlar, çağrı maliyetini azaltarak performansı artırabilir. Ancak aşırı kullanımı kod şişkinliğine yol açabilir.
