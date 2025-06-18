# 📘 Bölüm: Fonksiyonlar I  
## 🔹 Kategori: Fonksiyon Dönüş Tipleri  
### ✅ Cevap 44: Hiçbir şey döndürmeyen fonksiyon (`()`)

Rust'ta değer döndürmeyen fonksiyonların dönüş tipi birim türü `()` olur. Eğer dönüş tipi belirtilmezse varsayılan olarak `()` kabul edilir. Bu tür fonksiyonlar genellikle terminale yazdırma gibi yan etkiler için kullanılır.

```rust
fn print_message() {
    println!("No return value!");
}

fn main() {
    print_message();
}
```
