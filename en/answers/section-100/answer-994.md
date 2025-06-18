## 📘 Section: Future Rust and Experimental Features  
### 🔹 Category: GATs (Generic Associated Types) in practice  
#### ✅ Answer 994: GATs (Generic Associated Types) in practice

GATs (Generic Associated Types) allow associated types in traits to themselves be generic. This enables more flexible and powerful trait definitions, especially for collections and borrowing scenarios.

For example, the following trait uses a GAT:

```rust
#![feature(generic_associated_types)]

trait MyTrait {
    type Item<'a>;
    fn get<'a>(&'a self) -> Self::Item<'a>;
}
```

With GATs, traits can define associated types that depend on lifetimes or type parameters, making it easier to express complex abstractions in Rust.
