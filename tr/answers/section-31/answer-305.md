## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Özyinelemeli Enumlar ve Box Kullanımı  
#### ✅ Cevap 305: Box kullanarak özyinelemeli enumlar oluşturma

Rust'ta bir enumun kendi tipinden değer barındırabilmesi için, bu değeri bir işaretçi türü (örneğin `Box`) ile sarmalamak gerekir. Aksi halde derleyici, enumun boyutunu derleme zamanında belirleyemez. Aşağıdaki örnekte, özyinelemeli bir `List` enumu tanımlanmış ve tüm elemanları özyinelemeli olarak yazdıran bir fonksiyon uygulanmıştır.

```rust
#[derive(Debug)]
enum List {
    Cons(i32, Box<List>),
    Nil,
}

fn print_list(list: &List) {
    match list {
        List::Cons(val, next) => {
            print!("{} ", val);
            print_list(next);
        }
        List::Nil => println!("end"),
    }
}

fn main() {
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Cons(3, Box::new(List::Nil))))));
    print_list(&list);
}
```
