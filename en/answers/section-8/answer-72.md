## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime with Multiple References  
#### ✅ Answer 72: Lifetime with multiple references

When a function takes references with potentially different lifetimes, you can use multiple lifetime parameters to describe their relationships. The returned reference must be tied to the shorter lifetime.

```rust
fn longest<'a, 'b, 'out>(x: &'a str, y: &'b str) -> &'out str 
where
    'a: 'out,
    'b: 'out,
{
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world!");
    let result = longest(&s1, &s2);
    println!("The longest string is: {}", result);
}
```

> Note: In practice, you often need to specify the output lifetime as the shorter of the two input lifetimes, or use a single lifetime if both must match. The above example demonstrates the syntax for multiple lifetimes.
