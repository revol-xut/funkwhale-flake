# Funkwhale flake

Funkwhale 1.2.7 for NixOS 22.05 

Below is an example of a nixos configuration using this flake :

```nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.05";
  inputs.funkwhale.url = "github:mmai/funkwhale-flake";

  outputs = { self, nixpkgs, funkwhale }: 
  let
    system = "x86_64-linux";
  in {
    nixosConfigurations = {

      server-hostname = nixpkgs.lib.nixosSystem {
        system = system;
        modules = [ 
          nixpkgs.nixosModules.notDetected
	        funkwhale.nixosModule
          ( { config, pkgs, ... }:
            { imports = [ ./hardware-configuration.nix ];

              nix = {
                package = pkgs.nixUnstable;
                extraOptions = ''
                  experimental-features = nix-command flakes
                '';
              };

              nixpkgs.overlays = [ funkwhale.overlay ];

              services.funkwhale = {
                enable = true;
                hostname = "funkwhale.rhumbs.fr";
                defaultFromEmail = "noreply@funkwhale.rhumbs.fr";
                protocol = "https";
                # forceSSL = false; # uncomment when LetsEncrypt needs to access "http:" in order to check domain
                api = {
                  # Generate one using `openssl rand -base64 45`, for example
                  djangoSecretKey = "yoursecretkey";
                };
              };

              security.acme = {
                email = "your@email.com";
                acceptTerms = true;
              };

              # Overrides default 30M
              services.nginx.clientMaxBodySize = "100m";

              services.fail2ban.enable = true;
              networking.firewall.allowedTCPPorts = [ 80 443 ];
            })
        ];
      };

    };
  };
}
```

## Imports

* Copy audio files to the server on the _/srv/funkwhale/music/import/_ directory
* execute the import script as _funkwhale_ user, with the library id as a parameter
```
su -l funkwhale -s /bin/sh -c "/srv/funkwhale/importMusic.sh <your_library_id>"
```

## Test on a local container

- start the funkwhale services in a container on the local machine : `make local`
- wait 30s for the bootstraping of funkwhale services, then create the super user : `make superuser`
- connect to the local service: 
Get the ip address of the container : `machinectl`,  which output something like this :
```
MACHINE   CLASS     SERVICE        OS    VERSION ADDRESSES
funkwhale container systemd-nspawn nixos 22.05   10.233.2.2…
```

Then browse to the ip  `firefox http://10.233.2.2` and login with the super user credentials you created.
