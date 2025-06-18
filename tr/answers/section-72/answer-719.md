## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Karmaşık ömür ilişkili metotlar implementasyonu  
#### ✅ Cevap 719: Karmaşık ömür ilişkili metotlar implementasyonu

Aşağıda, birden fazla ömür parametresi kullanan bir struct ve metot örneği verilmiştir.

```rust
struct Pair<'a, 'b> {
    first: &'a str,
    second: &'b str,
}

impl<'a, 'b> Pair<'a, 'b> {
    fn longest<'c>(&'c self) -> &'c str {
        if self.first.len() > self.second.len() {
            self.first
        } else {
            self.second
        }
    }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("rustacean");
    let pair = Pair { first: &s1, second: &s2 };
    println!("En uzun: {}", pair.longest());
}
```

Burada hem struct hem de metot birden fazla ömür parametresiyle tanımlanmıştır. `longest` metodu, `self` referansının ömrüne bağlı bir referans döndürür.
