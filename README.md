# npm-typescript-consumer
Example TypeScript application consuming [@jlam55555-playground/npm-typescript][1]

See [@jlam55555-playground/npm-hello-world-consumer][2] for a basic example of how to import and use a package published on the GitHub package registry. The only advancement on this project is that we use TypeScript and a nested entrypoint structure, which are apparent from the [@jlam55555-playground/npm-typescript][1] file structure.

The TypeScript configuration of this project is similar to that of the npm-typescript package.

### Running this project
```shell script
$ npm run clean     # remove built files
$ npm run build     # perform TypeScript transpilation
$ npm start         # run compiled TypeScript files
```

[1]: https://www.github.com/jlam55555-playground/npm-typescript
[2]: https://www.github.com/jlam55555-playground/npm-hello-world-consumer
