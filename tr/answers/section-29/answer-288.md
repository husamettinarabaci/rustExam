## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Zorunlu desen eşleme gereksinimleri  
#### ✅ Cevap 288: Zorunlu desen eşleme gereksinimlerini anlama

Rust'ta match ifadelerinde, eşlenen değerin tüm olası varyantları için bir kol tanımlanmalıdır. Eğer tüm olasılıklar kapsanmazsa derleyici hata verir. Bu, güvenliğin ve hata önlemenin önemli bir parçasıdır.

Aşağıda eksik match kolları ile derleyici hatası alınan bir örnek ve doğru bir match kullanımı gösterilmiştir:

```rust
// Eksik match kolları ile hata:
enum Color {
    Red,
    Green,
    Blue,
}

fn print_color(color: Color) {
    match color {
        Color::Red => println!("Red"),
        Color::Green => println!("Green"),
        // Color::Blue eksik! Derleyici hata verir.
    }
}

// Doğru kullanım:
fn print_color_fixed(color: Color) {
    match color {
        Color::Red => println!("Red"),
        Color::Green => println!("Green"),
        Color::Blue => println!("Blue"),
    }
}
```
