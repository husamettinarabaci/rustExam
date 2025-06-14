## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Slice ve Dizilerde Eşleme  
#### ✅ Cevap 167: Slice ve dizilerde desen eşleme

Rust'ta slice ve dizilerde desen eşleme ile farklı durumları yönetebilirsiniz. Örnek:

```rust
fn slice_tanimla(slice: &[i32]) {
    match slice {
        [] => println!("Boş"),
        [x] => println!("Tek eleman: {}", x),
        [1, .., 9] => println!("1 ile başlıyor ve 9 ile bitiyor"),
        _ => println!("Diğer"),
    }
}
```

Bu fonksiyon, slice desenlerinde boş, tek elemanlı ve belirli başlangıç/bitiş değerlerini eşlemeyi gösterir.
