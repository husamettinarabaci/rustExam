## 📘 Bölüm: Mimari Refaktör ve Evrim  
### 🔹 Kategori: Mimari Refaktör ve Evrim  
#### ✅ Cevap 1391: Eski Rust kod tabanlarını refaktör etme

Kod tekrarını azaltmak için fonksiyonel soyutlama yapılmıştır. Refaktör öncesi aynı kod parçası birden fazla yerde bulunuyordu. Refaktör sonrası ortak kod bir fonksiyona taşındı ve tekrarlar ortadan kaldırıldı.

```rust
// Refaktör öncesi
fn main() {
    println!("Hello, Alice!");
    println!("Hello, Bob!");
}

// Refaktör sonrası
fn greet(name: &str) {
    println!("Hello, {name}!");
}

fn main() {
    greet("Alice");
    greet("Bob");
}
```

Bu değişiklik kodun bakımını kolaylaştırır, hata riskini azaltır ve okunabilirliği artırır.
