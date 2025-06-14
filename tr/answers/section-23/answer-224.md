## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik fonksiyonlar  
#### ✅ Cevap 224: Ömürlü jenerik fonksiyonlar

Jeneriklerle birlikte ömür parametreleri de tanımlanabilir. Bu, referansların geçerlilik süresini belirtir.

```rust
fn en_uzun<'a, T>(x: &'a T, y: &'a T) -> &'a T {
    if true { x } else { y }
}
```

Burada `'a` ömür parametresi, dönen referansın iki girdinin ömrü kadar geçerli olmasını sağlar.
