## How to stetp Tailwind CSS (step by step):

## This following method is the updated and easiest way to setup and automate the tailwind css:

Step 1: Run this command in terminal to create package.json file:

```
npm install
```

Step 2: Install tailwind css as a dev dependency:

```
npm install -D tailwindcss @tailwindcss/cli
```

Step 3: Create a folder & a file:

```
src/input.css
```

Step 4: Import this line on src/input.css:

```
@import "tailwindcss";
```

Step 5: Start the Tailwind CLI build process

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Step 6: For better control and automation, consider adding this code in package.json script:

```
"scripts": {"build": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"}
```

Step 7: Now, create HTML file and input in in html head:

```
<link rel="stylesheet" href="./output.css" re">
```

Now Tailwind CSS has been installed.
