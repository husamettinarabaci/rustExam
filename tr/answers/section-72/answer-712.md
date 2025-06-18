## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Fonksiyon imzalarında birden fazla ömür kullanımı  
#### ✅ Cevap 712: Fonksiyon imzalarında birden fazla ömür kullanımı

Bu örnekte, iki farklı ömür parametresi alan bir fonksiyon tanımlanmıştır. Dönen referans, ilk parametrenin ömrüne bağlıdır.

```rust
fn first<'a, 'b>(x: &'a str, _y: &'b str) -> &'a str {
    x
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world");
    let result = first(&s1, &s2);
    println!("Sonuç: {}", result);
}
```

Burada `'a` ve `'b` ömürleri farklı olabilir. Fonksiyonun döndürdüğü referans yalnızca `'a` ömrü kadar geçerlidir.
