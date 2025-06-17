## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik
### 🔹 Kategori: Sahiplik ve ödünç alma hataları
#### ✅ Cevap 376: Çift taşıma ve taşıma sonrası kullanım hatalarından kaçınma

Bir vektörün sahipliğini bir fonksiyona aktardıktan sonra, aynı vektörü tekrar kullanmak veya başka bir fonksiyona aktarmak derleyici hatasına yol açar. Rust, sahipliği taşınan bir değerin tekrar kullanılmasını engeller. Bu tür hatalardan kaçınmak için, sahipliği aktardıktan sonra ilgili değişkeni tekrar kullanmamaya dikkat edin.

```rust
fn take_ownership(v: Vec<i32>) {
    println!("Sahiplik alındı: {:?}", v);
}

fn main() {
    let v = vec![1, 2, 3];
    take_ownership(v);
    // take_ownership(v); // HATA: v'nin sahipliği zaten taşındı
    // println!("Vektör: {:?}", v); // HATA: v artık kullanılamaz
}
```
