## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Documenting Safety Invariants in Unsafe APIs
#### ✅ Answer 660: Documenting safety invariants in unsafe APIs

Documenting safety invariants is critical for unsafe APIs. Always specify what the caller must guarantee for safety.

```rust
/// # Safety
///
/// The pointer `ptr` must be valid and properly aligned for `T`.
unsafe fn deref_ptr<T>(ptr: *const T) -> T {
    // SAFETY: The caller must guarantee ptr is valid.
    *ptr
}
```

Clear documentation helps users avoid undefined behavior and makes code review easier.
