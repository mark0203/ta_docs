# Ruby

## Installation

* [Download](https://rubyinstaller.org/) and install Ruby
    * download the version with devkit
    * [x] Add ruby executables to your PATH
    * [x] Associate .rv and .rbw files with this Ruby installation
    * [x] MSYS2 development toolchain
    * [x] Run 'ridk install'...
        * MSYS2
            * `Enter` on the first question
            * `Enter` on the second question
    * Open the command prompt
        * Check the version `ruby --version`
        * Update `gem update --system`
        * Install watir `gem install 'watir'`
        * Install webdrivers `gem install 'webdrivers'`

## Ruby + Watir example

[Ruby + Watir Example](Ruby_Watir_Example/Ruby_Watir_Example.md)

### First test of the tools

* Open the command prompt and let's try out the following commands
* irb
* require 'watir'
* browser = Watir::Browser.new
* browser.goto "watir.com"
* browser.quit
* exit

### Simple framework setup

