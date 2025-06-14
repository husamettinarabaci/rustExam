## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Yaşam Süresi Parametreleri  
#### ✅ Cevap 80: Jeneriklerle yaşam süresi parametreleri kullanmak

**Açıklama:**
Yaşam süresi parametreleri, referansların geçerli olduğu süreyi jeneriklerle birlikte güvenli şekilde belirtir.

```rust
fn ilkini_al<'a, T>(dilim: &'a [T]) -> &'a T {
    &dilim[0]
}

fn main() {
    let arr = [1, 2, 3];
    println!("{}", ilkini_al(&arr));
}
```
