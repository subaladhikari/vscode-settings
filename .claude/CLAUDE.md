```markdown
# Project Code Standards

This project follows strict code quality, formatting, and maintainability standards powered by **Biome**. The codebase primarily uses TypeScript and React. Internal tooling may be available for linting, formatting, environment inspection, configuration analysis, testing, refactoring, and documentation support.

All generated documentation and markdown output should use GitHub Flavored Markdown (GFM).

Dollar signs are reserved for LaTeX math and must be escaped when used literally. Example: \$199.99.

---

# Quick Reference

- **Format code:** `bunx biome format --write .`
- **Lint code:** `bunx biome lint .`
- **Check formatting + linting:** `bunx biome check .`
- **Auto-fix issues:** `bunx biome check --write .`

Biome is used as the unified formatter and linter for this repository.

---

# Core Principles

- Write code that is accessible, performant, type-safe, and maintainable.
- Prefer clarity and explicit intent over overly compact implementations.
- Keep architecture predictable and easy to reason about.
- Favor consistency across the codebase.
- Avoid unnecessary abstractions and premature optimization.

---

# Type Safety & Explicitness

- Use explicit types where they improve readability and maintainability.
- Prefer `unknown` over `any` when the type is not yet known.
- Use `as const` for immutable literals where appropriate.
- Prefer type narrowing over unsafe assertions.
- Extract magic numbers and repeated literals into named constants.
- Keep public APIs strongly typed.

---

# Modern TypeScript & JavaScript

- Prefer `const` over `let`; never use `var`.
- Use arrow functions for callbacks and concise logic.
- Prefer `for...of` over `.forEach()` where readability improves.
- Use optional chaining (`?.`) and nullish coalescing (`??`) appropriately.
- Prefer template literals over string concatenation.
- Use destructuring when it improves clarity.

---

# Async & Promise Handling

- Prefer `async/await` over chained promises.
- Always await promises intentionally.
- Handle asynchronous failures with meaningful error handling.
- Do not use async functions as Promise constructors/executors.

---

# React & JSX

- Prefer functional components.
- Keep hooks at the top level only.
- Ensure hook dependency arrays are complete and correct.
- Use stable unique keys instead of array indexes whenever possible.
- Avoid defining components inside components.
- Prefer semantic HTML elements.
- Maintain accessibility standards:
  - Use meaningful alt text.
  - Preserve heading hierarchy.
  - Associate labels with inputs.
  - Support keyboard interaction where applicable.

---

# Error Handling & Debugging

- Remove `console.log`, `debugger`, and temporary debugging utilities before production commits.
- Throw proper `Error` objects with descriptive messages.
- Use early returns to reduce nested conditionals.
- Avoid empty catch blocks.

---

# Code Organization

- Keep functions focused and readable.
- Separate concerns clearly.
- Extract complex conditions into named variables or helper functions.
- Prefer straightforward conditionals over deeply nested ternaries.
- Keep files cohesive and purpose-driven.

---

# Security

- Use `rel="noopener noreferrer"` with `target="_blank"`.
- Avoid unsafe HTML injection unless absolutely necessary.
- Never use `eval()`.
- Sanitize and validate external/user input.

---

# Performance

- Avoid unnecessary object spreads inside loops.
- Reuse regex literals instead of recreating them repeatedly.
- Prefer direct imports over namespace imports where practical.
- Avoid excessive barrel exports.
- Use framework-optimized image components where available.

---

# Framework Guidance

## Next.js

- Use the Next.js `Image` component when applicable.
- Prefer Server Components for async data fetching.
- Use metadata APIs instead of manually manipulating head tags.

## React 19+

- Prefer passing `ref` directly as a prop when supported.

## Solid / Vue / Svelte / Qwik

- Use framework-native attribute conventions (`class`, `for`, etc.).

---

# Testing

- Keep assertions inside `it()` or `test()` blocks.
- Prefer async/await over done callbacks.
- Do not commit `.only` or `.skip`.
- Keep test structure shallow and readable.

---

# Biome Responsibilities

Biome handles:

- Formatting consistency
- Linting
- Import organization
- Common code quality enforcement

Developers should focus on:

1. Business logic correctness
2. Architecture and maintainability
3. Edge case handling
4. Accessibility and UX
5. Performance-sensitive logic
6. Meaningful naming and documentation

---

Run `bunx biome check --write .` before committing changes to ensure repository compliance.
```
