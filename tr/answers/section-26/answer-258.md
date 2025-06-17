## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Ömürler ve Derin Fonksiyonlar  
#### ✅ Cevap 258: Derin iç içe fonksiyonlarda ömür anotasyonları kullanma

Bu örnekte, birden fazla iç içe fonksiyonun yer aldığı ve ömür anotasyonlarının doğru şekilde kullanıldığı bir Rust kodu gösterilmektedir. Her fonksiyonun imzasında ömür parametreleri belirtilerek referansların güvenliği sağlanır.

```rust
fn outer<'a>(input: &'a str) -> &'a str {
    fn inner<'b>(s: &'b str) -> &'b str {
        fn deepest<'c>(t: &'c str) -> &'c str {
            t
        }
        deepest(s)
    }
    inner(input)
}

fn main() {
    let text = String::from("Rust lifetimes");
    let result = outer(&text);
    println!("{}", result);
}
```
