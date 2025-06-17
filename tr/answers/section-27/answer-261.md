## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Çoklu Ömürler ve Fonksiyonlar  
#### ✅ Cevap 261: Birden fazla ömürlü fonksiyonlar yazma

Rust'ta bir fonksiyonun birden fazla ömür parametresi alması, farklı referansların ömürlerinin birbirinden bağımsız olmasını sağlar. Aşağıdaki örnekte, iki farklı referans parametresi için ayrı ömürler tanımlanmıştır. Böylece fonksiyon, iki farklı kaynaktan gelen referansları güvenli şekilde işleyebilir.

```rust
fn compare_lengths<'a, 'b>(a: &'a str, b: &'b str) -> usize {
    if a.len() > b.len() {
        a.len()
    } else {
        b.len()
    }
}

fn main() {
    let s1 = String::from("merhaba");
    let s2 = String::from("dünya");
    let len = compare_lengths(&s1, &s2);
    println!("En uzun uzunluk: {}", len);
}
```

Bu örnekte `'a` ve `'b` ömürleri birbirinden bağımsızdır ve fonksiyon iki farklı referansı güvenle karşılaştırabilir.
