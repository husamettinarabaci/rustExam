## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Fonksiyon İmzalarında Trait Sınırları  
#### ✅ Cevap 206: Fonksiyon imzalarında trait sınırları

Fonksiyon imzalarında trait sınırları kullanarak, belirli bir trait'i uygulayan herhangi bir türü kabul edebilirsiniz. Burada, `print_summary` fonksiyonu `Summarizable` trait'ini uygulayan tüm türleri kabul eder.

```rust
trait Summarizable {
    fn summary(&self) -> String;
}

struct Article {
    headline: String,
}

struct Tweet {
    username: String,
}

impl Summarizable for Article {
    fn summary(&self) -> String {
        format!("Makale: {}", self.headline)
    }
}

impl Summarizable for Tweet {
    fn summary(&self) -> String {
        format!("Tweet: @{}", self.username)
    }
}

fn print_summary<T: Summarizable>(item: T) {
    println!("{}", item.summary());
}

fn main() {
    let a = Article { headline: String::from("Rust Trait'leri Kolaylaştırıldı") };
    let t = Tweet { username: String::from("rustacean") };
    print_summary(a);
    print_summary(t);
}
```
