## 📘 Section: Closures and Ownership  
### 🔹 Category: Closures and Trait Bounds  
#### ✅ Answer 247: Closures and trait bounds

You can use `Fn`, `FnMut`, and `FnOnce` as trait bounds for closures.

```rust
fn call_fn<F: Fn()>(f: F) { f(); }
fn call_fnmut<F: FnMut()>(mut f: F) { f(); }
fn call_fnonce<F: FnOnce()>(f: F) { f(); }
```

- `Fn` for closures that don't mutate or consume captured variables.
- `FnMut` for closures that mutate captured variables.
- `FnOnce` for closures that consume captured variables.
