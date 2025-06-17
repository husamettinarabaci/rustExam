## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Recursive Enums with Box  
#### ✅ Answer 305: Creating recursive enums using Box

In Rust, to allow an enum to contain a value of its own type, you must wrap the value in a pointer type such as `Box`. Otherwise, the compiler cannot determine the size of the enum at compile time. In the example below, a recursive `List` enum is defined, and a function is implemented to recursively print all elements.

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
