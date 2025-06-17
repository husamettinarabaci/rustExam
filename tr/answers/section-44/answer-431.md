## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Box<T> ne zaman kullanılır?  
#### ✅ Cevap 431: Box<T> ne zaman kullanılır?

`Box<T>`, bir değeri heap'te saklamak ve özyinelemeli veri yapıları oluşturmak için kullanılır. Stack'te yerden tasarruf sağlar ve derleyicinin boyutu bilinmeyen tiplerle çalışmasına olanak tanır.

```rust
fn main() {
    let b = Box::new(42);
    println!("Box içindeki değer: {}", b);
}
```
