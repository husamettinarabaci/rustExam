## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: Vektörler  
#### ✅ Cevap 123: Vektör üzerinde yineleme

**Açıklama:**
`for` döngüsü ile yineleme yapılır. `&v` ile değiştirilemez, `&mut v` ile değiştirilebilir yineleme yapılır.

```rust
let mut v = vec![1, 2, 3];
for x in &v {
    println!("{}", x);
}
for x in &mut v {
    *x += 1;
}
```
