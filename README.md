# `@latehours/tailwind` 💨

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jozan/tailwind/build.yml?branch=main&style=flat)
![Dependencies amount 0](https://img.shields.io/badge/dependencies%20-%200%20-%200?style=flat)
![NPM Downloads](https://img.shields.io/npm/dm/%40latehours%2Ftailwind?style=flat)
![NPM Version](https://img.shields.io/npm/v/%40latehours%2Ftailwind?style=flat)
![GitHub License](https://img.shields.io/github/license/jozan/tailwind?style=flat)
![Made with vacuum cleaner](https://img.shields.io/badge/made%20with%20-%20husqvarna%20vacuum%20cleaner%20-%20made%20with%20husqvarna?style=flat&logo=husqvarna)
[![package size](https://deno.bundlejs.com/?q=%40latehours/tailwind/ligatures&badge=detailed&badge-style=flat&label=size)](https://bundlejs.com/?q=%40latehours/tailwind/ligatures)

**`@latehours/tailwind`** is collection of plugins for
[Tailwind CSS](https://tailwindcss.com) that i need often enough.

is has **zero dependencies**. ofc you need to have `tailwindcss` set up
in your project.

currently it has only one plugin `ligatures` and one utility `cn`. more
might be added in the future.

## usage

install the library using your package manager of choice:

```sh
npm install @latehours/tailwind
pnpm install @latehours/tailwind
bun add @latehours/tailwind
yarn add @latehours/tailwind
```

### `ligatures` plugin

define how ligatures should behave.

in your `tailwind.config.mjs`:

```typescript
import { ligatures } from "@latehours/tailwind/ligatures";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [ligatures()],
}
```

in your `file.html` or `component.tsx`:

```html
<div class="ligatures-none">no ligatures</div>
<div class="ligatures-normal">normal ligatures</div>
<div class="ligatures-none">no ligatures</div>
<div class="ligatures-common">common ligatures</div>
<div class="ligatures-no-common">no common ligatures</div>
<div class="ligatures-discretionary">discretionary ligatures</div>
<div class="ligatures-no-discretionary">no discretionary ligatures</div>
<div class="ligatures-historical">historical ligatures</div>
<div class="ligatures-no-historical">no historical ligatures</div>
<div class="ligatures-contextual">contextual ligatures</div>
<div class="ligatures-no-contextual">no contextual ligatures</div>
```

### `cn` utility

merge classnames together.

first add `clsx` and `tailwind-merge` to your deps then you can use `cn`:

```typescript
import { cn } from "@latehours/tailwind/cn";

const padding = "p-4";
const classes = cn("text-red-500", "bg-blue-500", padding);
```

## development

To install dev dependencies:

```bash
bun install
```

when creating commits follow the [conventional commits](https://www.conventionalcommits.org)
format.
