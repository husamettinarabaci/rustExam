## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: Kendine Referanslı Struct'ların Neden Varsayılan Olarak Güvensiz Olduğunu Anlama
#### ✅ Cevap 741: Kendine referanslı struct'ların neden varsayılan olarak güvensiz olduğunu anlama

Kendine referanslı struct'lar, kendi alanlarına referans tutan yapılardır. Böyle bir struct bellekte taşındığında, referanslar geçersiz hale gelir ve tanımsız davranışa yol açar. Rust'ın sahiplik ve ödünç alma kuralları, taşındıktan sonra bu referansların güvenliğini garanti edemez.

```rust
struct KendineRef<'a> {
    veri: String,
    veri_ref: Option<&'a String>,
}

fn main() {
    let mut s = KendineRef { veri: String::from("merhaba"), veri_ref: None };
    s.veri_ref = Some(&s.veri);
    // s burada taşınırsa, s.veri_ref geçersiz belleğe işaret eder!
}
```

Bu nedenle, Rust'ta kendine referanslı struct'lar varsayılan olarak güvensiz kabul edilir.
