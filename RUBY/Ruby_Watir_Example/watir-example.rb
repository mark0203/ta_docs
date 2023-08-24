# Require the gems we want to use
require 'watir'
require 'webdrivers'
require 'faker'

# Initialize the Browser
browser = Watir::Browser.new

# Navigate to Page
browser.goto 'watir.com/examples/simple_form.html'

# Fill out Text Field Names
browser.text_field(id: 'first_name').set 'Luke'
browser.text_field(id: 'last_name').set 'Perry'

# Use Random Email Address via Faker gem
# Read more about Faker gem here: https://github.com/stympy/faker#readme
random_email = Faker::Internet.email
browser.text_field(id: 'email').set random_email

# Select List:
browser.select(id: 'country').select 'Norway'

# Checkboxes:
browser.checkbox(id: 'interests_cars').click
browser.checkbox(id: 'interests_dentistry').click

# Radio Button:
browser.radio(id: 'newsletter_no').click

# Use RadioSet instead of Radio Button:
browser.radio_set(name: 'newsletter').select('Yes')

# Click Button:
browser.button(id: 'submitButton').click

# Evaluate Results:
browser.p(id: 'name').text == 'Hello Luke Perry,' # => true
browser.p(id: 'newsletter').text == "You will be receiving our newsletter at #{random_email}" # => true
browser.p(id: 'activities').text == 'We hope you continue to enjoy cars, dentistry in Norway' # => true