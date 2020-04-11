# EP base64

<a href="https://www.patreon.com/bePatron?u=20396046">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="38">
</a>

<a href="https://ostr.io/info/built-by-developers-for-developers">
  <img src="https://ostr.io/apple-touch-icon-60x60.png" height="38">
</a>

"**E**nhanced **P**erformance" `base64` package for Meteor, on top of highly efficient [`ostrio:base64` package](https://github.com/VeliovGroup/meteor-base64/).

__Note:__ This package isn't published to Atmosphere, as it has to have the same name as MDG's `base64` package in order to replace it in all dependencies.

## Installation

### Option 1 (git submodule):

This method is recommended to keep package up to date with `git submodule update --force --recursive --remote` command.

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

## Support this project:

- [Become a patron](https://www.patreon.com/bePatron?u=20396046) — support my open source contributions with monthly donation
- Use [ostr.io](https://ostr.io) — [Monitoring](https://snmp-monitoring.com), [Analytics](https://ostr.io/info/web-analytics), [WebSec](https://domain-protection.info), [Web-CRON](https://web-cron.info) and [Pre-rendering](https://prerendering.com) for a website
