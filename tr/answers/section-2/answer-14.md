## 📘 Bölüm: Değişkenler, Sabitler ve Türler  
### 🔹 Kategori: Diziler (Array)  
#### ✅ Cevap 14: `for` döngüsü ile dizi elemanlarını yazdırma

**Açıklama:**

Rust'ta bir dizinin elemanları üzerinde `for` döngüsü ile gezilebilir.

```rust
fn main() {
    let dizi = [10, 20, 30, 40, 50];
    for eleman in dizi.iter() {
        println!("{}", eleman);
    }
}
```
