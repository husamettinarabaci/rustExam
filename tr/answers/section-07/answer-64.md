## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: Dilimler  
#### ✅ Cevap 64: Dilimlerle çalışmak

**Açıklama:**
Dilimler, bir dizinin bir bölümüne referans verir ve kopyalama yapmaz.

```rust
fn main() {
    let dizi = [1, 2, 3, 4, 5];
    let dilim = &dizi[1..4];
    for x in dilim {
        println!("{}", x);
    }
}
```
