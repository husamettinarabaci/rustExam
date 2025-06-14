## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: Vektörler  
#### ✅ Cevap 61: Bir vektör oluşturmak ve kullanmak

**Açıklama:**
Vektörler büyüyebilen dizilerdir. `push` ile eleman eklenir, döngüyle gezilebilir.

```rust
fn main() {
    let mut v = Vec::new();
    v.push(1);
    v.push(2);
    v.push(3);
    for x in &v {
        println!("{}", x);
    }
}
```
