## 📘 Section: Compiler Internals and Language Design  
### 🔹 Category: Tracking performance regressions in rustc  
#### ✅ Answer 968: Tracking performance regressions in rustc

A performance regression is when a change negatively impacts the compiler's build time or output quality. In the Rust compiler, such regressions are tracked using automated benchmark tests. For example, if a pull request causes build times to increase in CI, it is reported as a regression and the code is reviewed.
