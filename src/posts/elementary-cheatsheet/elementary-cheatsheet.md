---
date: "01-08-2019"
title: "Elementary Cheatsheet"
---

General
----

Upgrade and update
~~~
sudo apt-get update && sudo apt-get upgrade
~~~
Allow PPA's (Personal Packages Archives)
~~~
sudo apt-get install software-properties-common
~~~

Prevent overheat and save battery time
~~~
sudo apt install tlp tlp-rdw 
~~~

Adding Elementary Tweaks (Extended system settings)
~~~
sudo add-apt-repository ppa:philip.scott/elementary-tweaks
sudo apt-get update
sudo apt-get install elementary-tweaks
~~~
Preloading often used applications
~~~
sudo apt-get install preload
~~~
Applications
----
~~~
sudo apt install vlc // Video Player
sudo apt install libreoffice // Office Package
sudo apt install transmission // Torrent client
sudo apt install steam // Game client
sudo apt-get install google-chrome-stable // Google Chrome
~~~

Tweaking
----
Remove the guest session
~~~
sudo sh -c "echo 'allow-guest=false' >> 
/usr/share/lightdm/lightdm.conf.d/40-pantheon-greeter.conf"
~~~

Remove round corners of the screen
~~~
gsettings set org.pantheon.desktop.gala.mask-corners enable false
~~~

Disable automatic suspend
~~~
gsettings set org.gnome.desktop.session idle-delay 0
~~~

Remove language icon in panel
~~~
sudo apt remove --purge wingpanel-indicator-keyboard 
~~~

Adding Neofetch to the terminal
~~~
sudo add-apt-repository ppa:dawidd0811/neofetch
sudo apt update
sudo apt install neofetch
sudo nano ~/.bashrc // add neofetch in there
~~~