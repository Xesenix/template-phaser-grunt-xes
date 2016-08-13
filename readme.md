# Phaser with grunt

This is simple scaffold of Phaser project with grunt task runner.

All javascript files from `src/js` directory are browserifed to single file `public/js/app.js` phaser is added as seperate global library becouse it isnt compatible with loading via node module system.

# Grunt tasks

Default grunt task watches for file changes and rebuilds project after every change.

```
grunt
```

You can seperatly run build taks build task if you want to rebuild project without active watching for changes.

```
grunt build
```

Also there is preapared task for running test :

```
grunt test
```