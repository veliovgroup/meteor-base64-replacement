# EP base64

"**E**nhanced **P**erformance" `base64` package for Meteor, on top of highly efficient [`ostrio:base64` package](https://github.com/VeliovGroup/meteor-base64/).

__Note:__ This package isn't published to Atmosphere, as it has to have the same name as MDG's `base64` package in order to replace it in all dependencies.

## Installation

### Option 1 (git submodule):

1. In *Terminal* go to `meteor-app/packages`
2. Then add new git submodule:

```shell
# from meteor-app/packages
git submodule add https://github.com/VeliovGroup/meteor-base64-replacement
```

### Option 2 (symlink):

1. Download or clone this repository
2. In *Terminal* go to `meteor-app/packages` directory
3. Create symlink:

```shell
# from meteor-app/packages
ln -s /full/path/to/downloaded/repository base64
```

### Option 3 (clone):

1. Download or clone this repository
2. Place it into `meteor-app/packages` directory
3. Rename copied directory to `base64`, this is important, otherwise it will be treated differently

Check this package for updates, especially after Meteor releases a new version.
For more info see docs at [`ostrio:base64` package](https://github.com/VeliovGroup/meteor-base64#default-base64-package-replacement).
