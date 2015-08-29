# sure
Asks you if you are sure. If you are not, it will return an error code. Is useful in scripts where you want a confirmation before executing.

For example if you have a destructive script in package.json (when using `&&` the next command wont be run if current command exits with an error code):

```json  
"scripts": {
  "clean": "sure && rm -rf dist",
}
```
```bash
$ npm run clean
Are you sure? [y/n]
...
```

Can be invoked with your own question and allowed answer:

```bash
$ sure --question "Type ok to continue." --yes "ok"
Type ok to continue.
...
```
