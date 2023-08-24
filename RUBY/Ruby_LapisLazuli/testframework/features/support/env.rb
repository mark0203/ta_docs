################################################################################
# Copyright 2023 spriteCloud B.V. All rights reserved.
# Generated by LapisLazuli, version 3.0.2
# Author: "Mark Duivesteijn" <?>
require 'lapis_lazuli'
require 'lapis_lazuli/cucumber'

LapisLazuli::WorldModule::Config.add_config("config/config.yml")
LapisLazuli::WorldModule::Config.add_config("config/users.yml")
World(LapisLazuli)

# Do something when LapisLazuli is started (This is before the browser is opened)
LapisLazuli.Start do
  #If BROWSER is NIL, Lapis Lazuli will default to Firefox
  if ENV['BROWSER'] == 'firefox'

    # Get Selenium to create a profile object
    require 'selenium-webdriver'
    profile = Selenium::WebDriver::Firefox::Profile.new

    # These settings prevent a warning after authenticating via URL
    # For example user:pass@https://website.com/
    profile['network.http.phishy-userpass-length'] = 255
    profile['network.http.use-cache'] = false

    # Start the browser with these settings
    browser :firefox, :profile => profile

  end
end