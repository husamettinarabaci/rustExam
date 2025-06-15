## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Görünürlüğü Temelleri  
#### ✅ Cevap 125: Modül görünürlüğü temelleri

Rust'ta modül içindeki fonksiyonlar varsayılan olarak özeldir (private). Bir fonksiyonu dışarıdan erişilebilir yapmak için `pub` anahtar kelimesi kullanılır. Aşağıda, `area` fonksiyonu herkese açık, `perimeter` ise özeldir. `main` fonksiyonunda sadece `area` çağrılabilir.

```rust
mod shapes {
    pub fn area() -> i32 {
        10
    }
    fn perimeter() -> i32 {
        20
    }
}

fn main() {
    println!("Alan: {}", shapes::area());
    // Aşağıdaki satır derleme hatasına yol açar:
    // println!("Çevre: {}", shapes::perimeter());
}
```
