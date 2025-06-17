## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Option<T> ve Result<T, E> Arasında Dönüşüm  
#### ✅ Cevap 323: Option<T> ve Result<T, E> Arasında Dönüşüm

Option ve Result tipleri arasında dönüşüm için `ok_or`, `ok_or_else`, `ok`, ve `err` gibi metodlar kullanılır. `Option<T>`'ı `Result<T, E>`'ye dönüştürmek için `ok_or` ile hata mesajı eklenir. `Result<T, E>`'yi `Option<T>`'a dönüştürmek için `ok` metodu kullanılır.

```rust
fn main() {
    // Option<T> -> Result<T, E>
    let maybe_num: Option<i32> = Some(42);
    let res: Result<i32, &str> = maybe_num.ok_or("Değer yok!");
    println!("Option'dan Result'a: {:?}", res);

    let none_val: Option<i32> = None;
    let res_none: Result<i32, &str> = none_val.ok_or("Değer yok!");
    println!("None'dan Result'a: {:?}", res_none);

    // Result<T, E> -> Option<T>
    let ok_val: Result<i32, &str> = Ok(7);
    let opt = ok_val.ok();
    println!("Result'tan Option'a: {:?}", opt);

    let err_val: Result<i32, &str> = Err("Bir hata oluştu");
    let opt_err = err_val.ok();
    println!("Err'den Option'a: {:?}", opt_err);
}
```
