## 📘 Bölüm: Geleceğin Rust'ı ve Deneysel Özellikler  
### 🔹 Kategori: Const Generics ve Jenerik İlişkili Tipler (GATs)  
#### ✅ Cevap 992: `const generics` ve jenerik ilişkili tipler kullanımı

Const generics ve jenerik ilişkili tipler (GATs), nightly Rust'ta kullanılabilen güçlü özelliklerdir. Bu özellikler, daha esnek ve tip güvenli soyutlamalar yazmanıza olanak tanır.

Örnek: Const generics ile boyutu jenerik olan bir dizi sarmalayıcı tanımlama.

```rust
#![feature(const_generics)]

struct DiziSarmalayıcı<T, const N: usize> {
    veri: [T; N],
}

impl<T, const N: usize> DiziSarmalayıcı<T, N> {
    fn yeni(veri: [T; N]) -> Self {
        DiziSarmalayıcı { veri }
    }
    fn uzunluk(&self) -> usize {
        N
    }
}

fn main() {
    let arr = DiziSarmalayıcı::yeni([1, 2, 3]);
    println!("Uzunluk: {}", arr.uzunluk());
}
```

Bu kodu çalıştırmak için:
- `main.rs` olarak kaydedin.
- `cargo +nightly run` veya `rustc +nightly main.rs && ./main` ile derleyin ve çalıştırın.

Bu örnek, const generics ile tiplerin sabit değerlerle nasıl parametreleştirilebileceğini gösterir.
