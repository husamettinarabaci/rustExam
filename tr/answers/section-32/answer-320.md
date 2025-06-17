## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Trait uyumu ve yetim kuralı  
#### ✅ Cevap 320: Trait uyumu ve yetim kuralı nedir?

Trait uyumu (coherence), Rust'ta trait implementasyonlarının çakışmasını önleyen kurallar bütünüdür. Yetim kuralı (orphan rule), bir trait'in bir tipe uygulanabilmesi için ya trait'in ya da tipin bulunduğu crate'in sizin crate'iniz olması gerektiğini belirtir. Bu, çakışmaları ve beklenmedik davranışları önler.

Aşağıda iki örnek gösterilmiştir:

1. **Kendi trait'inizi kendi tipiniz için uygulamak (izinli):**

```rust
trait MyTrait {
    fn hello(&self);
}

struct MyType;

impl MyTrait for MyType {
    fn hello(&self) {
        println!("Hello from MyType!");
    }
}
```

2. **Harici bir trait'i harici bir tip için uygulamaya çalışmak (izinli değil):**

```rust
// Diyelim ki hem Display trait'i hem de Vec<T> tipi std kütüphanesinden geliyor.
// Aşağıdaki implementasyon derleyici tarafından reddedilir:

// impl std::fmt::Display for Vec<i32> {
//     fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
//         write!(f, "Vec: {:?}", self)
//     }
// }
// Hata: E0117 - only traits defined in the current crate can be implemented for types defined outside of the crate
```

Bu kural, farklı crate'lerde aynı trait'in aynı tipe birden fazla kez uygulanmasını ve çakışmaları önler.
