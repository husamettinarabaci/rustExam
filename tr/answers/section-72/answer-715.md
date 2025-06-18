## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Ömürlü referans tutan yapılar tanımlama  
#### ✅ Cevap 715: Ömürlü referans tutan yapılar tanımlama

Aşağıda, ömür parametresi içeren ve referans tutan bir struct örneği verilmiştir.

```rust
struct Holder<'a> {
    data: &'a str,
}

fn main() {
    let s = String::from("Rust");
    let h = Holder { data: &s };
    println!("Veri: {}", h.data);
}
```

`Holder` yapısı, içindeki referansın ömrünü `'a` parametresiyle belirtir. Böylece, struct'ın örneği yalnızca referansın geçerli olduğu sürece kullanılabilir.
