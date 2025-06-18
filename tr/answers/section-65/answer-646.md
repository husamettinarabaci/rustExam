## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 646: `#[repr]` ile bellek düzeni optimizasyonu

`#[repr(C)]` ve `#[repr(packed)]` gibi öznitelikler, yapıların bellek düzenini kontrol etmeye yarar. `#[repr(C)]` C diline uyumlu düzen sağlar, `#[repr(packed)]` ise alanları sıkıştırır.

```rust
#[repr(C)]
struct CStruct {
    a: u8,
    b: u32,
}

#[repr(packed)]
struct PackedStruct {
    a: u8,
    b: u32,
}

fn main() {
    println!("CStruct size: {}", std::mem::size_of::<CStruct>());
    println!("PackedStruct size: {}", std::mem::size_of::<PackedStruct>());
}
```

Farklı `repr` öznitelikleri, bellek hizalaması ve performans üzerinde doğrudan etkilidir.
