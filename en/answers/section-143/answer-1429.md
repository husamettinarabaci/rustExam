## 📘 Section: Compile-Time Performance Optimization
### 🔹 Category: Build Artifact Caching
#### ✅ Answer 1429: Caching build artifacts

Caching build artifacts allows repeated builds of the same code to be much faster. Tools like `sccache` or `ccache` cache build outputs and reuse them for unchanged code.

```bash
sccache cargo build
```

Caching is especially useful in CI/CD and large projects to reduce build times.
