## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: move closure'ları ile değişkenleri yakalama ve değiştirme  
#### ✅ Cevap 360: move closure'ları ile değişkenleri yakalama ve değiştirme

Bu örnekte, `move` anahtar kelimesiyle closure tanımlandığında, closure vektörün sahipliğini alır ve vektör closure dışında artık kullanılamaz. Closure içinde vektörün ilk elemanı değiştirilebilir. Rust'ın sahiplik kuralları gereği, closure'dan sonra vektöre erişmeye çalışmak derleme hatası verir.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3];
    let mut modify = move || {
        numbers[0] = 42;
        println!("İçeride: {:?}", numbers);
    };
    modify();
    // println!("Dışarıda: {:?}", numbers); // HATA: numbers artık kullanılamaz
}
```
