## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik
### 🔹 Kategori: Fonksiyonlardan referans döndürme (ömürlerle)
#### ✅ Cevap 377: Fonksiyonlardan referans döndürme (ömürlerle)

Fonksiyonlardan referans döndürürken, döndürülen referansın ömrü fonksiyona giren referansın ömrüyle ilişkilendirilmelidir. Rust'ta bu ilişkiyi ömür (lifetime) anotasyonları ile belirtiriz. Aşağıdaki örnekte, bir dizideki en büyük değerin referansı güvenli şekilde döndürülmektedir.

```rust
fn max_ref<'a>(slice: &'a [i32]) -> &'a i32 {
    slice.iter().max().unwrap()
}

fn main() {
    let numbers = vec![10, 20, 30, 40];
    let max = max_ref(&numbers);
    println!("En büyük değer: {}", max);
}
```

Burada `max_ref` fonksiyonu, aldığı dilimin ömrüyle aynı ömre sahip bir referans döndürür. Böylece sarkan referans oluşmaz.
