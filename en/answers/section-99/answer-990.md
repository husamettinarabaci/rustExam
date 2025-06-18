## 📘 Section: Language Interoperability  
### 🔹 Category: Cross-language Debugging  
#### ✅ Answer 990: Debugging interoperability issues

In projects with Rust and C/C++, you can use GDB to debug both Rust and C code together.

For example, add debug output in the Rust function:
```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    println!("Rust: a = {}, b = {}", a, b);
    a + b
}
```

C side:
```c
extern int add(int, int);
int main() {
    int result = add(2, 3);
}
```

In the terminal:
```
gdb --args ./main
```
You can set breakpoints and inspect variables in both Rust and C code.
