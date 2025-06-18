## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Ömür parametreli veri yapıları modelleme  
#### ✅ Cevap 720: Ömür parametreli veri yapıları modelleme

Aşağıda, ömür parametresi içeren bir struct örneği verilmiştir.

```rust
struct Borrowed<'a> {
    data: &'a i32,
}

fn main() {
    let value = 42;
    let b = Borrowed { data: &value };
    println!("Veri: {}", b.data);
}
```

Burada, `Borrowed` yapısı içindeki referansın ömrü `'a` parametresiyle belirtilir. Bu, referansın geçerli olduğu sürece struct'ın güvenli şekilde kullanılmasını sağlar.
