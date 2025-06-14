## 📚 Section: Traits  
### 🔹 Category: Multiple Traits  
#### ✅ Answer 94: Implementing multiple traits

**Explanation:**
A struct can implement multiple traits, each providing different behavior.

```rust
trait A { fn a(&self); }
trait B { fn b(&self); }

struct MyStruct;
impl A for MyStruct {
    fn a(&self) { println!("A"); }
}
impl B for MyStruct {
    fn b(&self) { println!("B"); }
}

fn main() {
    let s = MyStruct;
    s.a();
    s.b();
}
```
