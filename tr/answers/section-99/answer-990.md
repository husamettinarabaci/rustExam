## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Çapraz Dil Hata Ayıklama  
#### ✅ Cevap 990: Çapraz dil hata ayıklama

Rust ve C/C++ içeren projelerde GDB ile hem Rust hem de C kodunu birlikte hata ayıklayabilirsiniz.

Örneğin, Rust fonksiyonunda hata ayıklama çıktısı:
```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    println!("Rust: a = {}, b = {}", a, b);
    a + b
}
```

C tarafı:
```c
extern int add(int, int);
int main() {
    int result = add(2, 3);
}
```

Terminalde:
```
gdb --args ./main
```
Hem Rust hem de C kodunda breakpoint koyup değişkenleri inceleyebilirsiniz.
