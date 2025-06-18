## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Açık ömür anotasyonlu fonksiyonlar yazma  
#### ✅ Cevap 711: Açık ömür anotasyonlu fonksiyonlar yazma

Bu örnekte, iki farklı referans parametresi alan ve ömür anotasyonu gerektiren bir fonksiyon tanımlanmıştır. Fonksiyonun imzasında `'a` ömrü açıkça belirtilmiştir ve dönen referansın ömrü de bu ömre bağlıdır.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("rustacean");
    let s2 = String::from("rust");
    let result = longest(&s1, &s2);
    println!("En uzun: {}", result);
}
```

Fonksiyonun imzasındaki `'a` ömrü, hem giriş hem de çıkış referanslarının aynı ömre sahip olmasını garanti eder.
