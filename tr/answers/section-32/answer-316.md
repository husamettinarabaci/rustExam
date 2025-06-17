## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Harici Tipler için Trait Uygulama  
#### ✅ Cevap 316: Harici bir tip için trait uygulama

Rust'ta kendi trait'inizi standart kütüphanedeki bir tipe (ör. `String`) uygulayabilirsiniz. Bu örnekte, `Shout` adında bir trait tanımlanır ve `String` için uygulanır. Trait metodu stringi büyük harfe çevirip ünlem ekler.

```rust
trait Shout {
    fn shout(&self) -> String;
}

impl Shout for String {
    fn shout(&self) -> String {
        format!("{}!", self.to_uppercase())
    }
}

fn main() {
    let s = String::from("merhaba rust");
    println!("{}", s.shout());
}
```
