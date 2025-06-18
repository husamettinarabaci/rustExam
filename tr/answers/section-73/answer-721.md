## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Karmaşık bound ve `where` ile trait implementasyonu  
#### ✅ Cevap 721: Karmaşık bound ve `where` ile trait implementasyonu

Aşağıda, birden fazla trait bound içeren ve `where` ifadesiyle yazılmış bir fonksiyon örneği verilmiştir.

```rust
fn print_sum<T, U>(a: T, b: U)
where
    T: std::fmt::Display + std::ops::Add<U, Output = T>,
    U: std::fmt::Display,
{
    let sum = a + b;
    println!("Toplam: {}", sum);
}

fn main() {
    print_sum(3, 4);
    print_sum(1.5, 2.5);
}
```

`where` ifadesi, trait bound'larını fonksiyon imzasından ayırarak kodun okunabilirliğini artırır.
