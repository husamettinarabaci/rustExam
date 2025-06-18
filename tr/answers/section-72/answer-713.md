## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Ömür çıkarım kuralları ve ne zaman elle belirtileceği  
#### ✅ Cevap 713: Ömür çıkarım kuralları ve ne zaman elle belirtileceği

Aşağıda, ömür çıkarımının otomatik çalıştığı ve elle ömür belirtmenin gerektiği iki örnek verilmiştir.

```rust
// Otomatik ömür çıkarımı ile çalışan fonksiyon:
fn first_char(s: &str) -> &str {
    &s[0..1]
}

// Birden fazla referans parametresi olduğunda, ömür çıkarımı yetersizdir:
// fn longest(x: &str, y: &str) -> &str { ... } // Derleme hatası
// Doğru hali:
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = String::from("rust");
    let s2 = String::from("lang");
    println!("İlk karakter: {}", first_char(&s1));
    println!("En uzun: {}", longest(&s1, &s2));
}
```

Tek referans parametresi olduğunda ömür çıkarımı yeterlidir. Birden fazla referans parametresi varsa, ömürleri elle belirtmek gerekir.
